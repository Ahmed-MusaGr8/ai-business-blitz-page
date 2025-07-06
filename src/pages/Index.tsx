import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ZCIcon from "@/components/ZCIcon";

const Index = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black border-b border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <ZCIcon />
              <div>
                <h1 className="text-xl font-bold">Zero Code Challenge</h1>
                <p className="text-sm text-gray-400">Unleash Your Creativity</p>
              </div>
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#about" className="hover:text-gray-300">About</a></li>
                <li><a href="#prizes" className="hover:text-gray-300">Prizes</a></li>
                <li><a href="#sponsors" className="hover:text-gray-300">Sponsors</a></li>
                <li><a href="#faq" className="hover:text-gray-300">FAQ</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">Transform Ideas into Reality with Zero Code</h1>
          <p className="text-lg text-gray-400 mb-12">
            Join the Zero Code Challenge and build innovative solutions without writing a single line of code.
            Unlock your potential and revolutionize the future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              onClick={handleRegisterClick}
            >
              Register Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold"
              onClick={handleRegisterClick}
            >
              Join the Challenge
            </Button>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">About the Challenge</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-gray-400 mb-6">
                The Zero Code Challenge is a unique opportunity for innovators, entrepreneurs, and tech enthusiasts
                to create functional applications and solve real-world problems using no-code platforms.
              </p>
              <p className="text-lg text-gray-400 mb-6">
                Whether you're a seasoned developer or a complete beginner, this challenge empowers you to bring
                your ideas to life without the complexities of traditional coding.
              </p>
            </div>
            <div>
              <p className="text-lg text-gray-400 mb-6">
                Participate in workshops, collaborate with mentors, and compete for exciting prizes. Showcase your
                creativity and demonstrate the power of no-code development.
              </p>
              <p className="text-lg text-gray-400 mb-6">
                Join us and be part of the no-code revolution. Let's build the future, one zero-code solution at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section id="prizes" className="px-4 py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Prizes and Rewards</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* First Place */}
            <Card className="bg-gray-800 border-gray-700 p-6 text-center">
              <h3 className="text-2xl font-semibold mb-4">First Place</h3>
              <p className="text-gray-400 mb-4">
                $10,000 Cash Prize, Mentorship Program, Featured Recognition
              </p>
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-3 text-lg font-semibold">
                Claim the Top Spot
              </Button>
            </Card>

            {/* Second Place */}
            <Card className="bg-gray-800 border-gray-700 p-6 text-center">
              <h3 className="text-2xl font-semibold mb-4">Second Place</h3>
              <p className="text-gray-400 mb-4">
                $5,000 Cash Prize, Exclusive Resources, Community Recognition
              </p>
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 text-lg font-semibold">
                Secure Your Place
              </Button>
            </Card>

            {/* Third Place */}
            <Card className="bg-gray-800 border-gray-700 p-6 text-center">
              <h3 className="text-2xl font-semibold mb-4">Third Place</h3>
              <p className="text-gray-400 mb-4">
                $2,500 Cash Prize, Premium Tools Access, Social Media Shoutout
              </p>
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 text-lg font-semibold">
                Join the Winners
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our Esteemed Sponsors</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {/* Sponsor Logos */}
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png" alt="Microsoft" className="h-12 object-contain grayscale" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png" alt="Google" className="h-12 object-contain grayscale" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/512px-Amazon_logo.svg.png" alt="Amazon" className="h-12 object-contain grayscale" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/512px-Meta_Platforms_Inc._logo.svg.png" alt="Meta" className="h-12 object-contain grayscale" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="px-4 py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {/* Question 1 */}
            <details className="bg-gray-800 border-gray-700 rounded-lg p-4">
              <summary className="font-semibold text-lg cursor-pointer">What is the Zero Code Challenge?</summary>
              <p className="text-gray-400 mt-2">
                The Zero Code Challenge is a competition where participants build applications and solutions using
                no-code development platforms.
              </p>
            </details>

            {/* Question 2 */}
            <details className="bg-gray-800 border-gray-700 rounded-lg p-4">
              <summary className="font-semibold text-lg cursor-pointer">Who can participate?</summary>
              <p className="text-gray-400 mt-2">
                Anyone with an interest in no-code development, regardless of their technical background.
              </p>
            </details>

            {/* Question 3 */}
            <details className="bg-gray-800 border-gray-700 rounded-lg p-4">
              <summary className="font-semibold text-lg cursor-pointer">What tools can I use?</summary>
              <p className="text-gray-400 mt-2">
                You can use any no-code platform that allows you to build functional applications without coding.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Challenge Packs Section */}
      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Unlock Your Potential with Challenge Packs</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Pack */}
            <Card className="bg-gray-900 border-gray-800 p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Starter Pack</h3>
              <p className="text-gray-400 mb-6">
                Perfect for beginners. Get access to basic tutorials and community support.
              </p>
              <ul className="text-sm text-gray-500 mb-6">
                <li>Basic Tutorials</li>
                <li>Community Support</li>
                <li>Limited Resources</li>
              </ul>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
                onClick={handleRegisterClick}
              >
                Access Challenge Pack
              </Button>
            </Card>

            {/* Pro Pack */}
            <Card className="bg-gradient-to-br from-purple-900 to-blue-900 border-purple-700 p-8 text-center relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-yellow-500 text-black px-2 py-1 rounded-md text-sm font-semibold">
                Popular
              </div>
              <h3 className="text-2xl font-semibold mb-4">Pro Pack</h3>
              <p className="text-gray-200 mb-6">
                Ideal for intermediate users. Includes advanced tutorials, priority support, and exclusive resources.
              </p>
              <ul className="text-sm text-gray-300 mb-6">
                <li>Advanced Tutorials</li>
                <li>Priority Support</li>
                <li>Exclusive Resources</li>
              </ul>
              <Button 
                className="w-full bg-white text-black hover:bg-gray-100 py-3 text-lg font-semibold"
                onClick={handleRegisterClick}
              >
                Claim Your Spot Now
              </Button>
            </Card>

            {/* Elite Pack */}
            <Card className="bg-gray-900 border-gray-800 p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Elite Pack</h3>
              <p className="text-gray-400 mb-6">
                For advanced participants. Get personalized mentorship, VIP access, and premium tools.
              </p>
              <ul className="text-sm text-gray-500 mb-6">
                <li>Personalized Mentorship</li>
                <li>VIP Access</li>
                <li>Premium Tools</li>
              </ul>
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold"
                onClick={handleRegisterClick}
              >
                Access Challenge Pack
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 px-4 py-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Zero Code Challenge. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
