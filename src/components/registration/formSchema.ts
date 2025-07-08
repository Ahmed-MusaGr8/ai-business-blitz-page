
import * as z from "zod";

export const formSchema = z.object({
  // Personal Information
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  country: z.string().min(1, "Country is required"),
  state: z.string().min(1, "State/Province is required"),
  city: z.string().min(1, "City is required"),
  postalCode: z.string().min(1, "Postal code is required"),
  
  // Demographics
  age: z.number().min(13, "Age must be at least 13").max(100, "Age must be less than 100"),
  gender: z.string().min(1, "Gender is required"),
  fieldOfStudy: z.string().min(1, "Field of study is required"),
  university: z.string().min(1, "School/University is required"),
  tshirtSize: z.string().min(1, "T-shirt size is required"),
  
  // Team Information
  isTeam: z.string().min(1, "Please specify if you're registering as a team"),
  teamName: z.string().optional(),
  teamMembers: z.string().optional(),
  
  // Event-Specific
  hearAbout: z.string().min(1, "Please tell us how you heard about the challenge"),
  goals: z.string().min(10, "Please tell us what you hope to achieve (at least 10 characters)"),
  mentorshipInterest: z.string().min(1, "Please specify your mentorship interest"),
  jobOpportunities: z.string().min(1, "Please specify your job opportunity interest"),
  
  // Legal and Consent
  termsAgreed: z.boolean().refine(val => val === true, "You must agree to the Terms and Conditions"),
  codeOfConduct: z.boolean().refine(val => val === true, "You must agree to the Code of Conduct"),
  photoRelease: z.boolean().optional(),
  dataConsent: z.boolean().optional(),
});

export type FormData = z.infer<typeof formSchema>;
