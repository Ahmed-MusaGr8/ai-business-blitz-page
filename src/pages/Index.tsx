
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
import { Hexagon, Linkedin, Twitter } from "lucide-react";

const Index = () => {
  const mentors = [{
    name: "Sarah Chen",
    title: "AI Pioneer & Billionaire", 
    bio: "Founded 3 unicorn companies, specialized in AI automation",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face"
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
  
  const timelineData = [{
    title: "Day 1-2",
    content: <div>
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
  }, {
    title: "Day 3-4",
    content: <div>
          <h3 className="text-white text-xl font-bold mb-4">Build & Prototype</h3>
          <p className="text-gray-300 text-sm md:text-base mb-6">
            Transform your idea into reality using no-code AI platforms and get hands-on mentorship from industry experts.
          </p>
          <div className="space-y-3">
            <div className="flex items-center text-green-400 text-sm md:text-base">
              <Check className="h-4 w-4 mr-2 flex-shrink-0" />
              Build your AI-powered MVP
            </div>
            <div className="flex items-center text-green-400 text-sm md:text-base">
              <Check className="h-4 w-4 mr-2 flex-shrink-0" />
              Create automated workflows
            </div>
            <div className="flex items-center text-green-400 text-sm md:text-base">
              <Check className="h-4 w-4 mr-2 flex-shrink-0" />
              Design user interfaces
            </div>
            <div className="flex items-center text-green-400 text-sm md:text-base">
              <Check className="h-4 w-4 mr-2 flex-shrink-0" />
              Test with real users
            </div>
          </div>
        </div>
  }, {
    title: "Day 5-7",
    content: <div>
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
  }];

  // Create ZC SVG Icon component
  const ZCIcon = () => (
    <svg viewBox="0 0 32 32" className="h-10 w-10 text-white">
      <rect width="32" height="32" rx="6" fill="currentColor"/>
      <text x="16" y="22" textAnchor="middle" fill="black" fontFamily="system-ui" fontSize="14" fontWeight="bold">ZC</text>
    </svg>
  );

  return <div className="min-h-screen bg-black overflow-x-hidden">
      {/* New Hero Section */}
      <section className="relative">
        <DemoHeroGeometric />
      </section>

      {/* Global Countdown Timer */}
      <GlobalCountdownTimer />

      {/* Banner Section */}
      <section className="py-8 lg:py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 rounded-2xl p-6 lg:p-12 max-w-6xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-orange-900/30"></div>
            <div className="absolute top-0 right-0 w-64 h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 lg:mb-6 leading-tight">
                  THE ULTIMATE AI BUSINESS CHALLENGE FOR BUILDERS
                </h2>
                <p className="text-sm sm:text-base lg:text-xl text-gray-300 mb-6 lg:mb-8 leading-relaxed">
                  7 intensive days learning to build one-person to billion-dollar businesses using cutting-edge AI tools and strategies
                </p>
                <Button size="lg" className="bg-white text-slate-800 hover:bg-gray-100 text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto">
                  Join the Challenge
                  <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                </Button>
              </div>
              
              <div className="relative">
                <div className="w-full h-48 sm:h-64 lg:h-80 bg-gradient-to-br from-orange-400 via-yellow-500 to-orange-600 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-1 transition-transform duration-300">
                  <div className="absolute inset-4 bg-gradient-to-br from-white/10 to-transparent rounded-xl backdrop-blur-sm border border-white/20"></div>
                  <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6">
                    <div className="text-white/90 text-xs lg:text-sm font-medium mb-2">AI Challenge 2024</div>
                    <div className="text-white text-lg lg:text-2xl font-bold">$200K Prize Grant</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="h-screen mt-8 lg:mt-12">
          <AIBusinessChallengeTimeline />
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-12 lg:py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-6">Learn From Billionaire Mentors</h2>
            <p className="text-base lg:text-xl text-gray-300 max-w-3xl mx-auto">
              Get direct access to industry titans who've built billion-dollar businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {mentors.map((mentor, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  {/* Corner brackets */}
                  <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-white z-10"></div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-white z-10"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-white z-10"></div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-white z-10"></div>
                  
                  {/* Image container */}
                  <div className="w-48 h-48 lg:w-64 lg:h-64 mx-auto overflow-hidden bg-gray-800">
                    <img 
                      src={mentor.image} 
                      alt={mentor.name} 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  
                  {/* Name label */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-black border border-white px-3 py-1 text-white text-sm font-medium uppercase tracking-wider">
                      {mentor.name.startsWith('Dr.') ? mentor.name.split(' ').slice(0, 2).join(' ').replace(' ', '').toUpperCase() : mentor.name.split(' ')[0].toUpperCase()}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 space-y-2">
                  <h3 className="text-white text-xl lg:text-2xl font-bold">{mentor.name}</h3>
                  <p className="text-blue-400 font-semibold text-base lg:text-lg">{mentor.title}</p>
                  <p className="text-gray-300 text-sm lg:text-base">{mentor.bio}</p>
                  <button className="text-gray-400 hover:text-white text-sm transition-colors">
                    Follow {mentor.name.split(' ')[0]} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 lg:py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-6 lg:mb-8">HOW IT WORKS</h2>
            
            {/* Steps */}
            <div className="flex flex-col lg:flex-row items-center justify-center mb-12 lg:mb-16 space-y-8 lg:space-y-0">
              <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8 xl:space-x-16">
                {/* Step 1 */}
                <div className="text-center max-w-xs">
                  <div className="relative inline-block mb-4">
                    {/* Corner brackets */}
                    <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-white"></div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-white"></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-white"></div>
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-white"></div>
                    
                    <div className="w-12 h-12 flex items-center justify-center text-white font-bold text-xl">
                      1
                    </div>
                  </div>
                  <p className="text-white text-sm lg:text-base">
                    Register for the Challenge via our platform
                  </p>
                </div>
                
                {/* Line */}
                <div className="w-0.5 h-16 lg:w-16 lg:h-0.5 xl:w-32 bg-white lg:block hidden"></div>
                
                {/* Step 2 */}
                <div className="text-center max-w-xs">
                  <div className="relative inline-block mb-4">
                    {/* Corner brackets */}
                    <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-white"></div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-white"></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-white"></div>
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-white"></div>
                    
                    <div className="w-12 h-12 flex items-center justify-center text-white font-bold text-xl">
                      2
                    </div>
                  </div>
                  <p className="text-white text-sm lg:text-base">
                    Get your Challenge Pack email with access details
                  </p>
                </div>
                
                {/* Line */}
                <div className="w-0.5 h-16 lg:w-16 lg:h-0.5 xl:w-32 bg-white lg:block hidden"></div>
                
                {/* Step 3 */}
                <div className="text-center max-w-xs">
                  <div className="relative inline-block mb-4">
                    {/* Corner brackets */}
                    <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-white"></div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-white"></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-white"></div>
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-white"></div>
                    
                    <div className="w-12 h-12 flex items-center justify-center text-white font-bold text-xl">
                      3
                    </div>
                  </div>
                  <p className="text-white text-sm lg:text-base">
                    Access the tools and start building your AI empire
                  </p>
                </div>
              </div>
            </div>

            {/* Main Banner */}
            <div className="relative">
              {/* Lightning bolts */}
              <div className="absolute left-2 lg:left-16 top-1/2 transform -translate-y-1/2">
                <div className="w-12 h-12 lg:w-24 lg:h-24 bg-gradient-to-r from-yellow-400 to-orange-500 transform rotate-12" style={{
                clipPath: 'polygon(0% 40%, 40% 40%, 20% 0%, 100% 35%, 60% 35%, 80% 100%)'
              }}></div>
              </div>
              <div className="absolute right-2 lg:right-16 top-1/2 transform -translate-y-1/2">
                <div className="w-12 h-12 lg:w-24 lg:h-24 bg-gradient-to-r from-yellow-400 to-orange-500 transform -rotate-12" style={{
                clipPath: 'polygon(0% 40%, 40% 40%, 20% 0%, 100% 35%, 60% 35%, 80% 100%)'
              }}></div>
              </div>
              
              <div className="text-center px-4 lg:px-16">
                <h3 className="text-2xl sm:text-3xl lg:text-6xl font-bold text-white mb-4">
                  THE CHALLENGE IS<br />LIVE!
                </h3>
                <p className="text-sm sm:text-base lg:text-xl text-gray-300 max-w-2xl mx-auto">
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 lg:mb-4">$200,000</h2>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 lg:mb-6">Total Prize Grant</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 text-left">
              <div className="bg-white/10 rounded-xl p-4 lg:p-6">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">$100,000</div>
                <div className="text-base lg:text-lg font-semibold mb-2">Grand Prize Winner</div>
                <div className="text-xs sm:text-sm">Most innovative AI business concept with clear path to scale</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 lg:p-6">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">$50,000</div>
                <div className="text-base lg:text-lg font-semibold mb-2">Runner-up</div>
                <div className="text-xs sm:text-sm">Outstanding execution and business viability demonstration</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 lg:p-6 md:col-span-2 lg:col-span-1">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">$50,000</div>
                <div className="text-base lg:text-lg font-semibold mb-2">Category Winners</div>
                <div className="text-xs sm:text-sm">Best in innovation, social impact, and technical excellence</div>
              </div>
            </div>
            
            <p className="mt-6 lg:mt-8 text-base lg:text-lg">
              <strong>All registered participants are eligible to win!</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 lg:py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-6">Choose Your Path to Success</h2>
            <p className="text-base lg:text-xl text-gray-300">Invest in your future. The returns are unlimited.</p>
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
          }].map((tier, index) => <Card key={index} className={`relative ${tier.popular ? 'bg-gradient-to-b from-slate-800/80 to-slate-900/80 border-slate-600' : 'bg-slate-700/50 border-slate-600'} hover:scale-105 transition-all`}>
                {tier.popular && <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-slate-700 text-white border-slate-600">
                    Most Popular
                  </Badge>}
                <CardHeader className="text-center p-4 lg:p-6">
                  <CardTitle className="text-white text-lg sm:text-xl lg:text-2xl">{tier.name}</CardTitle>
                  <div className="py-4">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{tier.price}</div>
                    {tier.originalPrice && <div className="text-gray-400 line-through text-base lg:text-lg">{tier.originalPrice}</div>}
                  </div>
                </CardHeader>
                <CardContent className="p-4 lg:p-6 pt-0">
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, fIndex) => <li key={fIndex} className="flex items-center text-gray-300 text-sm lg:text-base">
                        <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>)}
                  </ul>
                  <Button className={`w-full ${tier.popular ? 'bg-slate-600 hover:bg-slate-500' : 'bg-slate-600 hover:bg-slate-500'} text-white`} size="lg">
                    Register Now
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 lg:py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-6">Success Stories</h2>
            <p className="text-base lg:text-xl text-gray-300">See how past participants transformed their lives</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => <Card key={index} className="bg-slate-800/50 border-slate-600">
                <CardHeader className="p-4 lg:p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <CardTitle className="text-white text-base lg:text-lg">{testimonial.name}</CardTitle>
                      <CardDescription className="text-gray-400 text-sm lg:text-base">{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 lg:p-6 pt-0">
                  <p className="text-gray-300 mb-4 text-sm lg:text-base">"{testimonial.quote}"</p>
                  <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-300 border-yellow-400">
                    {testimonial.amount}
                  </Badge>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 lg:py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-6">Frequently Asked Questions</h2>
            <p className="text-base lg:text-xl text-gray-300">Get all the details you need</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-slate-700/50 border-slate-600 rounded-lg px-4 lg:px-6">
                  <AccordionTrigger className="text-white hover:text-blue-400 text-left text-sm lg:text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 text-sm lg:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section with World Map */}
      <section className="py-12 lg:py-20 bg-black">        
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="font-bold text-xl sm:text-2xl md:text-3xl text-white mb-4">
              Global Challenge Participants
            </p>
            <p className="text-sm md:text-lg text-gray-300 max-w-2xl mx-auto mb-8">Entrepreneurs from around the world are joining the challenge - both online and on site at our studio.</p>
          </div>
          
          <div className="container mx-auto px-4 text-center mb-8">
            <div className="max-w-md mx-auto">
              <Button size="lg" className="w-full bg-white text-blue-600 hover:bg-gray-100 text-base lg:text-lg px-8 lg:px-12 py-4 lg:py-6 rounded-xl shadow-2xl hover:shadow-white/25 transition-all">
                Claim Your Spot Now
                <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
              </Button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <WorldMap dots={[{
            start: {
              lat: 37.4419,
              lng: -122.1430
            },
            end: {
              lat: 40.7128,
              lng: -74.0060
            }
          }, {
            start: {
              lat: 37.4419,
              lng: -122.1430
            },
            end: {
              lat: 51.5074,
              lng: -0.1278
            }
          }, {
            start: {
              lat: 37.4419,
              lng: -122.1430
            },
            end: {
              lat: 35.6762,
              lng: 139.6503
            }
          }, {
            start: {
              lat: 51.5074,
              lng: -0.1278
            },
            end: {
              lat: 28.6139,
              lng: 77.209
            }
          }, {
            start: {
              lat: 28.6139,
              lng: 77.209
            },
            end: {
              lat: -33.8688,
              lng: 151.2093
            }
          }, {
            start: {
              lat: -33.8688,
              lng: 151.2093
            },
            end: {
              lat: -1.2921,
              lng: 36.8219
            }
          }]} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer 
        logo={<ZCIcon />} 
        brandName="ZeroCode Challenge" 
        socialLinks={[{
          icon: <Twitter className="h-5 w-5" />,
          href: "https://twitter.com",
          label: "Twitter"
        }, {
          icon: <Linkedin className="h-5 w-5" />,
          href: "https://linkedin.com",
          label: "LinkedIn"
        }]} 
        mainLinks={[{
          href: "/challenge",
          label: "Challenge"
        }, {
          href: "/mentors",
          label: "Mentors"
        }, {
          href: "/prizes",
          label: "Prizes"
        }, {
          href: "/contact",
          label: "Contact"
        }]} 
        legalLinks={[{
          href: "/privacy",
          label: "Privacy"
        }, {
          href: "/terms",
          label: "Terms"
        }]} 
        copyright={{
          text: "© 2025 ZeroCode Challenge",
          license: "All rights reserved"
        }} 
      />
    </div>;
};

export default Index;
