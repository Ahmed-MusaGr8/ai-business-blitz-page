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
import { SponsorsCarousel } from "@/components/SponsorsCarousel";

const Index = () => {
  
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
          <h3 className="text-white text-lg sm:text-xl font-bold mb-3 sm:mb-4">Foundation & Ideation</h3>
          <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
            Learn AI fundamentals and discover your billion-dollar business idea through expert workshops and mentorship sessions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="bg-slate-700/50 rounded-lg p-3 sm:p-4">
              <h4 className="text-blue-400 font-semibold mb-2 text-sm sm:text-base">AI Fundamentals</h4>
              <p className="text-gray-300 text-xs sm:text-sm">Master the basics of AI tools and automation platforms</p>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-3 sm:p-4">
              <h4 className="text-purple-400 font-semibold mb-2 text-sm sm:text-base">Business Ideation</h4>
              <p className="text-gray-300 text-xs sm:text-sm">Discover profitable AI business opportunities</p>
            </div>
          </div>
        </div>
  }, {
    title: "Day 3-4",
    content: <div>
          <h3 className="text-white text-lg sm:text-xl font-bold mb-3 sm:mb-4">Build & Prototype</h3>
          <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
            Transform your idea into reality using no-code AI platforms and get hands-on mentorship from industry experts.
          </p>
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-center text-green-400 text-sm sm:text-base">
              <Check className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
              Build your AI-powered MVP
            </div>
            <div className="flex items-center text-green-400 text-sm sm:text-base">
              <Check className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
              Create automated workflows
            </div>
            <div className="flex items-center text-green-400 text-sm sm:text-base">
              <Check className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
              Design user interfaces
            </div>
            <div className="flex items-center text-green-400 text-sm sm:text-base">
              <Check className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
              Test with real users
            </div>
          </div>
        </div>
  }, {
    title: "Day 5-7",
    content: <div>
          <h3 className="text-white text-lg sm:text-xl font-bold mb-3 sm:mb-4">Scale & Pitch</h3>
          <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
            Perfect your business model, create your pitch, and present to our panel of billionaire judges for the $200K prize pool.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg p-3 sm:p-4 border border-yellow-500/30">
              <h4 className="text-yellow-400 font-semibold mb-2 text-sm sm:text-base">Business Strategy</h4>
              <p className="text-gray-300 text-xs sm:text-sm">Develop go-to-market and scaling strategies</p>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-3 sm:p-4 border border-green-500/30">
              <h4 className="text-green-400 font-semibold mb-2 text-sm sm:text-base">Final Pitch</h4>
              <p className="text-gray-300 text-xs sm:text-sm">Present to billionaire judges for prizes</p>
            </div>
          </div>
        </div>
  }];

  // Create ZC SVG Icon component
  const ZCIcon = () => (
    <svg viewBox="0 0 32 32" className="h-8 w-8 sm:h-10 sm:w-10 text-white">
      <rect width="32" height="32" rx="6" fill="currentColor"/>
      <text x="16" y="22" textAnchor="middle" fill="black" fontFamily="system-ui" fontSize="14" fontWeight="bold">ZC</text>
    </svg>
  );

  // 3D Lightning Bolt Component - Made responsive
  const LightningBolt = ({ className = "" }) => (
    <div className={`${className}`}>
      <div 
        className="w-8 h-10 sm:w-12 sm:h-16 lg:w-16 lg:h-20 xl:w-24 xl:h-28 bg-gradient-to-br from-yellow-300 via-amber-400 to-yellow-600 relative transform rotate-12 shadow-2xl"
        style={{
          clipPath: 'polygon(20% 0%, 60% 0%, 40% 40%, 100% 40%, 80% 100%, 40% 60%, 0% 60%)',
          filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))',
        }}
      >
        <div 
          className="absolute inset-0 bg-gradient-to-br from-yellow-200/50 to-transparent"
          style={{
            clipPath: 'polygon(20% 0%, 60% 0%, 40% 40%, 100% 40%, 80% 100%, 40% 60%, 0% 60%)',
          }}
        />
      </div>
    </div>
  );

  return <div className="min-h-screen bg-black overflow-x-hidden">
      {/* New Hero Section */}
      <section className="relative pt-16 sm:pt-0">
        <DemoHeroGeometric />
      </section>

      {/* Global Countdown Timer */}
      <GlobalCountdownTimer />

      {/* Banner Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-12 max-w-6xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-orange-900/30"></div>
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-96 lg:h-96 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 leading-tight">
                  THE ULTIMATE AI BUSINESS CHALLENGE FOR BUILDERS
                </h2>
                <p className="text-sm sm:text-base lg:text-xl text-gray-300 mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
                  7 intensive days learning to build one-person to billion-dollar businesses using cutting-edge AI tools and strategies
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-slate-800 hover:bg-gray-100 text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
                  onClick={() => window.location.href = 'https://www.zerocodechallenge.pro/#/register'}
                >
                  Join the Challenge
                  <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                </Button>
              </div>
              
              <div className="relative mt-6 lg:mt-0">
                <div className="w-full h-24 sm:h-32 md:h-48 lg:h-64 xl:h-80 bg-gradient-to-br from-orange-400 via-yellow-500 to-orange-600 rounded-xl sm:rounded-2xl shadow-2xl transform rotate-1 sm:rotate-3 hover:rotate-1 transition-transform duration-300">
                  <div className="absolute inset-2 sm:inset-4 bg-gradient-to-br from-white/10 to-transparent rounded-lg sm:rounded-xl backdrop-blur-sm border border-white/20"></div>
                  <div className="absolute bottom-2 sm:bottom-4 lg:bottom-6 left-2 sm:left-4 lg:left-6 right-2 sm:right-4 lg:right-6">
                    <div className="text-white/90 text-xs sm:text-sm lg:text-sm font-medium mb-1 sm:mb-2">AI Challenge 2024</div>
                    <div className="text-white text-sm sm:text-lg lg:text-2xl font-bold">$200K Prize Grant</div>
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

      {/* Sponsors Carousel Section */}
      <SponsorsCarousel />

      {/* Mentors Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">Learn From Billionaire Mentors</h2>
            <p className="text-sm sm:text-base lg:text-xl text-gray-300 max-w-3xl mx-auto">
              Get direct access to industry titans who've built billion-dollar businesses
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
          </div>
        </div>
      </section>

      {/* Updated How It Works Section - Fixed overflow */}
      <section className="py-16 sm:py-20 lg:py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-12 lg:mb-16 tracking-wider">
              HOW IT WORKS
            </h2>
            
            {/* Steps with connecting line - Fixed spacing to prevent overflow */}
            <div className="flex flex-col items-center justify-center max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0 lg:space-x-12 xl:space-x-16">
                {/* Step 1 */}
                <div className="text-center flex-shrink-0 max-w-xs px-4">
                  <div className="relative inline-block mb-6">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 border-2 border-white rounded-full flex items-center justify-center text-white font-bold text-xl sm:text-2xl bg-black">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white text-base sm:text-lg lg:text-xl font-bold mb-3 leading-tight">
                      Register for the<br />
                      Hackathon via<br />
                      Devpost
                    </h3>
                  </div>
                </div>
                
                {/* Connecting Line 1-2 - Reduced width */}
                <div className="hidden lg:block w-12 xl:w-16 h-0.5 bg-white relative flex-shrink-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                {/* Step 2 */}
                <div className="text-center flex-shrink-0 max-w-xs px-4">
                  <div className="relative inline-block mb-6">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 border-2 border-white rounded-full flex items-center justify-center text-white font-bold text-xl sm:text-2xl bg-black">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white text-base sm:text-lg lg:text-xl font-bold mb-3 leading-tight">
                      Get your Builder Pack<br />
                      email with reward<br />
                      details
                    </h3>
                  </div>
                </div>
                
                {/* Connecting Line 2-3 - Reduced width */}
                <div className="hidden lg:block w-12 xl:w-16 h-0.5 bg-white relative flex-shrink-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                {/* Step 3 */}
                <div className="text-center flex-shrink-0 max-w-xs px-4">
                  <div className="relative inline-block mb-6">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 border-2 border-white rounded-full flex items-center justify-center text-white font-bold text-xl sm:text-2xl bg-black">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white text-base sm:text-lg lg:text-xl font-bold mb-3 leading-tight">
                      Access the tools and<br />
                      start building May 30
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Challenge Is Live Section - Made responsive */}
          <div className="relative text-center mb-16 sm:mb-20">
            {/* Lightning bolts - Made responsive and adjusted positioning */}
            <div className="absolute left-2 sm:left-4 lg:left-16 xl:left-32 top-1/2 transform -translate-y-1/2 -rotate-12">
              <LightningBolt />
            </div>
            <div className="absolute right-2 sm:right-4 lg:right-16 xl:right-32 top-1/2 transform -translate-y-1/2 rotate-12">
              <LightningBolt />
            </div>
            
            <div className="px-4 sm:px-8 lg:px-16 xl:px-32">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 leading-tight">
                THE CHALLENGE IS<br />LIVE!
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto mb-6 sm:mb-8 lg:mb-10 leading-relaxed px-4">
                Every participant will receive their Challenge Pack automatically via email<br className="hidden sm:block" />
                within 48 hours after registration. We launch the Challenge in...
              </p>
              <Button 
                className="bg-gray-100 text-black hover:bg-white text-base sm:text-lg px-8 py-3 rounded-full font-semibold transition-all"
                onClick={() => window.location.href = 'https://www.zerocodechallenge.pro/#/register'}
              >
                Access Challenge Pack
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Builder Pack Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-6xl mx-auto">
            {/* Builder Pack Corner Brackets - Updated to match TIME LEFT TO SUBMIT style with gaps */}
            <div className="relative inline-block mb-8 sm:mb-12">
              {/* Top Left Corner */}
              <div className="absolute -top-2 -left-2 w-3 sm:w-4 h-0.5 bg-white/30"></div>
              <div className="absolute -top-2 -left-2 w-0.5 h-3 sm:h-4 bg-white/30"></div>
              
              {/* Top Right Corner */}
              <div className="absolute -top-2 -right-2 w-3 sm:w-4 h-0.5 bg-white/30"></div>
              <div className="absolute -top-2 -right-2 w-0.5 h-3 sm:h-4 bg-white/30 ml-auto"></div>
              
              {/* Bottom Left Corner */}
              <div className="absolute -bottom-2 -left-2 w-3 sm:w-4 h-0.5 bg-white/30"></div>
              <div className="absolute -bottom-2 -left-2 w-0.5 h-3 sm:h-4 bg-white/30 mt-auto"></div>
              
              {/* Bottom Right Corner */}
              <div className="absolute -bottom-2 -right-2 w-3 sm:w-4 h-0.5 bg-white/30"></div>
              <div className="absolute -bottom-2 -right-2 w-0.5 h-3 sm:h-4 bg-white/30 ml-auto mt-auto"></div>
              
              <span className="text-white/70 text-xs sm:text-sm tracking-wider uppercase px-3 sm:px-4 py-2">
                BUILDER PACK
              </span>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 sm:mb-12 leading-tight">
              BUILDERS, START<br />
              YOUR ENGINES.
            </h2>
            
            {/* Subtext */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-16 sm:mb-20 leading-relaxed">
              We've curated the ultimate toolkit for the world's first hybrid Zero Code Challenge — packed<br />
              with premium tools, credits, and exclusive offers from the top platforms in tech.<br />
              <span className="text-gray-400">Available only to registered Zero Code Challenge participants.</span>
            </p>
            
            {/* Tools/Partners Grid - Responsive Layout */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
              {/* Lovable */}
              <div className="text-center">
                <div className="h-20 sm:h-24 lg:h-28 flex items-center justify-center mb-4">
                </div>
                <p className="text-gray-300 text-xs sm:text-sm lg:text-base">AI web app builder</p>
              </div>
              
              {/* Entri */}
              <div className="text-center">
                <div className="h-20 sm:h-24 lg:h-28 flex items-center justify-center mb-4">
                </div>
                <p className="text-gray-300 text-xs sm:text-sm lg:text-base">One free domain</p>
              </div>
              
              {/* RevenueCat */}
              <div className="text-center">
                <div className="h-20 sm:h-24 lg:h-28 flex items-center justify-center mb-4">
                </div>
                <p className="text-gray-300 text-xs sm:text-sm lg:text-base">Free payment collection</p>
              </div>
              
              {/* Supabase */}
              <div className="text-center">
                <div className="h-20 sm:h-24 lg:h-28 flex items-center justify-center mb-4">
                </div>
                <p className="text-gray-300 text-xs sm:text-sm lg:text-base">Free database & auth</p>
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
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-yellow-900/20 to-orange-900/20">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-12 max-w-4xl mx-auto">
            <Trophy className="h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 mx-auto mb-3 sm:mb-4 lg:mb-6" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 lg:mb-4">$200,000</h2>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 lg:mb-6">Total Prize Grant</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 text-left">
              <div className="bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6">
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">$100,000</div>
                <div className="text-sm sm:text-base lg:text-lg font-semibold mb-1 sm:mb-2">Grand Prize Winner</div>
                <div className="text-xs sm:text-sm">Most innovative AI business concept with clear path to scale</div>
              </div>
              <div className="bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6">
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">$50,000</div>
                <div className="text-sm sm:text-base lg:text-lg font-semibold mb-1 sm:mb-2">Runner-up</div>
                <div className="text-xs sm:text-sm">Outstanding execution and business viability demonstration</div>
              </div>
              <div className="bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 sm:col-span-2 lg:col-span-1">
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">$50,000</div>
                <div className="text-sm sm:text-base lg:text-lg font-semibold mb-1 sm:mb-2">Category Winners</div>
                <div className="text-xs sm:text-sm">Best in innovation, social impact, and technical excellence</div>
              </div>
            </div>
            
            <p className="mt-4 sm:mt-6 lg:mt-8 text-sm sm:text-base lg:text-lg">
              <strong>All registered participants are eligible to win!</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">Choose Your Path to Success</h2>
            <p className="text-sm sm:text-base lg:text-xl text-gray-300">Invest in your future. The returns are unlimited.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
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
                {tier.popular && <Badge className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 bg-slate-700 text-white border-slate-600 text-xs sm:text-sm">
                    Most Popular
                  </Badge>}
                <CardHeader className="text-center p-3 sm:p-4 lg:p-6">
                  <CardTitle className="text-white text-base sm:text-lg lg:text-2xl">{tier.name}</CardTitle>
                  <div className="py-3 sm:py-4">
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">{tier.price}</div>
                    {tier.originalPrice && <div className="text-gray-400 line-through text-sm sm:text-base lg:text-lg">{tier.originalPrice}</div>}
                  </div>
                </CardHeader>
                <CardContent className="p-3 sm:p-4 lg:p-6 pt-0">
                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {tier.features.map((feature, fIndex) => <li key={fIndex} className="flex items-center text-gray-300 text-xs sm:text-sm lg:text-base">
                        <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>)}
                  </ul>
                  <Button 
                    className={`w-full ${tier.popular ? 'bg-slate-600 hover:bg-slate-500' : 'bg-slate-600 hover:bg-slate-500'} text-white text-sm sm:text-base`} 
                    size="lg"
                    onClick={() => window.location.href = 'https://www.zerocodechallenge.pro/#/register'}
                  >
                    Register Now
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">Success Stories</h2>
            <p className="text-sm sm:text-base lg:text-xl text-gray-300">See how past participants transformed their lives</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => <Card key={index} className="bg-slate-800/50 border-slate-600">
                <CardHeader className="p-3 sm:p-4 lg:p-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <CardTitle className="text-white text-sm sm:text-base lg:text-lg">{testimonial.name}</CardTitle>
                      <CardDescription className="text-gray-400 text-xs sm:text-sm lg:text-base">{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-3 sm:p-4 lg:p-6 pt-0">
                  <p className="text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm lg:text-base">"{testimonial.quote}"</p>
                  <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-300 border-yellow-400 text-xs sm:text-sm">
                    {testimonial.amount}
                  </Badge>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">Frequently Asked Questions</h2>
            <p className="text-sm sm:text-base lg:text-xl text-gray-300">Get all the details you need</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-slate-700/50 border-slate-600 rounded-lg px-3 sm:px-4 lg:px-6">
                  <AccordionTrigger className="text-white hover:text-blue-400 text-left text-xs sm:text-sm lg:text-base py-3 sm:py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 text-xs sm:text-sm lg:text-base pb-3 sm:pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section with World Map */}
      <section className="py-12 sm:py-16 lg:py-20 bg-black">        
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-6 sm:mb-8">
            <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-3 sm:mb-4">
              Global Challenge Participants
            </p>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto mb-6 sm:mb-8">Entrepreneurs from around the world are joining the challenge - both online and on site at our studio in Nigeria.</p>
          </div>
          
          <div className="container mx-auto px-4 text-center mb-6 sm:mb-8">
            <div className="max-w-sm mx-auto">
              <Button 
                size="lg" 
                className="w-full bg-white text-blue-600 hover:bg-gray-100 text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-12 py-3 sm:py-4 lg:py-6 rounded-xl shadow-2xl hover:shadow-white/25 transition-all"
                onClick={() => window.location.href = 'https://www.zerocodechallenge.pro/#/register'}
              >
                Claim Your Spot Now
                <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
              </Button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <WorldMap 
              centralHub={{
                lat: 9.0820,
                lng: 8.6753,
                label: "Nigeria - Challenge Hub"
              }}
              dots={[
                {
                  start: { lat: 9.0820, lng: 8.6753 }, // Nigeria (Abuja)
                  end: { lat: 40.7128, lng: -74.0060 } // New York
                },
                {
                  start: { lat: 9.0820, lng: 8.6753 }, // Nigeria (Abuja)
                  end: { lat: 51.5074, lng: -0.1278 } // London
                },
                {
                  start: { lat: 9.0820, lng: 8.6753 }, // Nigeria (Abuja)
                  end: { lat: 35.6762, lng: 139.6503 } // Tokyo
                },
                {
                  start: { lat: 9.0820, lng: 8.6753 }, // Nigeria (Abuja)
                  end: { lat: 25.2048, lng: 55.2708 } // Dubai
                },
                {
                  start: { lat: 9.0820, lng: 8.6753 }, // Nigeria (Abuja)
                  end: { lat: -23.5505, lng: -46.6333 } // São Paulo
                },
                {
                  start: { lat: 9.0820, lng: 8.6753 }, // Nigeria (Abuja)
                  end: { lat: -33.8688, lng: 151.2093 } // Sydney
                }
              ]} 
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer 
        logo={<ZCIcon />} 
        brandName="ZeroCode Challenge" 
        socialLinks={[{
          icon: <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />,
          href: "https://twitter.com",
          label: "Twitter"
        }, {
          icon: <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />,
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
