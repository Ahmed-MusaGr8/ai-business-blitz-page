import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
  token: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const { currentPassword, newPassword, token }: ChangePasswordRequest = await req.json();

    // Verify token
    let participantData;
    try {
      participantData = JSON.parse(atob(token));
    } catch {
      return new Response(
        JSON.stringify({ error: "Invalid token" }),
        {
          status: 401,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Check token expiration
    if (Date.now() > participantData.exp) {
      return new Response(
        JSON.stringify({ error: "Token expired" }),
        {
          status: 401,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Password change request for:", participantData.email);

    // Get participant by ID
    const { data: participant, error: fetchError } = await supabase
      .from("participants")
      .select("*")
      .eq("id", participantData.id)
      .single();

    if (fetchError || !participant) {
      console.error("Participant not found:", participantData.id);
      return new Response(
        JSON.stringify({ error: "Participant not found" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Verify current password using Web Crypto API
    const encoder = new TextEncoder();
    const currentData = encoder.encode(currentPassword);
    const currentHashBuffer = await crypto.subtle.digest('SHA-256', currentData);
    const currentHashArray = Array.from(new Uint8Array(currentHashBuffer));
    const currentPasswordHash = currentHashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    const isValidPassword = currentPasswordHash === participant.password_hash;

    if (!isValidPassword) {
      console.error("Invalid current password for:", participantData.email);
      return new Response(
        JSON.stringify({ error: "Current password is incorrect" }),
        {
          status: 401,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Hash new password using Web Crypto API
    const newData = encoder.encode(newPassword);
    const newHashBuffer = await crypto.subtle.digest('SHA-256', newData);
    const newHashArray = Array.from(new Uint8Array(newHashBuffer));
    const newPasswordHash = newHashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    // Update password
    const { error: updateError } = await supabase
      .from("participants")
      .update({
        password_hash: newPasswordHash,
        password_changed: true
      })
      .eq("id", participantData.id);

    if (updateError) {
      console.error("Error updating password:", updateError);
      return new Response(
        JSON.stringify({ error: updateError.message }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Password changed successfully for:", participantData.email);

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Password changed successfully"
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in change-participant-password function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);