
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { SponsorsCarousel } from "@/components/SponsorsCarousel";
import { formSchema, FormData } from "@/components/registration/formSchema";
import { RegistrationHeader } from "@/components/registration/RegistrationHeader";
import { PersonalInfoStep } from "@/components/registration/PersonalInfoStep";
import { BackgroundInfoStep } from "@/components/registration/BackgroundInfoStep";
import { TeamInfoStep } from "@/components/registration/TeamInfoStep";
import { EventQuestionsStep } from "@/components/registration/EventQuestionsStep";
import { LegalConsentStep } from "@/components/registration/LegalConsentStep";
import { RegistrationSuccess } from "@/components/registration/RegistrationSuccess";
import { FormNavigation } from "@/components/registration/FormNavigation";

const Register = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [defaultPassword, setDefaultPassword] = useState("");
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);
  const { toast } = useToast();
  const totalSteps = 5;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      photoRelease: false,
      dataConsent: false,
      age: undefined,
    }
  });

  const onSubmit = async (data: FormData) => {
    console.log("Form submitted with data:", data);
    
    try {
      const response = await fetch('https://krgzjhondqkcgdlpyuon.supabase.co/functions/v1/register-participant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtyZ3pqaG9uZHFrY2dkbHB5dW9uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3OTQzMjAsImV4cCI6MjA2ODM3MDMyMH0.6IDNIALtgiytsPYOqMJydmnZK1Qe_jpgGqAQLb6CGgo`
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Registration failed');
      }

      setDefaultPassword(result.defaultPassword);
      setSubmittedData(data);
      setIsSubmitted(true);
      
      toast({
        title: "Registration Successful!",
        description: "Your participant dashboard has been created. Save your default password!",
      });
    } catch (error: any) {
      console.error('Registration error:', error);
      toast({
        title: "Registration Failed",
        description: error.message || "An error occurred during registration. Please try again.",
        variant: "destructive"
      });
    }
  };

  const nextStep = async () => {
    const fieldsToValidate = getFieldsForStep(currentStep);
    const isValid = await form.trigger(fieldsToValidate);
    
    if (isValid) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const getFieldsForStep = (step: number): (keyof FormData)[] => {
    switch (step) {
      case 1:
        return ['firstName', 'lastName', 'email', 'phone', 'country', 'state', 'city', 'postalCode'];
      case 2:
        return ['age', 'gender', 'fieldOfStudy', 'university', 'tshirtSize'];
      case 3:
        return ['isTeam'];
      case 4:
        return ['hearAbout', 'goals', 'mentorshipInterest', 'jobOpportunities'];
      case 5:
        return ['termsAgreed', 'codeOfConduct'];
      default:
        return [];
    }
  };

  const handleCountryChange = (countryCode: string) => {
    setSelectedCountry(countryCode);
    setSelectedState("");
    form.setValue('state', '');
    form.setValue('city', '');
  };

  const handleStateChange = (stateCode: string) => {
    setSelectedState(stateCode);
    form.setValue('city', '');
  };

  if (isSubmitted) {
    return <RegistrationSuccess data={submittedData} defaultPassword={defaultPassword} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <RegistrationHeader currentStep={currentStep} totalSteps={totalSteps} />

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {currentStep === 1 && (
              <PersonalInfoStep
                control={form.control}
                selectedCountry={selectedCountry}
                selectedState={selectedState}
                onCountryChange={handleCountryChange}
                onStateChange={handleStateChange}
              />
            )}

            {currentStep === 2 && (
              <BackgroundInfoStep control={form.control} />
            )}

            {currentStep === 3 && (
              <TeamInfoStep control={form.control} watch={form.watch} />
            )}

            {currentStep === 4 && (
              <EventQuestionsStep control={form.control} />
            )}

            {currentStep === 5 && (
              <LegalConsentStep control={form.control} />
            )}

            <FormNavigation
              currentStep={currentStep}
              totalSteps={totalSteps}
              isSubmitting={form.formState.isSubmitting}
              onPrevious={prevStep}
              onNext={nextStep}
            />
          </form>
        </Form>
        
        <div className="mt-12">
          <SponsorsCarousel />
        </div>
      </div>
    </div>
  );
};

export default Register;
