
import { Checkbox } from "@/components/ui/checkbox";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Control } from "react-hook-form";
import { FormData } from "./formSchema";

interface LegalConsentStepProps {
  control: Control<FormData>;
}

export const LegalConsentStep = ({ control }: LegalConsentStepProps) => {
  return (
    <Card className="bg-white border border-gray-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-gray-900">Legal and Consent</CardTitle>
        <CardDescription className="text-gray-600">
          Please review and agree to our terms and conditions
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <FormField
          control={control}
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
          control={control}
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
          control={control}
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
  );
};
