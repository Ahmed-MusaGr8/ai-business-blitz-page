import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface RegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  country: string;
  state: string;
  city: string;
  postalCode: string;
  age: number;
  gender: string;
  fieldOfStudy: string;
  university: string;
  tshirtSize: string;
  isTeam: string;
  teamName?: string;
  teamMembers?: string;
  hearAbout: string;
  goals: string;
  mentorshipInterest: string;
  jobOpportunities: string;
  termsAgreed: boolean;
  codeOfConduct: boolean;
  photoRelease?: boolean;
  dataConsent?: boolean;
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

    const registrationData: RegistrationData = await req.json();

    // Generate a default password (first name + birth year + challenge)
    const defaultPassword = `${registrationData.firstName}${new Date().getFullYear() - registrationData.age}Challenge`;
    
    // Hash the password using Web Crypto API (Deno compatible)
    const encoder = new TextEncoder();
    const data = encoder.encode(defaultPassword);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const passwordHash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    console.log("Registering participant:", registrationData.email);

    // Insert participant data
    const { data: participant, error: insertError } = await supabase
      .from("participants")
      .insert({
        email: registrationData.email,
        password_hash: passwordHash,
        first_name: registrationData.firstName,
        last_name: registrationData.lastName,
        phone: registrationData.phone,
        country: registrationData.country,
        state: registrationData.state,
        city: registrationData.city,
        postal_code: registrationData.postalCode,
        age: registrationData.age,
        gender: registrationData.gender,
        field_of_study: registrationData.fieldOfStudy,
        university: registrationData.university,
        tshirt_size: registrationData.tshirtSize,
        is_team: registrationData.isTeam === "yes",
        team_name: registrationData.teamName,
        team_members: registrationData.teamMembers,
        hear_about: registrationData.hearAbout,
        goals: registrationData.goals,
        mentorship_interest: registrationData.mentorshipInterest,
        job_opportunities: registrationData.jobOpportunities,
        terms_agreed: registrationData.termsAgreed,
        code_of_conduct: registrationData.codeOfConduct,
        photo_release: registrationData.photoRelease || false,
        data_consent: registrationData.dataConsent || false,
        default_password: defaultPassword,
        application_status: "submitted"
      })
      .select()
      .single();

    if (insertError) {
      console.error("Error inserting participant:", insertError);
      return new Response(
        JSON.stringify({ error: insertError.message }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Participant registered successfully:", participant.id);

    return new Response(
      JSON.stringify({ 
        success: true, 
        participant: participant,
        defaultPassword: defaultPassword,
        message: "Registration successful! Your default password has been generated." 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in register-participant function:", error);
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