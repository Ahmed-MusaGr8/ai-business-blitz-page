import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Dialog,
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger 
} from "@/components/ui/dialog";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { 
  Users, 
  UserCheck, 
  UserX, 
  Clock, 
  Trophy,
  Edit,
  Search,
  Filter,
  BarChart3,
  Calendar,
  MapPin,
  TrendingUp,
  TrendingDown,
  Settings,
  LogOut,
  Eye
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// ZC Logo Component
const ZCIcon = () => (
  <svg viewBox="0 0 32 32" className="h-8 w-8 text-black">
    <rect width="32" height="32" rx="6" fill="currentColor"/>
    <text x="16" y="22" textAnchor="middle" fill="white" fontFamily="system-ui" fontSize="14" fontWeight="bold">ZC</text>
  </svg>
);

interface Participant {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  application_status: string;
  password_changed: boolean;
  age: number;
  gender: string;
  country: string;
  city: string;
  university: string;
  field_of_study: string;
  is_team: boolean;
  team_name?: string;
  created_at: string;
}

interface ParticipantMetrics {
  total: number;
  submitted: number;
  accepted: number;
  rejected: number;
  byCountry: Record<string, number>;
  byUniversity: Record<string, number>;
  byFieldOfStudy: Record<string, number>;
  teamParticipants: number;
  individualParticipants: number;
}

const OrganizerDashboard = () => {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [metrics, setMetrics] = useState<ParticipantMetrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedParticipant, setSelectedParticipant] = useState<Participant | null>(null);
  const [updateStatus, setUpdateStatus] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    checkOrganizer();
  }, []);

  const checkOrganizer = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        window.location.href = '/login';
        return;
      }

      // Check if user has organizer or admin role
      const { data: roleData } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id)
        .in('role', ['admin', 'organizer'])
        .single();

      if (!roleData) {
        toast({
          title: "Access Denied",
          description: "You don't have permission to access the organizer dashboard.",
          variant: "destructive"
        });
        window.location.href = '/dashboard';
        return;
      }

      fetchParticipants();
    } catch (error) {
      console.error('Error checking organizer status:', error);
      window.location.href = '/login';
    }
  };

  const fetchParticipants = async () => {
    try {
      const { data, error } = await supabase
        .from('participants')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      setParticipants(data || []);
      calculateMetrics(data || []);
    } catch (error) {
      console.error('Error fetching participants:', error);
      toast({
        title: "Error",
        description: "Failed to fetch participants data.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const calculateMetrics = (participantData: Participant[]) => {
    const total = participantData.length;
    const submitted = participantData.filter(p => p.application_status === 'submitted').length;
    const accepted = participantData.filter(p => p.application_status === 'accepted').length;
    const rejected = participantData.filter(p => p.application_status === 'rejected').length;
    const teamParticipants = participantData.filter(p => p.is_team).length;
    const individualParticipants = total - teamParticipants;

    const byCountry: Record<string, number> = {};
    const byUniversity: Record<string, number> = {};
    const byFieldOfStudy: Record<string, number> = {};

    participantData.forEach(participant => {
      byCountry[participant.country] = (byCountry[participant.country] || 0) + 1;
      byUniversity[participant.university] = (byUniversity[participant.university] || 0) + 1;
      byFieldOfStudy[participant.field_of_study] = (byFieldOfStudy[participant.field_of_study] || 0) + 1;
    });

    setMetrics({
      total,
      submitted,
      accepted,
      rejected,
      byCountry,
      byUniversity,
      byFieldOfStudy,
      teamParticipants,
      individualParticipants
    });
  };

  const updateParticipantStatus = async (participantId: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('participants')
        .update({ application_status: newStatus })
        .eq('id', participantId);

      if (error) throw error;

      // Update local state
      setParticipants(prev => 
        prev.map(p => 
          p.id === participantId 
            ? { ...p, application_status: newStatus }
            : p
        )
      );

      // Recalculate metrics
      const updatedParticipants = participants.map(p => 
        p.id === participantId 
          ? { ...p, application_status: newStatus }
          : p
      );
      calculateMetrics(updatedParticipants);

      toast({
        title: "Success",
        description: `Participant status updated to ${newStatus}.`,
      });

      setSelectedParticipant(null);
    } catch (error) {
      console.error('Error updating participant status:', error);
      toast({
        title: "Error",
        description: "Failed to update participant status.",
        variant: "destructive"
      });
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/login';
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'submitted':
        return <Badge variant="outline" className="border-blue-300 text-blue-700 bg-blue-50"><Clock className="w-3 h-3 mr-1" />Submitted</Badge>;
      case 'accepted':
        return <Badge variant="outline" className="border-green-300 text-green-700 bg-green-50"><UserCheck className="w-3 h-3 mr-1" />Accepted</Badge>;
      case 'rejected':
        return <Badge variant="outline" className="border-red-300 text-red-700 bg-red-50"><UserX className="w-3 h-3 mr-1" />Rejected</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const filteredParticipants = participants.filter(participant => {
    const matchesSearch = 
      participant.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      participant.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      participant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      participant.university.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || participant.application_status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading organizer dashboard...</p>
        </div>
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
              <h1 className="text-xl font-semibold text-gray-900 ml-2">Organizer Dashboard</h1>
            </div>
            
            <div className="flex items-center space-x-4">
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
            Zero Code Challenge - Organizer Panel
          </h2>
          <p className="text-gray-600">
            Manage participants, view metrics, and control challenge operations
          </p>
        </div>

        {/* Metrics Cards */}
        {metrics && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Participants</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metrics.total}</div>
                <p className="text-xs text-muted-foreground">
                  {metrics.teamParticipants} teams, {metrics.individualParticipants} individuals
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Submitted</CardTitle>
                <Clock className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">{metrics.submitted}</div>
                <p className="text-xs text-muted-foreground">
                  {((metrics.submitted / metrics.total) * 100).toFixed(1)}% of total
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Accepted</CardTitle>
                <UserCheck className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{metrics.accepted}</div>
                <p className="text-xs text-muted-foreground">
                  {((metrics.accepted / metrics.total) * 100).toFixed(1)}% acceptance rate
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Rejected</CardTitle>
                <UserX className="h-4 w-4 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">{metrics.rejected}</div>
                <p className="text-xs text-muted-foreground">
                  {((metrics.rejected / metrics.total) * 100).toFixed(1)}% rejection rate
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search participants..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="submitted">Submitted</SelectItem>
              <SelectItem value="accepted">Accepted</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Participants Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Participants ({filteredParticipants.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Name</th>
                    <th className="text-left p-2">Email</th>
                    <th className="text-left p-2">University</th>
                    <th className="text-left p-2">Country</th>
                    <th className="text-left p-2">Status</th>
                    <th className="text-left p-2">Type</th>
                    <th className="text-left p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredParticipants.map((participant) => (
                    <tr key={participant.id} className="border-b hover:bg-gray-50">
                      <td className="p-2">
                        <div className="flex items-center">
                          <Avatar className="h-8 w-8 mr-2">
                            <AvatarFallback className="bg-blue-100 text-blue-700 text-xs">
                              {participant.first_name[0]}{participant.last_name[0]}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{participant.first_name} {participant.last_name}</div>
                            {participant.is_team && participant.team_name && (
                              <div className="text-xs text-gray-500">Team: {participant.team_name}</div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="p-2 text-sm">{participant.email}</td>
                      <td className="p-2 text-sm">{participant.university}</td>
                      <td className="p-2 text-sm">{participant.country}</td>
                      <td className="p-2">{getStatusBadge(participant.application_status)}</td>
                      <td className="p-2">
                        <Badge variant={participant.is_team ? "default" : "secondary"}>
                          {participant.is_team ? "Team" : "Individual"}
                        </Badge>
                      </td>
                      <td className="p-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                setSelectedParticipant(participant);
                                setUpdateStatus(participant.application_status);
                              }}
                            >
                              <Edit className="h-3 w-3 mr-1" />
                              Edit
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>Edit Participant</DialogTitle>
                            </DialogHeader>
                            {selectedParticipant && (
                              <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <Label className="text-sm font-medium">Name</Label>
                                    <p className="text-sm">{selectedParticipant.first_name} {selectedParticipant.last_name}</p>
                                  </div>
                                  <div>
                                    <Label className="text-sm font-medium">Email</Label>
                                    <p className="text-sm">{selectedParticipant.email}</p>
                                  </div>
                                  <div>
                                    <Label className="text-sm font-medium">University</Label>
                                    <p className="text-sm">{selectedParticipant.university}</p>
                                  </div>
                                  <div>
                                    <Label className="text-sm font-medium">Field of Study</Label>
                                    <p className="text-sm">{selectedParticipant.field_of_study}</p>
                                  </div>
                                  <div>
                                    <Label className="text-sm font-medium">Age</Label>
                                    <p className="text-sm">{selectedParticipant.age}</p>
                                  </div>
                                  <div>
                                    <Label className="text-sm font-medium">Location</Label>
                                    <p className="text-sm">{selectedParticipant.city}, {selectedParticipant.country}</p>
                                  </div>
                                </div>
                                
                                <div>
                                  <Label htmlFor="status" className="text-sm font-medium">Application Status</Label>
                                  <Select value={updateStatus} onValueChange={setUpdateStatus}>
                                    <SelectTrigger>
                                      <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="submitted">Submitted</SelectItem>
                                      <SelectItem value="accepted">Accepted</SelectItem>
                                      <SelectItem value="rejected">Rejected</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>

                                <div className="flex justify-end space-x-2 pt-4">
                                  <Button
                                    variant="outline"
                                    onClick={() => setSelectedParticipant(null)}
                                  >
                                    Cancel
                                  </Button>
                                  <Button
                                    onClick={() => updateParticipantStatus(selectedParticipant.id, updateStatus)}
                                  >
                                    Update Status
                                  </Button>
                                </div>
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Analytics Section */}
        {metrics && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Top Countries
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {Object.entries(metrics.byCountry)
                    .sort(([,a], [,b]) => b - a)
                    .slice(0, 5)
                    .map(([country, count]) => (
                      <div key={country} className="flex justify-between items-center">
                        <span className="text-sm">{country}</span>
                        <Badge variant="secondary">{count}</Badge>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="h-5 w-5 mr-2" />
                  Top Universities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {Object.entries(metrics.byUniversity)
                    .sort(([,a], [,b]) => b - a)
                    .slice(0, 5)
                    .map(([university, count]) => (
                      <div key={university} className="flex justify-between items-center">
                        <span className="text-sm truncate">{university}</span>
                        <Badge variant="secondary">{count}</Badge>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};

export default OrganizerDashboard;