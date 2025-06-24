
import { useState, useEffect } from "react";
import { ChevronDown, Play, Users, Trophy, DollarSign, Calendar, MapPin, Globe, Star, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { DemoHeroGeometric } from "@/components/ui/demo";
import { AIBusinessChallengeTimeline } from "@/components/ui/radial-timeline-demo";
import GlobalCountdownTimer from "@/components/ui/global-countdown-timer";
import { WorldMap } from "@/components/ui/world-map";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { Footer } from "@/components/ui/footer";
import { Timeline } from "@/components/ui/timeline";
import { Hexagon, Github, Twitter } from "lucide-react";

const Index = () => {
  const mentors = [{
    name: "Sarah Chen",
    title: "AI Pioneer & Billionaire",
    bio: "Founded 3 unicorn companies, specialized in AI automation",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face"
  }, {
    name: "Marcus Rodriguez",
    title: "Tech Mogul & Investor",
    bio: "Built and sold companies worth $2.8B, AI industry expert",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  }, {
    name: "Dr. Aisha Patel",
    title: "ML Research & Entrepreneur",
    bio: "Former Google AI lead, now building billion-dollar ventures",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face"
  }];

  const testimonials = [{
    name: "Alex Johnson",
    role: "2023 Winner",
    quote: "This challenge changed my life. Went from zero coding experience to launching my AI startup.",
    amount: "$50,000 Winner"
  }, {
    name: "Maria Santos",
    role: "Tech Entrepreneur",
    quote: "The mentorship was invaluable. Direct access to billionaires who actually care about your success.",
    amount: "Runner-up"
  }];

  const faqs = [{
    question: "What exactly is the Zero Code Challenge?",
    answer: "A hybrid 7-day intensive where you'll learn to build AI-powered businesses from scratch, mentored by billionaires and industry leaders. Participants compete for a $200K prize pool while gaining real-world skills."
  }, {
    question: "Do I need coding experience?",
    answer: "No! This is specifically designed for beginners. We'll teach you 'zero code' and 'low code' solutions to build powerful AI businesses without traditional programming."
  }, {
    question: "How does the hybrid format work?",
    answer: "You can participate either in-person at our Silicon Valley headquarters or join virtually with full access to all sessions, mentorship, and networking opportunities."
  }, {
    question: "What are the qualification criteria for prizes?",
    answer: "All registered participants are eligible. Prizes are awarded based on innovation, business viability, presentation quality, and mentor feedback on your AI business concept."
  }, {
    question: "What's included in my registration?",
    answer: "All learning materials, direct mentor access, networking events, meals (for in-person), recording access, and eligibility for the full $200K prize pool."
  }];

  const timelineData = [
    {
      title: "Day 1-2",
      content: (
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Foundation & Ideation</h3>
          <p className="text-gray-300 text-sm md:text-base mb-6">
            Learn AI fundamentals and discover your billion-dollar business idea through expert workshops and mentorship sessions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-700/50 rounded-lg p-4">
              <h4 className="text-blue-400 font-semibold mb-2">AI Fundamentals</h4>
              <p className="text-gray-300 text-sm">Master the basics of AI tools and automation platforms</p>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-4">
              <h4 className="text-purple-400 font-semibold mb-2">Business Ideation</h4>
              <p className="text-gray-300 text-sm">Discover profitable AI business opportunities</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Day 3-4",
      content: (
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Build & Prototype</h3>
          <p className="text-gray-300 text-sm md:text-base mb-6">
            Transform your idea into reality using no-code AI platforms and get hands-on mentorship from industry experts.
          </p>
          <div className="space-y-3">
            <div className="flex items-center text-green-400 text-sm md:text-base">
              <Check className="h-4 w-4 mr-2" />
              Build your AI-powered MVP
            </div>
            <div className="flex items-center text-green-400 text-sm md:text-base">
              <Check className="h-4 w-4 mr-2" />
              Create automated workflows
            </div>
            <div className="flex items-center text-green-400 text-sm md:text-base">
              <Check className="h-4 w-4 mr-2" />
              Design user interfaces
            </div>
            <div className="flex items-center text-green-400 text-sm md:text-base">
              <Check className="h-4 w-4 mr-2" />
              Test with real users
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Day 5-7",
      content: (
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Scale & Pitch</h3>
          <p className="text-gray-300 text-sm md:text-base mb-6">
            Perfect your business model, create your pitch, and present to our panel of billionaire judges for the $200K prize pool.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg p-4 border border-yellow-500/30">
              <h4 className="text-yellow-400 font-semibold mb-2">Business Strategy</h4>
              <p className="text-gray-300 text-sm">Develop go-to-market and scaling strategies</p>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-4 border border-green-500/30">
              <h4 className="text-green-400 font-semibold mb-2">Final Pitch</h4>
              <p className="text-gray-300 text-sm">Present to billionaire judges for prizes</p>
            </div>
          </div>
        </div>
      ),
    },
  ];
  
  return (
    <div className="min-h-screen bg-black">
      {/* New Hero Section */}
      <section className="relative">
        <DemoHeroGeometric />
      </section>

      {/* Global Countdown Timer */}
      <GlobalCountdownTimer />

      {/* The Challenge Section - Now as Banner */}
      <section className="py-12 lg:py-20 bg-black">
        <div className="container mx-auto px-4">
          {/* Banner Card */}
          <div className="relative overflow-hidden bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 rounded-2xl p-8 lg:p-12 max-w-6xl mx-auto">
            {/* Background Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-orange-900/30"></div>
            
            {/* Abstract Background Shape */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            
            {/* Content */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  THE ULTIMATE AI BUSINESS CHALLENGE
                </h2>
                <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
                  7 intensive days learning to build one-person to billion-dollar businesses using cutting-edge AI tools and strategies
                </p>
                <Button size="lg" className="bg-white text-slate-800 hover:bg-gray-100 text-lg px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all">
                  Join the Challenge
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              {/* Right Visual Element */}
              <div className="relative">
                <div className="w-full h-64 lg:h-80 bg-gradient-to-br from-orange-400 via-yellow-500 to-orange-600 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-1 transition-transform duration-300">
                  <div className="absolute inset-4 bg-gradient-to-br from-white/10 to-transparent rounded-xl backdrop-blur-sm border border-white/20"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-white/90 text-sm font-medium mb-2">AI Challenge 2024</div>
                    <div className="text-white text-xl lg:text-2xl font-bold">$200K Prize Pool</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="h-screen mt-12">
          <AIBusinessChallengeTimeline />
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-12 lg:py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-6">Learn From Billionaire Mentors</h2>
            <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
              Get direct access to industry titans who've built billion-dollar AI empires
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {mentors.map((mentor, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-600 text-center overflow-hidden hover:bg-slate-800/70 transition-all">
                <CardHeader>
                  <div className="w-24 h-24 lg:w-32 lg:h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-400">
                    <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover" />
                  </div>
                  <CardTitle className="text-white text-lg lg:text-xl">{mentor.name}</CardTitle>
                  <CardDescription className="text-blue-400 font-semibold">{mentor.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{mentor.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 lg:py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">HOW IT WORKS</h2>
            
            {/* Steps */}
            <div className="flex items-center justify-center mb-16">
              <div className="flex items-center space-x-8 lg:space-x-16">
                {/* Step 1 */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-bold text-xl mb-4 mx-auto">
                    1
                  </div>
                  <p className="text-white text-sm lg:text-base max-w-xs">
                    Register for the Challenge via our platform
                  </p>
                </div>
                
                {/* Line */}
                <div className="w-16 lg:w-32 h-0.5 bg-white"></div>
                
                {/* Step 2 */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-bold text-xl mb-4 mx-auto">
                    2
                  </div>
                  <p className="text-white text-sm lg:text-base max-w-xs">
                    Get your Challenge Pack email with access details
                  </p>
                </div>
                
                {/* Line */}
                <div className="w-16 lg:w-32 h-0.5 bg-white"></div>
                
                {/* Step 3 */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-bold text-xl mb-4 mx-auto">
                    3
                  </div>
                  <p className="text-white text-sm lg:text-base max-w-xs">
                    Access the tools and start building your AI empire
                  </p>
                </div>
              </div>
            </div>

            {/* Main Banner */}
            <div className="relative">
              {/* Lightning bolts */}
              <div className="absolute left-4 lg:left-16 top-1/2 transform -translate-y-1/2">
                <div className="w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-r from-yellow-400 to-orange-500 transform rotate-12" 
                     style={{clipPath: 'polygon(0% 40%, 40% 40%, 20% 0%, 100% 35%, 60% 35%, 80% 100%)'}}></div>
              </div>
              <div className="absolute right-4 lg:right-16 top-1/2 transform -translate-y-1/2">
                <div className="w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-r from-yellow-400 to-orange-500 transform -rotate-12" 
                     style={{clipPath: 'polygon(0% 40%, 40% 40%, 20% 0%, 100% 35%, 60% 35%, 80% 100%)'}}></div>
              </div>
              
              <div className="text-center">
                <h3 className="text-4xl lg:text-6xl font-bold text-white mb-4">
                  THE CHALLENGE IS<br />LIVE!
                </h3>
                <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto">
                  Every participant will receive their Challenge Pack automatically via email within 48 hours of registering. We launch the Challenge in...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Timeline Section */}
      <section className="bg-black">
        <Timeline data={timelineData} />
      </section>

      {/* Prize Pool Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-r from-yellow-900/20 to-orange-900/20">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black rounded-2xl p-6 lg:p-12 max-w-4xl mx-auto">
            <Trophy className="h-12 w-12 lg:h-16 lg:w-16 mx-auto mb-4 lg:mb-6" />
            <h2 className="text-4xl lg:text-5xl font-bold mb-3 lg:mb-4">$200,000</h2>
            <h3 className="text-xl lg:text-2xl font-semibold mb-4 lg:mb-6">Total Prize Pool</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 text-left">
              <div className="bg-white/10 rounded-xl p-4 lg:p-6">
                <div className="text-xl lg:text-2xl font-bold mb-2">$100,000</div>
                <div className="text-lg font-semibold mb-2">Grand Prize Winner</div>
                <div className="text-sm">Most innovative AI business concept with clear path to scale</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 lg:p-6">
                <div className="text-xl lg:text-2xl font-bold mb-2">$50,000</div>
                <div className="text-lg font-semibold mb-2">Runner-up</div>
                <div className="text-sm">Outstanding execution and business viability demonstration</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 lg:p-6 md:col-span-2 lg:col-span-1">
                <div className="text-xl lg:text-2xl font-bold mb-2">$50,000</div>
                <div className="text-lg font-semibold mb-2">Category Winners</div>
                <div className="text-sm">Best in innovation, social impact, and technical excellence</div>
              </div>
            </div>
            
            <p className="mt-6 lg:mt-8 text-lg">
              <strong>All registered participants are eligible to win!</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 lg:py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-6">Choose Your Path to Success</h2>
            <p className="text-lg lg:text-xl text-gray-300">Invest in your future. The returns are unlimited.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[{
            name: "Early Bird",
            price: "$497",
            originalPrice: "$997",
            popular: false,
            features: ["7-day challenge access", "All learning materials", "Group mentorship sessions", "Prize pool eligibility", "Recording access", "Community access"]
          }, {
            name: "Standard",
            price: "$997",
            originalPrice: null,
            popular: true,
            features: ["Everything in Early Bird", "1-on-1 mentor session", "VIP networking events", "Priority Q&A access", "Bonus masterclasses", "6-month community access"]
          }, {
            name: "VIP Experience",
            price: "$1,997",
            originalPrice: null,
            popular: false,
            features: ["Everything in Standard", "Direct mentor WhatsApp access", "Private dinner with mentors", "Guaranteed pitch feedback", "12-month mastermind access", "Investment intro opportunities"]
          }].map((tier, index) => (
            <Card key={index} className={`relative ${tier.popular ? 'bg-gradient-to-b from-blue-600/20 to-purple-600/20 border-blue-400' : 'bg-slate-700/50 border-slate-600'} hover:scale-105 transition-all`}>
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-white text-xl lg:text-2xl">{tier.name}</CardTitle>
                  <div className="py-4">
                    <div className="text-3xl lg:text-4xl font-bold text-white">{tier.price}</div>
                    {tier.originalPrice && <div className="text-gray-400 line-through text-lg">{tier.originalPrice}</div>}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-gray-300">
                        <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${tier.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' : 'bg-slate-600 hover:bg-slate-500'} text-white`} size="lg">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 lg:py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-6">Success Stories</h2>
            <p className="text-lg lg:text-xl text-gray-300">See how past participants transformed their lives</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-600">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <CardTitle className="text-white text-lg">{testimonial.name}</CardTitle>
                      <CardDescription className="text-gray-400">{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
                  <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-300 border-yellow-400">
                    {testimonial.amount}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 lg:py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-6">Frequently Asked Questions</h2>
            <p className="text-lg lg:text-xl text-gray-300">Get all the details you need</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-slate-700/50 border-slate-600 rounded-lg px-6">
                  <AccordionTrigger className="text-white hover:text-blue-400 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section with World Map */}
      <section className="py-12 lg:py-20 bg-black">        
        {/* World Map showing global participation */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="font-bold text-2xl md:text-3xl text-white mb-4">
              Global Challenge Participants
            </p>
            <p className="text-sm md:text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Entrepreneurs from around the world are joining the challenge - both online and at our Silicon Valley headquarters
            </p>
          </div>
          
          <div className="container mx-auto px-4 text-center mb-8">
            <div className="max-w-md mx-auto">
              <Button size="lg" className="w-full bg-white text-blue-600 hover:bg-gray-100 text-lg px-12 py-6 rounded-xl shadow-2xl hover:shadow-white/25 transition-all">
                Claim Your Spot Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <WorldMap
            dots={[
              {
                start: {
                  lat: 37.4419,
                  lng: -122.1430,
                }, // Silicon Valley (HQ)
                end: {
                  lat: 40.7128,
                  lng: -74.0060,
                }, // New York
              },
              {
                start: { lat: 37.4419, lng: -122.1430 }, // Silicon Valley (HQ)
                end: {
                  lat: 51.5074,
                  lng: -0.1278,
                }, // London
              },
              {
                start: { lat: 37.4419, lng: -122.1430 }, // Silicon Valley (HQ)
                end: { lat: 35.6762, lng: 139.6503 }, // Tokyo
              },
              {
                start: { lat: 51.5074, lng: -0.1278 }, // London
                end: { lat: 28.6139, lng: 77.209 }, // New Delhi
              },
              {
                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                end: { lat: -33.8688, lng: 151.2093 }, // Sydney
              },
              {
                start: { lat: -33.8688, lng: 151.2093 }, // Sydney
                end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
              },
            ]}
          />
        </div>
      </section>

      {/* Footer */}
      <Footer
        logo={<Hexagon className="h-10 w-10 text-white" />}
        brandName="AI Challenge"
        socialLinks={[
          {
            icon: <Twitter className="h-5 w-5" />,
            href: "https://twitter.com",
            label: "Twitter",
          },
          {
            icon: <Github className="h-5 w-5" />,
            href: "https://github.com",
            label: "GitHub",
          },
        ]}
        mainLinks={[
          { href: "/challenge", label: "Challenge" },
          { href: "/mentors", label: "Mentors" },
          { href: "/prizes", label: "Prizes" },
          { href: "/contact", label: "Contact" },
        ]}
        legalLinks={[
          { href: "/privacy", label: "Privacy" },
          { href: "/terms", label: "Terms" },
        ]}
        copyright={{
          text: "© 2024 AI Challenge",
          license: "All rights reserved",
        }}
      />
    </div>
  );
};

export default Index;
