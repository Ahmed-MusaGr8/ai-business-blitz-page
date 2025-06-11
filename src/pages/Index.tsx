
import { useState, useEffect } from "react";
import { ChevronDown, Play, Users, Trophy, DollarSign, Calendar, MapPin, Globe, Star, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 8,
    minutes: 42,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const mentors = [
    {
      name: "Sarah Chen",
      title: "AI Pioneer & Billionaire",
      bio: "Founded 3 unicorn companies, specialized in AI automation",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Marcus Rodriguez",
      title: "Tech Mogul & Investor",
      bio: "Built and sold companies worth $2.8B, AI industry expert",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Dr. Aisha Patel",
      title: "ML Research & Entrepreneur",
      bio: "Former Google AI lead, now building billion-dollar ventures",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "2023 Winner",
      quote: "This challenge changed my life. Went from zero coding experience to launching my AI startup.",
      amount: "$50,000 Winner"
    },
    {
      name: "Maria Santos",
      role: "Tech Entrepreneur",
      quote: "The mentorship was invaluable. Direct access to billionaires who actually care about your success.",
      amount: "Runner-up"
    }
  ];

  const faqs = [
    {
      question: "What exactly is the Zero Code Challenge?",
      answer: "A hybrid 5-day intensive where you'll learn to build AI-powered businesses from scratch, mentored by billionaires and industry leaders. Participants compete for a $200K prize pool while gaining real-world skills."
    },
    {
      question: "Do I need coding experience?",
      answer: "No! This is specifically designed for beginners. We'll teach you 'zero code' and 'low code' solutions to build powerful AI businesses without traditional programming."
    },
    {
      question: "How does the hybrid format work?",
      answer: "You can participate either in-person at our Silicon Valley headquarters or join virtually with full access to all sessions, mentorship, and networking opportunities."
    },
    {
      question: "What are the qualification criteria for prizes?",
      answer: "All registered participants are eligible. Prizes are awarded based on innovation, business viability, presentation quality, and mentor feedback on your AI business concept."
    },
    {
      question: "What's included in my registration?",
      answer: "All learning materials, direct mentor access, networking events, meals (for in-person), recording access, and eligibility for the full $200K prize pool."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="relative container mx-auto px-4 py-12 sm:py-20 text-center text-white">
          {/* Logo */}
          <div className="mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs sm:text-sm font-bold">ZC</span>
              </div>
              Zero Code Challenge
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent px-2">
            Build Your AI Empire
            <br />
            <span className="text-2xl sm:text-3xl md:text-5xl">From Zero to Billions</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-300 max-w-4xl mx-auto px-4">
            Learn from billionaire mentors, master AI business building, and compete for 
            <span className="text-yellow-400 font-bold"> $200,000 in prizes</span>
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 px-4">
            <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-400 text-xs sm:text-sm">
              <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              Billionaire Mentors
            </Badge>
            <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-400 text-xs sm:text-sm">
              <Trophy className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              $200K Prize Pool
            </Badge>
            <Badge variant="secondary" className="bg-pink-500/20 text-pink-300 border-pink-400 text-xs sm:text-sm">
              <Globe className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              Hybrid Format
            </Badge>
          </div>

          {/* Countdown Timer */}
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 max-w-2xl mx-auto border border-white/10">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Challenge Starts In:</h3>
            <div className="grid grid-cols-4 gap-2 sm:gap-4">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400">{item.value}</div>
                  <div className="text-xs sm:text-sm text-gray-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all w-full sm:w-auto">
            Secure Your Spot Now
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          
          <p className="text-xs sm:text-sm text-gray-400 mt-3 sm:mt-4 px-4">Early Bird Special: Save $500 • Limited Time</p>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-12 sm:py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">The Ultimate AI Business Challenge</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              5 intensive days learning to build one-person to billion-dollar businesses using cutting-edge AI tools and strategies
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Star className="h-6 w-6 sm:h-8 sm:w-8" />,
                title: "Zero to One Mastery",
                description: "Learn to validate and launch AI-powered business ideas from scratch, even with zero experience"
              },
              {
                icon: <DollarSign className="h-6 w-6 sm:h-8 sm:w-8" />,
                title: "Scaling Strategies",
                description: "Discover how to scale one-person operations to billion-dollar enterprises using AI automation"
              },
              {
                icon: <Play className="h-6 w-6 sm:h-8 sm:w-8" />,
                title: "No-Code AI Tools",
                description: "Master the latest no-code and low-code platforms to build powerful AI applications without programming"
              },
              {
                icon: <Users className="h-6 w-6 sm:h-8 sm:w-8" />,
                title: "Billionaire Mentorship",
                description: "Direct access to successful entrepreneurs who've built and scaled AI-powered businesses"
              },
              {
                icon: <Trophy className="h-6 w-6 sm:h-8 sm:w-8" />,
                title: "Real Networking",
                description: "Connect with like-minded entrepreneurs, investors, and industry leaders in AI and tech"
              },
              {
                icon: <Check className="h-6 w-6 sm:h-8 sm:w-8" />,
                title: "Budget-Friendly Building",
                description: "Learn to build effective solutions on a budget using smart AI tools and lean methodologies"
              }
            ].map((item, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all">
                <CardHeader>
                  <div className="text-blue-400 mb-2">{item.icon}</div>
                  <CardTitle className="text-white text-lg sm:text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-sm sm:text-base">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-slate-900 to-purple-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Learn From Billionaire Mentors</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Get direct access to industry titans who've built billion-dollar AI empires
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {mentors.map((mentor, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-600 text-center overflow-hidden hover:bg-slate-800/70 transition-all">
                <CardHeader>
                  <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-400">
                    <img 
                      src={mentor.image} 
                      alt={mentor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-white text-lg sm:text-xl">{mentor.name}</CardTitle>
                  <CardDescription className="text-blue-400 font-semibold text-sm sm:text-base">{mentor.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm sm:text-base">{mentor.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prize Pool Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-yellow-900/20 to-orange-900/20">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black rounded-2xl p-6 sm:p-12 max-w-4xl mx-auto">
            <Trophy className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4 sm:mb-6" />
            <h2 className="text-4xl sm:text-5xl font-bold mb-3 sm:mb-4">$200,000</h2>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Total Prize Pool</h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-left">
              <div className="bg-white/10 rounded-xl p-4 sm:p-6">
                <div className="text-xl sm:text-2xl font-bold mb-2">$100,000</div>
                <div className="text-base sm:text-lg font-semibold mb-2">Grand Prize Winner</div>
                <div className="text-sm">Most innovative AI business concept with clear path to scale</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 sm:p-6">
                <div className="text-xl sm:text-2xl font-bold mb-2">$50,000</div>
                <div className="text-base sm:text-lg font-semibold mb-2">Runner-up</div>
                <div className="text-sm">Outstanding execution and business viability demonstration</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
                <div className="text-xl sm:text-2xl font-bold mb-2">$50,000</div>
                <div className="text-base sm:text-lg font-semibold mb-2">Category Winners</div>
                <div className="text-sm">Best in innovation, social impact, and technical excellence</div>
              </div>
            </div>
            
            <p className="mt-6 sm:mt-8 text-base sm:text-lg">
              <strong>All registered participants are eligible to win!</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Choose Your Path to Success</h2>
            <p className="text-lg sm:text-xl text-gray-300">Invest in your future. The returns are unlimited.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Early Bird",
                price: "$497",
                originalPrice: "$997",
                popular: false,
                features: [
                  "5-day challenge access",
                  "All learning materials",
                  "Group mentorship sessions",
                  "Prize pool eligibility",
                  "Recording access",
                  "Community access"
                ]
              },
              {
                name: "Standard",
                price: "$997",
                originalPrice: null,
                popular: true,
                features: [
                  "Everything in Early Bird",
                  "1-on-1 mentor session",
                  "VIP networking events",
                  "Priority Q&A access",
                  "Bonus masterclasses",
                  "6-month community access"
                ]
              },
              {
                name: "VIP Experience",
                price: "$1,997",
                originalPrice: null,
                popular: false,
                features: [
                  "Everything in Standard",
                  "Direct mentor WhatsApp access",
                  "Private dinner with mentors",
                  "Guaranteed pitch feedback",
                  "12-month mastermind access",
                  "Investment intro opportunities"
                ]
              }
            ].map((tier, index) => (
              <Card key={index} className={`relative ${tier.popular ? 'bg-gradient-to-b from-blue-600/20 to-purple-600/20 border-blue-400' : 'bg-slate-700/50 border-slate-600'} hover:scale-105 transition-all`}>
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-white text-xl sm:text-2xl">{tier.name}</CardTitle>
                  <div className="py-4">
                    <div className="text-3xl sm:text-4xl font-bold text-white">{tier.price}</div>
                    {tier.originalPrice && (
                      <div className="text-gray-400 line-through text-base sm:text-lg">{tier.originalPrice}</div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-gray-300 text-sm sm:text-base">
                        <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${tier.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' : 'bg-slate-600 hover:bg-slate-500'} text-white`}
                    size="lg"
                  >
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Success Stories</h2>
            <p className="text-lg sm:text-xl text-gray-300">See how past participants transformed their lives</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-600">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <CardTitle className="text-white text-base sm:text-lg">{testimonial.name}</CardTitle>
                      <CardDescription className="text-gray-400 text-sm sm:text-base">{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4 text-sm sm:text-base">"{testimonial.quote}"</p>
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
      <section className="py-12 sm:py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Frequently Asked Questions</h2>
            <p className="text-lg sm:text-xl text-gray-300">Get all the details you need</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-slate-700/50 border-slate-600 rounded-lg px-4 sm:px-6">
                  <AccordionTrigger className="text-white hover:text-blue-400 text-left text-sm sm:text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 text-sm sm:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
            Your AI Empire Awaits
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto">
            Join thousands of entrepreneurs who are building the future with AI. 
            Don't let this opportunity slip away.
          </p>
          
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 rounded-xl shadow-2xl hover:shadow-white/25 transition-all w-full sm:w-auto">
            Claim Your Spot Now
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          
          <p className="text-blue-100 mt-4 sm:mt-6 text-sm sm:text-base">
            🔥 Early Bird Pricing Ends Soon • 🏆 $200K Prize Pool • 🚀 5-Day Challenge
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 text-lg sm:text-xl font-bold text-white mb-4">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
                Zero Code Challenge
              </div>
              <p className="text-gray-400 text-sm sm:text-base">
                Empowering entrepreneurs to build AI-powered billion-dollar businesses.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4 text-base sm:text-lg">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mentors</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Prize Pool</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Register</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4 text-base sm:text-lg">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Technical Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4 text-base sm:text-lg">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
            <p>&copy; 2024 Zero Code Challenge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
