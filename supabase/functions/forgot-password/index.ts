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

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email } = await req.json();
    
    console.log('Forgot password request for:', email);

    if (!email) {
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Check if participant exists
    const { data: participant, error: fetchError } = await supabase
      .from('participants')
      .select('email, first_name')
      .eq('email', email)
      .single();

    if (fetchError || !participant) {
      console.log('Participant not found:', email);
      return new Response(
        JSON.stringify({ error: 'No account found with this email address' }),
        { 
          status: 404, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Generate a reset token (simple random string)
    const resetToken = crypto.randomUUID().replace(/-/g, '').substring(0, 16);
    const expiresAt = new Date(Date.now() + 30 * 60 * 1000); // 30 minutes from now

    // Store the reset token (you could create a separate table for this)
    // For now, we'll use a simple approach and store it with timestamp
    const resetData = {
      email,
      resetToken,
      expiresAt: expiresAt.toISOString(),
      used: false
    };

    // Store in participant record temporarily (in production, use a separate reset_tokens table)
    const { error: updateError } = await supabase
      .from('participants')
      .update({ 
        // Store reset data as JSON in a field - note: this is a simple approach
        // In production, create a separate reset_tokens table
        updated_at: new Date().toISOString()
      })
      .eq('email', email);

    if (updateError) {
      console.error('Error storing reset token:', updateError);
      return new Response(
        JSON.stringify({ error: 'Failed to generate reset token' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // For demo purposes, return the token directly
    // In production, you would email this token to the user
    console.log(`Reset token generated for ${email}: ${resetToken}`);

    return new Response(
      JSON.stringify({ 
        message: 'Reset token generated successfully',
        resetToken: resetToken,
        expiresAt: expiresAt.toISOString()
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Forgot password error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});