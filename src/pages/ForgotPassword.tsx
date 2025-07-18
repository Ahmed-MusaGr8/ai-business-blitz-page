import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";

// ZC Logo Component
const ZCIcon = () => (
  <svg viewBox="0 0 32 32" className="h-12 w-12 text-black">
    <rect width="32" height="32" rx="6" fill="currentColor"/>
    <text x="16" y="22" textAnchor="middle" fill="white" fontFamily="system-ui" fontSize="14" fontWeight="bold">ZC</text>
  </svg>
);

const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type ForgotPasswordData = z.infer<typeof forgotPasswordSchema>;

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [resetToken, setResetToken] = useState<string>("");
  const { toast } = useToast();

  const form = useForm<ForgotPasswordData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ForgotPasswordData) => {
    setIsLoading(true);
    
    try {
      const response = await fetch('https://krgzjhondqkcgdlpyuon.supabase.co/functions/v1/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtyZ3pqaG9uZHFrY2dkbHB5dW9uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3OTQzMjAsImV4cCI6MjA2ODM3MDMyMH0.6IDNIALtgiytsPYOqMJydmnZK1Qe_jpgGqAQLb6CGgo`
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send reset token');
      }

      setResetToken(result.resetToken);
      toast({
        title: "Reset Token Generated!",
        description: "Please copy the token below and use it to reset your password.",
      });
      
    } catch (error: any) {
      console.error('Forgot password error:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to generate reset token. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <Card className="w-full max-w-md bg-white shadow-lg">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <ZCIcon />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            Forgot Password
          </CardTitle>
          <CardDescription className="text-gray-600">
            Enter your email to get a password reset token
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!resetToken ? (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? "Generating..." : "Get Reset Token"}
                </Button>
              </form>
            </Form>
          ) : (
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="text-green-800 font-medium mb-2">Reset Token Generated</h3>
                <p className="text-green-700 text-sm mb-3">
                  Copy this token and use it to reset your password:
                </p>
                <div className="bg-white border rounded p-3 font-mono text-sm break-all">
                  {resetToken}
                </div>
              </div>
              
              <Button
                onClick={() => window.location.href = '/reset-password'}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Reset Password
              </Button>
            </div>
          )}

          <div className="mt-6 text-center">
            <Button
              variant="link"
              className="p-0 h-auto text-blue-600 hover:text-blue-700"
              onClick={() => window.location.href = '/login'}
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Login
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPassword;