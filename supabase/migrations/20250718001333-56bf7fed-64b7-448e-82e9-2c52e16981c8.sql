-- Create participants table to store registration data
CREATE TABLE public.participants (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  
  -- Personal Information
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  phone TEXT,
  country TEXT NOT NULL,
  state TEXT NOT NULL,
  city TEXT NOT NULL,
  postal_code TEXT NOT NULL,
  
  -- Demographics
  age INTEGER NOT NULL,
  gender TEXT NOT NULL,
  field_of_study TEXT NOT NULL,
  university TEXT NOT NULL,
  tshirt_size TEXT NOT NULL,
  
  -- Team Information
  is_team BOOLEAN NOT NULL DEFAULT false,
  team_name TEXT,
  team_members TEXT,
  
  -- Event-Specific
  hear_about TEXT NOT NULL,
  goals TEXT NOT NULL,
  mentorship_interest TEXT NOT NULL,
  job_opportunities TEXT NOT NULL,
  
  -- Legal and Consent
  terms_agreed BOOLEAN NOT NULL DEFAULT true,
  code_of_conduct BOOLEAN NOT NULL DEFAULT true,
  photo_release BOOLEAN DEFAULT false,
  data_consent BOOLEAN DEFAULT false,
  
  -- System fields
  default_password TEXT NOT NULL, -- Store the original default password for reference
  password_changed BOOLEAN NOT NULL DEFAULT false,
  application_status TEXT NOT NULL DEFAULT 'submitted',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.participants ENABLE ROW LEVEL SECURITY;

-- Create policies for participant access
CREATE POLICY "Participants can view their own data" 
ON public.participants 
FOR SELECT 
USING (email = current_setting('request.jwt.claims', true)::jsonb->>'email');

CREATE POLICY "Participants can update their own data" 
ON public.participants 
FOR UPDATE 
USING (email = current_setting('request.jwt.claims', true)::jsonb->>'email');

-- Function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_participants_updated_at
BEFORE UPDATE ON public.participants
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX idx_participants_email ON public.participants(email);
CREATE INDEX idx_participants_application_status ON public.participants(application_status);