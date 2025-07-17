
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Control } from "react-hook-form";
import { getCountriesList, getStatesByCountry, getCitiesByState, getCitiesByCountry } from "@/utils/locationData";
import { FormData } from "./formSchema";

interface PersonalInfoStepProps {
  control: Control<FormData>;
  selectedCountry: string;
  selectedState: string;
  onCountryChange: (countryCode: string) => void;
  onStateChange: (stateCode: string) => void;
}

export const PersonalInfoStep = ({ 
  control, 
  selectedCountry, 
  selectedState, 
  onCountryChange, 
  onStateChange 
}: PersonalInfoStepProps) => {
  return (
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
            control={control}
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
            control={control}
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
            control={control}
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
            control={control}
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

        <FormField
          control={control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">Country *</FormLabel>
              <Select 
                onValueChange={(value) => {
                  field.onChange(value);
                  onCountryChange(value);
                }} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                    <SelectValue placeholder="Select your country" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white border-gray-300 max-h-60 z-50">
                  {getCountriesList().map((country) => (
                    <SelectItem key={country.value} value={country.value}>
                      {country.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">State/Province *</FormLabel>
              <Select 
                onValueChange={(value) => {
                  field.onChange(value);
                  onStateChange(value);
                }} 
                defaultValue={field.value} 
                disabled={!selectedCountry}
              >
                <FormControl>
                  <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                    <SelectValue placeholder={selectedCountry ? "Select your state/province" : "Select country first"} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white border-gray-300 max-h-60 z-50">
                  {getStatesByCountry(selectedCountry).map((state) => (
                    <SelectItem key={state.value} value={state.value}>
                      {state.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">City *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value} disabled={!selectedCountry}>
                  <FormControl>
                    <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                      <SelectValue placeholder={selectedCountry ? "Select your city" : "Select country first"} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white border-gray-300 max-h-60 z-50">
                    {(selectedState 
                      ? getCitiesByState(selectedCountry, selectedState)
                      : getCitiesByCountry(selectedCountry)
                    ).map((city) => (
                      <SelectItem key={city.value} value={city.value}>
                        {city.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={control}
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
  );
};
