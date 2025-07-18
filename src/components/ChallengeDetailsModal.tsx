import { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Trophy, 
  DollarSign, 
  Calendar, 
  MapPin, 
  Users, 
  Star, 
  Check,
  ArrowRight,
  Zap
} from "lucide-react";

interface ChallengeDetailsModalProps {
  children: React.ReactNode;
}

export const ChallengeDetailsModal = ({ children }: ChallengeDetailsModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="text-2xl font-bold">Zero Code Challenge 2024</DialogTitle>
        </DialogHeader>
        <ScrollArea className="px-6 pb-6 max-h-[75vh]">
          <div className="space-y-8">
            {/* Challenge Overview */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Challenge Overview</h3>
              <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 rounded-xl p-6 text-white">
                <h4 className="text-lg font-bold mb-3">THE ULTIMATE AI BUSINESS CHALLENGE FOR BUILDERS</h4>
                <p className="text-gray-300 mb-4">
                  7 intensive days learning to build one-person to billion-dollar businesses using cutting-edge AI tools and strategies
                </p>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 mr-2 text-yellow-400" />
                    <span className="font-semibold">$200K Prize Pool</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-blue-400" />
                    <span>7-Day Challenge</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-green-400" />
                    <span>Hybrid (In-person + Virtual)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* What You'll Learn */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">What You'll Learn</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center mb-2">
                    <Zap className="h-5 w-5 mr-2 text-yellow-500" />
                    <h4 className="font-semibold">AI Business Fundamentals</h4>
                  </div>
                  <p className="text-sm text-gray-600">Master AI tools and automation platforms to build scalable businesses without traditional coding</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center mb-2">
                    <Trophy className="h-5 w-5 mr-2 text-purple-500" />
                    <h4 className="font-semibold">Zero-Code Development</h4>
                  </div>
                  <p className="text-sm text-gray-600">Build powerful AI-powered MVPs using no-code platforms and automated workflows</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center mb-2">
                    <Users className="h-5 w-5 mr-2 text-blue-500" />
                    <h4 className="font-semibold">Billionaire Mentorship</h4>
                  </div>
                  <p className="text-sm text-gray-600">Direct access to industry leaders and successful entrepreneurs who will guide your journey</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center mb-2">
                    <Star className="h-5 w-5 mr-2 text-orange-500" />
                    <h4 className="font-semibold">Pitch & Scale</h4>
                  </div>
                  <p className="text-sm text-gray-600">Perfect your business model and pitch to billionaire judges for the $200K prize pool</p>
                </div>
              </div>
            </div>

            {/* Challenge Timeline */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">7-Day Challenge Timeline</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4 p-4 bg-blue-50">
                  <h4 className="font-semibold text-blue-900 mb-2">Days 1-2: Foundation & Ideation</h4>
                  <p className="text-sm text-blue-800 mb-3">
                    Learn AI fundamentals and discover your billion-dollar business idea through expert workshops and mentorship sessions.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="flex items-center text-sm">
                      <Check className="h-3 w-3 mr-2 text-blue-600" />
                      AI Fundamentals Workshop
                    </div>
                    <div className="flex items-center text-sm">
                      <Check className="h-3 w-3 mr-2 text-blue-600" />
                      Business Ideation Sessions
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-4 p-4 bg-purple-50">
                  <h4 className="font-semibold text-purple-900 mb-2">Days 3-4: Build & Prototype</h4>
                  <p className="text-sm text-purple-800 mb-3">
                    Transform your idea into reality using no-code AI platforms and get hands-on mentorship from industry experts.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="flex items-center text-sm">
                      <Check className="h-3 w-3 mr-2 text-purple-600" />
                      Build AI-powered MVP
                    </div>
                    <div className="flex items-center text-sm">
                      <Check className="h-3 w-3 mr-2 text-purple-600" />
                      Create automated workflows
                    </div>
                    <div className="flex items-center text-sm">
                      <Check className="h-3 w-3 mr-2 text-purple-600" />
                      Design user interfaces
                    </div>
                    <div className="flex items-center text-sm">
                      <Check className="h-3 w-3 mr-2 text-purple-600" />
                      Test with real users
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-4 p-4 bg-green-50">
                  <h4 className="font-semibold text-green-900 mb-2">Days 5-7: Scale & Pitch</h4>
                  <p className="text-sm text-green-800 mb-3">
                    Perfect your business model, create your pitch, and present to our panel of billionaire judges for the $200K prize pool.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="flex items-center text-sm">
                      <Check className="h-3 w-3 mr-2 text-green-600" />
                      Business Strategy Development
                    </div>
                    <div className="flex items-center text-sm">
                      <Check className="h-3 w-3 mr-2 text-green-600" />
                      Final Pitch Preparation
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Prize Structure */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Prize Structure</h3>
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6">
                <div className="text-center mb-4">
                  <h4 className="text-2xl font-bold text-orange-800 mb-2">$200,000 Total Prize Pool</h4>
                  <p className="text-orange-700">Compete for life-changing prizes and funding opportunities</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg border border-yellow-300">
                    <Trophy className="h-8 w-8 mx-auto mb-2 text-yellow-600" />
                    <h5 className="font-semibold text-yellow-800">1st Place</h5>
                    <p className="text-2xl font-bold text-yellow-700">$100,000</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border border-gray-300">
                    <Trophy className="h-8 w-8 mx-auto mb-2 text-gray-600" />
                    <h5 className="font-semibold text-gray-800">2nd Place</h5>
                    <p className="text-2xl font-bold text-gray-700">$60,000</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border border-orange-300">
                    <Trophy className="h-8 w-8 mx-auto mb-2 text-orange-600" />
                    <h5 className="font-semibold text-orange-800">3rd Place</h5>
                    <p className="text-2xl font-bold text-orange-700">$40,000</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h3>
              <div className="space-y-3">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">What exactly is the Zero Code Challenge?</h4>
                  <p className="text-sm text-gray-600">A hybrid 7-day intensive where you'll learn to build AI-powered businesses from scratch, mentored by billionaires and industry leaders. Participants compete for a $200K prize pool while gaining real-world skills.</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Do I need coding experience?</h4>
                  <p className="text-sm text-gray-600">No! This is specifically designed for beginners. We'll teach you 'zero code' and 'low code' solutions to build powerful AI businesses without traditional programming.</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">How does the hybrid format work?</h4>
                  <p className="text-sm text-gray-600">You can participate either in-person at our Silicon Valley headquarters or join virtually with full access to all sessions, mentorship, and networking opportunities.</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">What's included in my registration?</h4>
                  <p className="text-sm text-gray-600">All learning materials, direct mentor access, networking events, meals (for in-person), recording access, and eligibility for the full $200K prize pool.</p>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Success Stories</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg bg-gray-50">
                  <div className="flex items-center mb-3">
                    <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="font-semibold text-blue-800">AJ</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Alex Johnson</h4>
                      <p className="text-sm text-gray-600">2023 Winner • $50,000 Winner</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 italic">"This challenge changed my life. Went from zero coding experience to launching my AI startup."</p>
                </div>
                <div className="p-4 border rounded-lg bg-gray-50">
                  <div className="flex items-center mb-3">
                    <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <span className="font-semibold text-purple-800">MS</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Maria Santos</h4>
                      <p className="text-sm text-gray-600">Tech Entrepreneur • Runner-up</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 italic">"The mentorship was invaluable. Direct access to billionaires who actually care about your success."</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};