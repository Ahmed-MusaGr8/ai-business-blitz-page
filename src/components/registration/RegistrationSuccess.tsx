
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Crown } from "lucide-react";
import { SponsorsCarousel } from "@/components/SponsorsCarousel";
import { useState } from "react";

interface RegistrationSuccessProps {
  data?: any;
  defaultPassword?: string;
}

export const RegistrationSuccess = ({ data, defaultPassword }: RegistrationSuccessProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4">
        <Card className="w-full max-w-2xl bg-white border border-gray-200 text-center shadow-lg">
          <CardHeader className="pb-8">
            <div className="flex justify-center mb-6">
              <Crown className="h-16 w-16 text-yellow-500" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
              You are in champ 🙌
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Your registration for the Zero Code Challenge has been successfully submitted.
              {defaultPassword && " Your participant dashboard has been created!"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {defaultPassword && data && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-left">
                <h3 className="text-blue-900 font-semibold mb-3">Dashboard Access Created</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-blue-800">
                    <strong>Email:</strong> {data.email}
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-blue-800">
                      <strong>Default Password:</strong>
                    </p>
                    {showPassword ? (
                      <span className="font-mono bg-white text-blue-900 px-2 py-1 rounded border">
                        {defaultPassword}
                      </span>
                    ) : (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => setShowPassword(true)}
                        className="text-xs h-6"
                      >
                        Show Password
                      </Button>
                    )}
                  </div>
                  <p className="text-blue-700 text-xs">
                    ⚠️ Save this password! You can change it in your dashboard settings.
                  </p>
                </div>
              </div>
            )}
            
            <div className="bg-gray-50 rounded-lg p-6 text-left">
              <h3 className="text-gray-900 font-semibold mb-3">What's Next?</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• {defaultPassword ? "Access your participant dashboard below" : "Check your email for confirmation and onboarding details"}</li>
                <li>• Join our Discord community for updates and networking</li>
                <li>• Review the pre-challenge materials we'll send you</li>
                <li>• Mark your calendar for the challenge start date</li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {defaultPassword && (
                <Button 
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => window.location.href = '/dashboard'}
                >
                  Go to Dashboard
                </Button>
              )}
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
      
      <div className="mt-auto">
        <SponsorsCarousel />
      </div>
    </div>
  );
};
