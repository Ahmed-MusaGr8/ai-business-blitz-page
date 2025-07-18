import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, ArrowRight, Users, Shield } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Challenge = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleOrganizerLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Sign in with Supabase Auth
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast({
          title: "Login Failed",
          description: error.message,
          variant: "destructive",
        });
        return;
      }

      if (data.user) {
        // Check if user has organizer role
        const { data: roleData, error: roleError } = await supabase
          .from("user_roles")
          .select("role")
          .eq("user_id", data.user.id)
          .in("role", ["admin", "organizer"])
          .single();

        if (roleError || !roleData) {
          toast({
            title: "Access Denied",
            description: "You don't have organizer permissions.",
            variant: "destructive",
          });
          await supabase.auth.signOut();
          return;
        }

        toast({
          title: "Login Successful",
          description: "Welcome to the organizer dashboard!",
        });
        
        navigate("/organizer-dashboard");
      }
    } catch (error) {
      toast({
        title: "Login Failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center text-white font-bold text-sm">
                ZC
              </div>
              <h1 className="text-xl font-bold">ZeroCode Challenge</h1>
            </div>
            <Button 
              variant="outline" 
              onClick={() => navigate("/")}
              className="border-gray-600 text-white hover:bg-gray-800"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Access the Challenge
            </h1>
            <p className="text-gray-400 text-lg">
              Choose your access level to join the Zero Code Challenge
            </p>
          </div>

          <Tabs defaultValue="participants" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-900 border border-gray-700">
              <TabsTrigger 
                value="participants" 
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white flex items-center space-x-2"
              >
                <Users className="h-4 w-4" />
                <span>Participants</span>
              </TabsTrigger>
              <TabsTrigger 
                value="organizers"
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white flex items-center space-x-2"
              >
                <Shield className="h-4 w-4" />
                <span>Organizers</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="participants" className="space-y-6">
              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Users className="h-5 w-5 text-blue-400" />
                    <span>Participant Access</span>
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Join the challenge as a participant to build your AI-powered business
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white">New Participants</h3>
                      <p className="text-gray-400 text-sm">
                        Register for the Zero Code Challenge and start your journey
                      </p>
                      <Button 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        onClick={() => navigate("/register")}
                      >
                        Register Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white">Existing Participants</h3>
                      <p className="text-gray-400 text-sm">
                        Already registered? Access your participant dashboard
                      </p>
                      <Button 
                        variant="outline" 
                        className="w-full border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white"
                        onClick={() => navigate("/login")}
                      >
                        Participant Login
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                    <h4 className="text-white font-semibold mb-3">What you get as a participant:</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        <span>7-day intensive challenge access</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        <span>All learning materials and resources</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        <span>Direct mentorship from industry experts</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        <span>Eligibility for $200K prize pool</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="organizers" className="space-y-6">
              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-purple-400" />
                    <span>Organizer Access</span>
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Access the organizer dashboard to manage participants and challenge metrics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleOrganizerLogin} className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="pl-10 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="password" className="text-white">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="pl-10 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500"
                          />
                        </div>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      disabled={loading}
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      {loading ? "Signing in..." : "Access Organizer Dashboard"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>

                  <div className="mt-6 bg-gray-800 rounded-lg p-6 border border-gray-700">
                    <h4 className="text-white font-semibold mb-3">Organizer features:</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Participant management and tracking</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Application status updates</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Challenge progress monitoring</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>Registration metrics and analytics</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Challenge;