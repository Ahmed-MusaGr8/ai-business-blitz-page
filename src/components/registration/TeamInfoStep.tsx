
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Control, UseFormWatch } from "react-hook-form";
import { FormData } from "./formSchema";

interface TeamInfoStepProps {
  control: Control<FormData>;
  watch: UseFormWatch<FormData>;
}

export const TeamInfoStep = ({ control, watch }: TeamInfoStepProps) => {
  return (
    <Card className="bg-white border border-gray-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-gray-900">Team Information</CardTitle>
        <CardDescription className="text-gray-600">
          Are you participating as part of a team?
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <FormField
          control={control}
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

        {watch("isTeam") === "yes" && (
          <>
            <FormField
              control={control}
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
              control={control}
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
  );
};
