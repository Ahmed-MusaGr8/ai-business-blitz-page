import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rocket, Users, Zap, Package, Trophy } from "lucide-react";
import { ShapeLandingHero } from "@/components/ShapeLandingHero";

const ZCIcon = () => (
  <svg viewBox="0 0 32 32" className="h-8 w-8 text-white">
    <rect width="32" height="32" rx="6" fill="currentColor"/>
    <text x="16" y="22" textAnchor="middle" fill="black" fontFamily="system-ui" fontSize="14" fontWeight="bold">ZC</text>
  </svg>
);

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToRegistration = () => {
    window.location.href = '/register';
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <ZCIcon />
              <span className="text-xl font-bold">Zero Code Challenge</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('timeline')}
                className="text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                Timeline
              </button>
              <Button 
                onClick={goToRegistration}
                className="bg-white text-black hover:bg-gray-200 font-semibold px-6 py-2"
              >
                Register Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ShapeLandingHero />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <Badge variant="outline" className="border-white/20 text-white bg-white/10 mb-6">
              <Zap className="h-4 w-4 mr-2" />
              AI-Powered Development Challenge
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Zero Code
              <br />
              Challenge
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Build powerful web applications without traditional coding. 
              Master AI-driven development tools and compete for amazing prizes.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={goToRegistration}
              size="lg" 
              className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-4 text-lg"
            >
              <Rocket className="h-5 w-5 mr-2" />
              Join the Challenge
            </Button>
            <Button 
              onClick={() => scrollToSection('about')}
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
            >
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-white">$50K+</div>
              <div className="text-gray-400">Total Prize Pool</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-white">7 Days</div>
              <div className="text-gray-400">Challenge Duration</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-white">1000+</div>
              <div className="text-gray-400">Global Participants</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 lg:py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                About the Challenge
              </h2>
              <p className="text-gray-400 leading-relaxed">
                The Zero Code Challenge is a unique opportunity to explore the future of application development. 
                Dive into a world where AI-powered tools enable you to build sophisticated web applications without writing a single line of traditional code.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Whether you're a seasoned developer or a complete beginner, this challenge will empower you to unleash your creativity and bring your ideas to life faster than ever before.
              </p>
              <Button 
                onClick={goToRegistration}
                className="bg-white text-black hover:bg-gray-200 font-semibold px-6 py-3"
              >
                Register Now
              </Button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1678772844874-34644eb9951a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Abstract AI Image" 
                className="rounded-lg shadow-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-12 sm:py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Our Proud Sponsors
            </h2>
            <p className="text-gray-400">
              We are grateful for the support of these leading companies
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png" 
              alt="Microsoft" 
              className="h-10 sm:h-12 object-contain grayscale" 
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png" 
              alt="Google" 
              className="h-10 sm:h-12 object-contain grayscale" 
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/512px-Amazon_logo.svg.png" 
              alt="Amazon" 
              className="h-10 sm:h-12 object-contain grayscale" 
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/512px-Meta_Platforms_Inc._logo.svg.png" 
              alt="Meta" 
              className="h-10 sm:h-12 object-contain grayscale" 
            />
          </div>
        </div>
      </section>

      {/* Updated How It Works Section - Fixed overflow */}
      <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              HOW IT WORKS
            </h2>
            
            {/* Steps with connecting line - Fixed spacing to prevent overflow */}
            <div className="flex flex-col items-center justify-center max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0 lg:space-x-12 xl:space-x-16">
                {/* Step 1 */}
                <div className="text-center flex-shrink-0 max-w-xs px-4">
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-sm">1</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Register</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Sign up for the challenge and join our community of innovators ready to build without code.
                  </p>
                </div>
                
                {/* Connecting Line 1-2 - Reduced width */}
                <div className="hidden lg:block w-12 xl:w-16 h-0.5 bg-white relative flex-shrink-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                {/* Step 2 */}
                <div className="text-center flex-shrink-0 max-w-xs px-4">
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                      <Package className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-sm">2</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Get Builder Pack</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Receive exclusive access to premium AI tools, resources, and step-by-step guidance.
                  </p>
                </div>
                
                {/* Connecting Line 2-3 - Reduced width */}
                <div className="hidden lg:block w-12 xl:w-16 h-0.5 bg-white relative flex-shrink-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                {/* Step 3 */}
                <div className="text-center flex-shrink-0 max-w-xs px-4">
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center">
                      <Trophy className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-sm">3</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Access Tools</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Build, compete, and showcase your creations. Win prizes and gain recognition in the community.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button 
              onClick={goToRegistration}
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4"
            >
              <Rocket className="h-5 w-5 mr-2" />
              Access Challenge Pack
            </Button>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-16 sm:py-20 lg:py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Challenge Timeline
            </h2>
            <p className="text-gray-400">
              Key dates and milestones for the Zero Code Challenge
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 h-full border border-gray-700 transform -translate-x-1/2"></div>
            <div className="space-y-8">
              {/* Timeline Item 1 */}
              <div className="flex items-center">
                <div className="hidden md:block w-1/2 text-right pr-4">
                  <div className="text-lg font-semibold text-white">
                    Registration Opens
                  </div>
                  <div className="text-gray-400">November 1, 2023</div>
                </div>
                <div className="md:hidden">
                  <div className="text-lg font-semibold text-white">
                    Registration Opens
                  </div>
                  <div className="text-gray-400">November 1, 2023</div>
                </div>
                <div className="relative mx-4">
                  <div className="w-4 h-4 bg-blue-500 rounded-full z-10"></div>
                  <div className="absolute top-0 left-0 w-4 h-4 bg-blue-500 rounded-full transform scale-125 animate-pulse opacity-50"></div>
                </div>
                <div className="hidden md:block w-1/2 text-left pl-4">
                  <div className="text-gray-400">
                    Sign up and secure your spot in the challenge
                  </div>
                </div>
                <div className="md:hidden text-gray-400">
                  Sign up and secure your spot in the challenge
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex items-center">
                <div className="hidden md:block w-1/2 text-right pr-4">
                  <div className="text-lg font-semibold text-white">
                    Challenge Kickoff
                  </div>
                  <div className="text-gray-400">December 1, 2023</div>
                </div>
                <div className="md:hidden">
                  <div className="text-lg font-semibold text-white">
                    Challenge Kickoff
                  </div>
                  <div className="text-gray-400">December 1, 2023</div>
                </div>
                <div className="relative mx-4">
                  <div className="w-4 h-4 bg-purple-500 rounded-full z-10"></div>
                </div>
                <div className="hidden md:block w-1/2 text-left pl-4">
                  <div className="text-gray-400">
                    The challenge officially begins with the release of the
                    builder pack
                  </div>
                </div>
                <div className="md:hidden text-gray-400">
                  The challenge officially begins with the release of the
                  builder pack
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex items-center">
                <div className="hidden md:block w-1/2 text-right pr-4">
                  <div className="text-lg font-semibold text-white">
                    Submission Deadline
                  </div>
                  <div className="text-gray-400">December 7, 2023</div>
                </div>
                <div className="md:hidden">
                  <div className="text-lg font-semibold text-white">
                    Submission Deadline
                  </div>
                  <div className="text-gray-400">December 7, 2023</div>
                </div>
                <div className="relative mx-4">
                  <div className="w-4 h-4 bg-pink-500 rounded-full z-10"></div>
                </div>
                <div className="hidden md:block w-1/2 text-left pl-4">
                  <div className="text-gray-400">
                    Submit your project for judging and a chance to win
                  </div>
                </div>
                <div className="md:hidden text-gray-400">
                  Submit your project for judging and a chance to win
                </div>
              </div>

              {/* Timeline Item 4 */}
              <div className="flex items-center">
                <div className="hidden md:block w-1/2 text-right pr-4">
                  <div className="text-lg font-semibold text-white">
                    Winners Announced
                  </div>
                  <div className="text-gray-400">December 14, 2023</div>
                </div>
                <div className="md:hidden">
                  <div className="text-lg font-semibold text-white">
                    Winners Announced
                  </div>
                  <div className="text-gray-400">December 14, 2023</div>
                </div>
                <div className="relative mx-4">
                  <div className="w-4 h-4 bg-red-500 rounded-full z-10"></div>
                </div>
                <div className="hidden md:block w-1/2 text-left pl-4">
                  <div className="text-gray-400">
                    The top projects are revealed, and prizes are awarded
                  </div>
                </div>
                <div className="md:hidden text-gray-400">
                  The top projects are revealed, and prizes are awarded
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Key Features
            </h2>
            <p className="text-gray-400">
              What you'll experience during the Zero Code Challenge
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 bg-gray-900 rounded-lg shadow-md">
              <Zap className="h-10 w-10 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                AI-Powered Tools
              </h3>
              <p className="text-gray-400">
                Utilize cutting-edge AI tools to accelerate your development
                process
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 bg-gray-900 rounded-lg shadow-md">
              <Users className="h-10 w-10 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Community Support
              </h3>
              <p className="text-gray-400">
                Connect with fellow participants and mentors for guidance and
                collaboration
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 bg-gray-900 rounded-lg shadow-md">
              <Trophy className="h-10 w-10 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Exciting Prizes
              </h3>
              <p className="text-gray-400">
                Compete for a share of the $50K+ prize pool and gain
                recognition
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of innovators in the most exciting no-code challenge of the year. 
            Transform your ideas into reality with AI-powered tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={goToRegistration}
              size="lg" 
              className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-4 text-lg"
            >
              <Users className="h-5 w-5 mr-2" />
              Claim Your Spot Now
            </Button>
            <Button 
              onClick={() => scrollToSection('timeline')}
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
            >
              View Timeline
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500">
            &copy; 2023 Zero Code Challenge. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
