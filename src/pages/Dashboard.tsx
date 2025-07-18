import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Settings, 
  LogOut, 
  Trophy, 
  Calendar, 
  Users, 
  FileText, 
  CheckCircle,
  Clock,
  AlertCircle
} from "lucide-react";

// ZC Logo Component
const ZCIcon = () => (
  <svg viewBox="0 0 32 32" className="h-8 w-8 text-black">
    <rect width="32" height="32" rx="6" fill="currentColor"/>
    <text x="16" y="22" textAnchor="middle" fill="white" fontFamily="system-ui" fontSize="14" fontWeight="bold">ZC</text>
  </svg>
);

interface ParticipantData {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  applicationStatus: string;
  passwordChanged: boolean;
}

const Dashboard = () => {
  const [participant, setParticipant] = useState<ParticipantData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored participant data
    const token = localStorage.getItem('participantToken');
    const storedData = localStorage.getItem('participantData');

    if (!token || !storedData) {
      // Redirect to login if no auth data
      window.location.href = '/login';
      return;
    }

    try {
      const participantData = JSON.parse(storedData);
      setParticipant(participantData);
    } catch (error) {
      console.error('Error parsing participant data:', error);
      window.location.href = '/login';
    } finally {
      setLoading(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('participantToken');
    localStorage.removeItem('participantData');
    window.location.href = '/login';
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'submitted':
        return <Badge variant="outline" className="border-blue-300 text-blue-700 bg-blue-50"><Clock className="w-3 h-3 mr-1" />Submitted</Badge>;
      case 'accepted':
        return <Badge variant="outline" className="border-green-300 text-green-700 bg-green-50"><CheckCircle className="w-3 h-3 mr-1" />Accepted</Badge>;
      case 'rejected':
        return <Badge variant="outline" className="border-red-300 text-red-700 bg-red-50"><AlertCircle className="w-3 h-3 mr-1" />Not Selected</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!participant) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md text-center">
          <CardContent className="pt-6">
            <p className="text-gray-600 mb-4">Unable to load participant data</p>
            <Button onClick={() => window.location.href = '/login'}>
              Return to Login
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <ZCIcon />
              <h1 className="text-xl font-semibold text-gray-900 ml-2">ZeroCode Challenge</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-blue-100 text-blue-700">
                    {participant.firstName[0]}{participant.lastName[0]}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium text-gray-700">
                  {participant.firstName} {participant.lastName}
                </span>
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.location.href = '/dashboard/settings'}
              >
                <Settings className="h-4 w-4" />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Welcome back, {participant.firstName}! 👋
          </h2>
          <p className="text-gray-600">
            Here's your ZeroCode Challenge participant dashboard
          </p>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Application Status</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-2">
                {getStatusBadge(participant.applicationStatus)}
              </div>
              <p className="text-xs text-muted-foreground">
                Your registration has been submitted and is under review
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Security</CardTitle>
              <Settings className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-2">
                {participant.passwordChanged ? (
                  <Badge variant="outline" className="border-green-300 text-green-700 bg-green-50">
                    <CheckCircle className="w-3 h-3 mr-1" />Secured
                  </Badge>
                ) : (
                  <Badge variant="outline" className="border-orange-300 text-orange-700 bg-orange-50">
                    <AlertCircle className="w-3 h-3 mr-1" />Default
                  </Badge>
                )}
              </div>
              <p className="text-xs text-muted-foreground">
                {participant.passwordChanged 
                  ? "You've updated your password" 
                  : "Consider changing your default password"
                }
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Challenge Progress</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-2">
                <Badge variant="outline" className="border-blue-300 text-blue-700 bg-blue-50">
                  <Clock className="w-3 h-3 mr-1" />Upcoming
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Challenge starts soon - stay tuned for updates
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-medium text-gray-900">Challenge Kickoff</h3>
                <p className="text-sm text-gray-600">Date and time will be announced soon</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-medium text-gray-900">Mentorship Sessions</h3>
                <p className="text-sm text-gray-600">Connect with industry experts</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-medium text-gray-900">Demo Day</h3>
                <p className="text-sm text-gray-600">Showcase your final project</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-green-600" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                className="w-full justify-start" 
                variant="outline"
                onClick={() => window.location.href = '/dashboard/settings'}
              >
                <Settings className="h-4 w-4 mr-2" />
                Update Settings
              </Button>
              <Button 
                className="w-full justify-start" 
                variant="outline"
                onClick={() => window.open('https://discord.com', '_blank')}
              >
                <Users className="h-4 w-4 mr-2" />
                Join Discord Community
              </Button>
              <Button 
                className="w-full justify-start" 
                variant="outline"
                onClick={() => window.location.href = '/'}
              >
                <FileText className="h-4 w-4 mr-2" />
                View Challenge Details
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;