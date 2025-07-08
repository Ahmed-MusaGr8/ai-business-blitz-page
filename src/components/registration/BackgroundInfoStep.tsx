
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Control } from "react-hook-form";
import { FormData } from "./formSchema";

interface BackgroundInfoStepProps {
  control: Control<FormData>;
}

export const BackgroundInfoStep = ({ control }: BackgroundInfoStepProps) => {
  return (
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
            control={control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Age *</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="25" {...field} onChange={(e) => field.onChange(Number(e.target.value))} className="bg-white border-gray-300 text-gray-900 focus:border-blue-500" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Gender *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white border-gray-300 z-50">
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={control}
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
                <SelectContent className="bg-white border-gray-300 z-50">
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
          control={control}
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
          control={control}
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
                <SelectContent className="bg-white border-gray-300 z-50">
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
      </CardContent>
    </Card>
  );
};
