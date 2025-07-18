import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.52.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

// Hash password using Web Crypto API
async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, resetToken, newPassword } = await req.json();
    
    console.log('Reset password request for:', email);

    if (!email || !resetToken || !newPassword) {
      return new Response(
        JSON.stringify({ error: 'Email, reset token, and new password are required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    if (newPassword.length < 6) {
      return new Response(
        JSON.stringify({ error: 'Password must be at least 6 characters long' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Check if participant exists
    const { data: participant, error: fetchError } = await supabase
      .from('participants')
      .select('email, first_name, updated_at')
      .eq('email', email)
      .single();

    if (fetchError || !participant) {
      console.log('Participant not found:', email);
      return new Response(
        JSON.stringify({ error: 'Invalid email or reset token' }),
        { 
          status: 404, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // For demo purposes, we'll validate the token by checking if it was generated recently
    // In production, you would store reset tokens in a separate table with expiration
    const updatedAt = new Date(participant.updated_at);
    const now = new Date();
    const timeDiff = now.getTime() - updatedAt.getTime();
    const thirtyMinutes = 30 * 60 * 1000;

    // Simple validation: token should be valid and participant record updated within 30 minutes
    if (timeDiff > thirtyMinutes) {
      console.log('Reset token expired for:', email);
      return new Response(
        JSON.stringify({ error: 'Reset token has expired' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // In a real implementation, you would validate the actual token stored in database
    // For demo, we'll accept any token if the timing is right
    if (!resetToken || resetToken.length < 10) {
      return new Response(
        JSON.stringify({ error: 'Invalid reset token' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Hash the new password
    const hashedPassword = await hashPassword(newPassword);

    // Update the password
    const { error: updateError } = await supabase
      .from('participants')
      .update({ 
        password_hash: hashedPassword,
        password_changed: true,
        updated_at: new Date().toISOString()
      })
      .eq('email', email);

    if (updateError) {
      console.error('Error updating password:', updateError);
      return new Response(
        JSON.stringify({ error: 'Failed to update password' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    console.log(`Password updated successfully for: ${email}`);

    return new Response(
      JSON.stringify({ 
        message: 'Password updated successfully',
        participant: {
          email: participant.email,
          firstName: participant.first_name
        }
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Reset password error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});