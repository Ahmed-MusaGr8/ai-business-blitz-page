import { Crown, Zap, Handshake, TrendingUp, Sparkles, Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function Feature() {
  return (
    <div className="w-full py-12 lg:py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8">
          <div className="flex gap-4 flex-col items-center text-center">
            <div>
              <Badge variant="outline" className="text-blue-400 border-blue-400">Platform</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-4xl font-regular text-white">
                Learn From Billionaire Mentors
              </h2>
              <p className="text-lg max-w-3xl leading-relaxed tracking-tight text-gray-300">
                Get direct access to industry titans who've built billion-dollar businesses
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative bg-black h-full lg:col-span-2 p-4 aspect-square lg:aspect-auto flex justify-between flex-col hover:bg-gray-900/20 transition-all duration-300">
              <div className="absolute top-0 left-0 w-6 h-6">
                <div className="absolute top-0 left-0 w-6 h-0.5 bg-white"></div>
                <div className="absolute top-0 left-0 w-0.5 h-6 bg-white"></div>
              </div>
              <div className="absolute top-0 right-0 w-6 h-6">
                <div className="absolute top-0 right-0 w-6 h-0.5 bg-white"></div>
                <div className="absolute top-0 right-0 w-0.5 h-6 bg-white"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-6 h-6">
                <div className="absolute bottom-0 left-0 w-6 h-0.5 bg-white"></div>
                <div className="absolute bottom-0 left-0 w-0.5 h-6 bg-white"></div>
              </div>
              <div className="absolute bottom-0 right-0 w-6 h-6">
                <div className="absolute bottom-0 right-0 w-6 h-0.5 bg-white"></div>
                <div className="absolute bottom-0 right-0 w-0.5 h-6 bg-white"></div>
              </div>
              <Crown className="w-8 h-8 stroke-1 text-white" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight text-white mb-2">Billionaire Mentorship</h3>
                <p className="text-gray-300 max-w-xs text-base">
                  Direct access to industry titans who've built and scaled billion-dollar businesses from the ground up.
                </p>
              </div>
            </div>
            <div className="relative bg-black aspect-square p-4 flex justify-between flex-col hover:bg-gray-900/20 transition-all duration-300">
              <div className="absolute top-0 left-0 w-6 h-6">
                <div className="absolute top-0 left-0 w-6 h-0.5 bg-white"></div>
                <div className="absolute top-0 left-0 w-0.5 h-6 bg-white"></div>
              </div>
              <div className="absolute top-0 right-0 w-6 h-6">
                <div className="absolute top-0 right-0 w-6 h-0.5 bg-white"></div>
                <div className="absolute top-0 right-0 w-0.5 h-6 bg-white"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-6 h-6">
                <div className="absolute bottom-0 left-0 w-6 h-0.5 bg-white"></div>
                <div className="absolute bottom-0 left-0 w-0.5 h-6 bg-white"></div>
              </div>
              <div className="absolute bottom-0 right-0 w-6 h-6">
                <div className="absolute bottom-0 right-0 w-6 h-0.5 bg-white"></div>
                <div className="absolute bottom-0 right-0 w-0.5 h-6 bg-white"></div>
              </div>
              <Zap className="w-8 h-8 stroke-1 text-white" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight text-white mb-2">Zero to One Mastery</h3>
                <p className="text-gray-300 max-w-xs text-base">
                  Learn the exact strategies used to go from startup to unicorn status.
                </p>
              </div>
            </div>

            <div className="relative bg-black aspect-square p-4 flex justify-between flex-col hover:bg-gray-900/20 transition-all duration-300">
              <div className="absolute top-0 left-0 w-6 h-6">
                <div className="absolute top-0 left-0 w-6 h-0.5 bg-white"></div>
                <div className="absolute top-0 left-0 w-0.5 h-6 bg-white"></div>
              </div>
              <div className="absolute top-0 right-0 w-6 h-6">
                <div className="absolute top-0 right-0 w-6 h-0.5 bg-white"></div>
                <div className="absolute top-0 right-0 w-0.5 h-6 bg-white"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-6 h-6">
                <div className="absolute bottom-0 left-0 w-6 h-0.5 bg-white"></div>
                <div className="absolute bottom-0 left-0 w-0.5 h-6 bg-white"></div>
              </div>
              <div className="absolute bottom-0 right-0 w-6 h-6">
                <div className="absolute bottom-0 right-0 w-6 h-0.5 bg-white"></div>
                <div className="absolute bottom-0 right-0 w-0.5 h-6 bg-white"></div>
              </div>
              <Handshake className="w-8 h-8 stroke-1 text-white" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight text-white mb-2">Real Networking</h3>
                <p className="text-gray-300 max-w-xs text-base">
                  Connect with fellow entrepreneurs and build relationships that last a lifetime.
                </p>
              </div>
            </div>
            <div className="relative bg-black h-full lg:col-span-2 p-4 aspect-square lg:aspect-auto flex justify-between flex-col hover:bg-gray-900/20 transition-all duration-300">
              <div className="absolute top-0 left-0 w-6 h-6">
                <div className="absolute top-0 left-0 w-6 h-0.5 bg-white"></div>
                <div className="absolute top-0 left-0 w-0.5 h-6 bg-white"></div>
              </div>
              <div className="absolute top-0 right-0 w-6 h-6">
                <div className="absolute top-0 right-0 w-6 h-0.5 bg-white"></div>
                <div className="absolute top-0 right-0 w-0.5 h-6 bg-white"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-6 h-6">
                <div className="absolute bottom-0 left-0 w-6 h-0.5 bg-white"></div>
                <div className="absolute bottom-0 left-0 w-0.5 h-6 bg-white"></div>
              </div>
              <div className="absolute bottom-0 right-0 w-6 h-6">
                <div className="absolute bottom-0 right-0 w-6 h-0.5 bg-white"></div>
                <div className="absolute bottom-0 right-0 w-0.5 h-6 bg-white"></div>
              </div>
              <TrendingUp className="w-8 h-8 stroke-1 text-white" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight text-white mb-2">Scaling Strategies</h3>
                <p className="text-gray-300 max-w-xs text-base">
                  Discover the proven frameworks and methodologies used by the world's most successful entrepreneurs to scale their ventures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };