import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { SponsorsCarousel } from "@/components/SponsorsCarousel";

const formSchema = z.object({
  // Personal Information
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  country: z.string().min(1, "Country is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State/Province is required"),
  postalCode: z.string().min(1, "Postal code is required"),
  
  // Demographics
  age: z.string().min(1, "Age is required"),
  gender: z.string().optional(),
  fieldOfStudy: z.string().min(1, "Field of study is required"),
  university: z.string().min(1, "School/University is required"),
  experienceLevel: z.string().min(1, "Experience level is required"),
  dietaryRestrictions: z.string().optional(),
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

type FormData = z.infer<typeof formSchema>;

const ZCIcon = () => (
  <svg viewBox="0 0 32 32" className="h-8 w-8 text-black">
    <rect width="32" height="32" rx="6" fill="currentColor"/>
    <text x="16" y="22" textAnchor="middle" fill="white" fontFamily="system-ui" fontSize="14" fontWeight="bold">ZC</text>
  </svg>
);

const Register = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const totalSteps = 5;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      photoRelease: false,
      dataConsent: false,
    }
  });

  const onSubmit = async (data: FormData) => {
    console.log("Form submitted with data:", data);
    
    // Simulate API call
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
        return ['firstName', 'lastName', 'email', 'phone', 'country', 'city', 'state', 'postalCode'];
      case 2:
        return ['age', 'fieldOfStudy', 'university', 'experienceLevel', 'tshirtSize'];
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

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <Card className="w-full max-w-2xl bg-white border border-gray-200 text-center shadow-lg">
          <CardHeader className="pb-8">
            <div className="flex justify-center mb-6">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
              Thank You for Registering!
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Your registration for the Zero Code Challenge has been successfully submitted.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6 text-left">
              <h3 className="text-gray-900 font-semibold mb-3">What's Next?</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Check your email for confirmation and onboarding details</li>
                <li>• Join our Discord community for updates and networking</li>
                <li>• Review the pre-challenge materials we'll send you</li>
                <li>• Mark your calendar for the challenge start date</li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => window.open('https://discord.com', '_blank')}
              >
                Join Discord Community
              </Button>
              <Button 
                variant="outline" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
                onClick={() => window.location.href = '/'}
              >
                Back to Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <ZCIcon />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Zero Code Challenge</h1>
                <p className="text-sm text-gray-500">Registration</p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              className="text-gray-500 hover:text-gray-900"
              onClick={() => window.location.href = '/'}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Register for the Zero Code Challenge</h2>
            <span className="text-sm text-gray-500">Step {currentStep} of {totalSteps}</span>
          </div>
          <Progress value={(currentStep / totalSteps) * 100} className="h-2" />
        </div>

        {/* Sponsors Carousel */}
        <div className="mb-8">
          <SponsorsCarousel />
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <Card className="bg-white border border-gray-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-gray-900">Personal Information</CardTitle>
                  <CardDescription className="text-gray-600">
                    Please provide your basic information. Required fields are marked with *
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">First Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} className="bg-white border-gray-300 text-gray-900 focus:border-blue-500" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Last Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} className="bg-white border-gray-300 text-gray-900 focus:border-blue-500" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john.doe@example.com" {...field} className="bg-white border-gray-300 text-gray-900 focus:border-blue-500" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+1 (555) 123-4567" {...field} className="bg-white border-gray-300 text-gray-900 focus:border-blue-500" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Country *</FormLabel>
                          <FormControl>
                            <Input placeholder="United States" {...field} className="bg-white border-gray-300 text-gray-900 focus:border-blue-500" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">City *</FormLabel>
                          <FormControl>
                            <Input placeholder="New York" {...field} className="bg-white border-gray-300 text-gray-900 focus:border-blue-500" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="state"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">State/Province *</FormLabel>
                          <FormControl>
                            <Input placeholder="New York" {...field} className="bg-white border-gray-300 text-gray-900 focus:border-blue-500" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="postalCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Postal Code *</FormLabel>
                          <FormControl>
                            <Input placeholder="10001" {...field} className="bg-white border-gray-300 text-gray-900 focus:border-blue-500" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Demographics & Background */}
            {currentStep === 2 && (
              <Card className="bg-white border border-gray-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-gray-900">Background Information</CardTitle>
                  <CardDescription className="text-gray-600">
                    Tell us about your background and preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="age"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Age *</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="25" {...field} className="bg-white border-gray-300 text-gray-900 focus:border-blue-500" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Gender</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                                <SelectValue placeholder="Select gender (optional)" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-white border-gray-300">
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                              <SelectItem value="non-binary">Non-binary</SelectItem>
                              <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="fieldOfStudy"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Major/Field of Study *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                              <SelectValue placeholder="Select your field of study" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-white border-gray-300">
                            <SelectItem value="computer-science">Computer Science</SelectItem>
                            <SelectItem value="engineering">Engineering</SelectItem>
                            <SelectItem value="business">Business</SelectItem>
                            <SelectItem value="design">Design</SelectItem>
                            <SelectItem value="mathematics">Mathematics</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="university"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">School/University *</FormLabel>
                        <FormControl>
                          <Input placeholder="Massachusetts Institute of Technology" {...field} className="bg-white border-gray-300 text-gray-900 focus:border-blue-500" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="experienceLevel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Years of Experience in Coding/AI *</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="beginner" id="beginner" />
                              <label htmlFor="beginner" className="text-gray-700 cursor-pointer">Beginner (0-1 years)</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="intermediate" id="intermediate" />
                              <label htmlFor="intermediate" className="text-gray-700 cursor-pointer">Intermediate (2-5 years)</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="advanced" id="advanced" />
                              <label htmlFor="advanced" className="text-gray-700 cursor-pointer">Advanced (5+ years)</label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="dietaryRestrictions"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Dietary Restrictions</FormLabel>
                          <FormControl>
                            <Input placeholder="Vegetarian, Vegan, Allergies, etc." {...field} className="bg-white border-gray-300 text-gray-900 focus:border-blue-500" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="tshirtSize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">T-shirt Size *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                                <SelectValue placeholder="Select size" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-white border-gray-300">
                              <SelectItem value="xs">XS</SelectItem>
                              <SelectItem value="s">S</SelectItem>
                              <SelectItem value="m">M</SelectItem>
                              <SelectItem value="l">L</SelectItem>
                              <SelectItem value="xl">XL</SelectItem>
                              <SelectItem value="xxl">XXL</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Team Information */}
            {currentStep === 3 && (
              <Card className="bg-white border border-gray-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-gray-900">Team Information</CardTitle>
                  <CardDescription className="text-gray-600">
                    Are you participating as part of a team?
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="isTeam"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Are you registering as part of a team? *</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="no" id="individual" />
                              <label htmlFor="individual" className="text-gray-700 cursor-pointer">No, I'm participating individually</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="yes" id="team" />
                              <label htmlFor="team" className="text-gray-700 cursor-pointer">Yes, I'm part of a team</label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {form.watch("isTeam") === "yes" && (
                    <>
                      <FormField
                        control={form.control}
                        name="teamName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">Team Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your team name" {...field} className="bg-white border-gray-300 text-gray-900 focus:border-blue-500" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="teamMembers"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">Team Members</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="List your team members (names and email addresses)" 
                                {...field} 
                                className="bg-white border-gray-300 text-gray-900 focus:border-blue-500 min-h-[100px]" 
                              />
                            </FormControl>
                            <FormDescription className="text-gray-500">
                              Please list the names and email addresses of your team members
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Step 4: Event-Specific Questions */}
            {currentStep === 4 && (
              <Card className="bg-white border border-gray-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-gray-900">Event-Specific Questions</CardTitle>
                  <CardDescription className="text-gray-600">
                    Help us understand your goals and interests
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="hearAbout"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">How did you hear about the challenge? *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-white border-gray-300">
                            <SelectItem value="social-media">Social Media</SelectItem>
                            <SelectItem value="friend">Friend/Colleague</SelectItem>
                            <SelectItem value="university">University/School</SelectItem>
                            <SelectItem value="sponsor">Sponsor</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="goals"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">What do you hope to achieve/learn from this challenge? *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Share your goals and expectations for the challenge..." 
                            {...field} 
                            className="bg-white border-gray-300 text-gray-900 focus:border-blue-500 min-h-[120px]" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="mentorshipInterest"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Interested in mentorship? *</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-2"
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="yes" id="mentorship-yes" />
                                <label htmlFor="mentorship-yes" className="text-gray-700 cursor-pointer">Yes</label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="no" id="mentorship-no" />
                                <label htmlFor="mentorship-no" className="text-gray-700 cursor-pointer">No</label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="jobOpportunities"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Interested in job opportunities with sponsors? *</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-2"
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="yes" id="jobs-yes" />
                                <label htmlFor="jobs-yes" className="text-gray-700 cursor-pointer">Yes</label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="no" id="jobs-no" />
                                <label htmlFor="jobs-no" className="text-gray-700 cursor-pointer">No</label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="dataConsent"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-gray-700">
                            I consent to share my data with sponsors for job opportunities
                          </FormLabel>
                          <FormDescription className="text-gray-500">
                            This helps sponsors reach out to you with relevant opportunities
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
            )}

            {/* Step 5: Legal and Consent */}
            {currentStep === 5 && (
              <Card className="bg-white border border-gray-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-gray-900">Legal and Consent</CardTitle>
                  <CardDescription className="text-gray-600">
                    Please review and agree to our terms and conditions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="termsAgreed"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-gray-700">
                            I agree to the <a href="/terms" className="text-blue-600 hover:text-blue-700 underline">Terms and Conditions</a> *
                          </FormLabel>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="codeOfConduct"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-gray-700">
                            I agree to the <a href="/code-of-conduct" className="text-blue-600 hover:text-blue-700 underline">Code of Conduct</a> *
                          </FormLabel>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="photoRelease"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-gray-700">
                            I consent to photo/video release for event promotion
                          </FormLabel>
                          <FormDescription className="text-gray-500">
                            Optional: Allow us to use photos/videos of you for marketing purposes
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-gray-900 font-semibold mb-2">Privacy Statement</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Your information will be used solely for event-related purposes including registration confirmation, 
                      communication about the challenge, and connecting you with mentors and sponsors as requested. 
                      We implement secure data handling practices and will not share your information with third parties 
                      without your explicit consent. Read our full <a href="/privacy" className="text-blue-600 hover:text-blue-700 underline">Privacy Policy</a>.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-6">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>

              {currentStep < totalSteps ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Next
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  {form.formState.isSubmitting ? "Submitting..." : "Submit Registration"}
                </Button>
              )}
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Register;
