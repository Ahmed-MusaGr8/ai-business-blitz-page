
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Control } from "react-hook-form";
import { FormData } from "./formSchema";

interface EventQuestionsStepProps {
  control: Control<FormData>;
}

export const EventQuestionsStep = ({ control }: EventQuestionsStepProps) => {
  return (
    <Card className="bg-white border border-gray-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-gray-900">Event-Specific Questions</CardTitle>
        <CardDescription className="text-gray-600">
          Help us understand your goals and interests
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <FormField
          control={control}
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
                <SelectContent className="bg-white border-gray-300 z-50">
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
          control={control}
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
            control={control}
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
            control={control}
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
          control={control}
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
  );
};
