import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const ZCIcon = () => (
  <svg viewBox="0 0 32 32" className="h-8 w-8 text-white">
    <rect width="32" height="32" rx="6" fill="currentColor"/>
    <text x="16" y="22" textAnchor="middle" fill="black" fontFamily="system-ui" fontSize="14" fontWeight="bold">ZC</text>
  </svg>
);

const Index = () => {

  const handleRegisterClick = () => {
    window.location.href = '/register';
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header */}
      <header className="relative z-50">
        <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <ZCIcon />
            <span className="text-xl font-bold text-white">Zero Code Challenge</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How it Works</a>
            <a href="#timeline" className="text-gray-300 hover:text-white transition-colors">Timeline</a>
            <a href="#prizes" className="text-gray-300 hover:text-white transition-colors">Prizes</a>
            <button 
              onClick={handleRegisterClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Register Now
            </button>
          </div>

          <button className="md:hidden text-white">
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative">
        
        <section className="relative px-4 py-24 md:py-32">
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              Unleash Your Creativity with <span className="text-blue-500">Zero Code</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Join the Zero Code Challenge and build amazing applications without writing a single line of code.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <button 
                onClick={handleRegisterClick}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Join the Challenge
              </button>
              <button className="border border-gray-600 hover:bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 opacity-30 z-0"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/bg-pattern.svg')] opacity-10 z-0"></div>
        </section>

        {/* Challenge Live Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-yellow-400/20 to-orange-500/20">
          
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Challenge is Live!
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Participate now and showcase your no-code skills to the world.
            </p>
            
            <div className="text-center mt-12">
              <button 
                onClick={handleRegisterClick}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-12 py-4 rounded-full text-xl font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/30 animate-pulse"
              >
                Register Now - It's Free!
              </button>
            </div>
          </div>
        </section>

        
        <section className="py-16 md:py-24">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              How It Works
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center p-6 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-colors duration-300">
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Register</h3>
                <p className="text-gray-300">Sign up for the challenge and create your profile.</p>
              </div>
              
              {/* Step 2 */}
              <div className="text-center p-6 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-colors duration-300">
                <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Build</h3>
                <p className="text-gray-300">Use our no-code platform to build your application.</p>
              </div>
              
              {/* Step 3 */}
              <div className="text-center p-6 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-colors duration-300">
                <div className="w-16 h-16 rounded-full bg-yellow-600 text-black flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Submit</h3>
                <p className="text-gray-300">Submit your application and showcase your skills.</p>
              </div>
            </div>
          </div>
        </section>

        
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900/70 to-black/70 relative overflow-hidden">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Prizes
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* First Prize */}
              <div className="text-center p-6 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-300">
                <div className="w-24 h-24 rounded-full bg-yellow-500 text-black flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold">1st</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">First Prize</h3>
                <p className="text-gray-300">$10,000</p>
              </div>
              
              {/* Second Prize */}
              <div className="text-center p-6 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-300">
                <div className="w-24 h-24 rounded-full bg-gray-500 text-white flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold">2nd</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Second Prize</h3>
                <p className="text-gray-300">$5,000</p>
              </div>
              
              {/* Third Prize */}
              <div className="text-center p-6 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-300">
                <div className="w-24 h-24 rounded-full bg-orange-500 text-white flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold">3rd</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Third Prize</h3>
                <p className="text-gray-300">$2,500</p>
              </div>
            </div>
          </div>
          
          <div className="absolute inset-0 bg-[url('/confetti-bg.svg')] opacity-20 z-0"></div>
        </section>

        
        <section className="py-16 md:py-24">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Timeline
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Phase 1 */}
              <div className="p-6 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-colors duration-300">
                <h3 className="text-xl font-semibold text-white mb-2">Phase 1: Registration</h3>
                <p className="text-gray-300">Register for the challenge and create your profile.</p>
                <p className="text-sm text-gray-500 mt-2">October 1, 2024 - October 15, 2024</p>
              </div>
              
              {/* Phase 2 */}
              <div className="p-6 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-colors duration-300">
                <h3 className="text-xl font-semibold text-white mb-2">Phase 2: Building</h3>
                <p className="text-gray-300">Use our no-code platform to build your application.</p>
                <p className="text-sm text-gray-500 mt-2">October 16, 2024 - October 31, 2024</p>
              </div>
              
              {/* Phase 3 */}
              <div className="p-6 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-colors duration-300">
                <h3 className="text-xl font-semibold text-white mb-2">Phase 3: Submission</h3>
                <p className="text-gray-300">Submit your application and showcase your skills.</p>
                <p className="text-sm text-gray-500 mt-2">November 1, 2024 - November 15, 2024</p>
              </div>
              
              {/* Phase 4 */}
              <div className="p-6 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-colors duration-300">
                <h3 className="text-xl font-semibold text-white mb-2">Phase 4: Judging</h3>
                <p className="text-gray-300">Our expert panel will review and judge the submissions.</p>
                <p className="text-sm text-gray-500 mt-2">November 16, 2024 - November 30, 2024</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer CTA */}
        <section className="py-24 bg-gradient-to-r from-blue-900/50 to-purple-900/50 relative overflow-hidden">
          <div className="container mx-auto text-center relative z-10">
            <h2 className="text-4xl font-bold text-white mb-8">
              Ready to Transform Your Ideas into Reality?
            </h2>
            <p className="text-lg text-gray-300 mb-12">
              Join the Zero Code Challenge and become a no-code innovator.
            </p>
            
            <div className="text-center">
              <button 
                onClick={handleRegisterClick}
                className="bg-white text-black px-12 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
              >
                Join the Revolution
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
