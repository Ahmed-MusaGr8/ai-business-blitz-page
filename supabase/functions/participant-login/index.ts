import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface LoginRequest {
  email: string;
  password: string;
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

    const { email, password }: LoginRequest = await req.json();

    console.log("Login attempt for:", email);

    // Get participant by email
    const { data: participant, error: fetchError } = await supabase
      .from("participants")
      .select("*")
      .eq("email", email)
      .single();

    if (fetchError || !participant) {
      console.error("Participant not found:", email);
      return new Response(
        JSON.stringify({ error: "Invalid email or password" }),
        {
          status: 401,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Verify password
    const bcrypt = await import("https://deno.land/x/bcrypt@v0.4.1/mod.ts");
    const isValidPassword = await bcrypt.compare(password, participant.password_hash);

    if (!isValidPassword) {
      console.error("Invalid password for:", email);
      return new Response(
        JSON.stringify({ error: "Invalid email or password" }),
        {
          status: 401,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Login successful for:", email);

    // Generate a simple JWT-like token (for demo purposes)
    const token = btoa(JSON.stringify({
      id: participant.id,
      email: participant.email,
      firstName: participant.first_name,
      lastName: participant.last_name,
      exp: Date.now() + (24 * 60 * 60 * 1000) // 24 hours
    }));

    return new Response(
      JSON.stringify({ 
        success: true,
        token: token,
        participant: {
          id: participant.id,
          email: participant.email,
          firstName: participant.first_name,
          lastName: participant.last_name,
          applicationStatus: participant.application_status,
          passwordChanged: participant.password_changed
        }
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in participant-login function:", error);
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