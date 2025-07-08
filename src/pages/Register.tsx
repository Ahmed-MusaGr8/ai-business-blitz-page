
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
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    toast({
      title: "Registration Successful!",
      description: "Check your email for confirmation and next steps.",
    });
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
    return <RegistrationSuccess />;
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
