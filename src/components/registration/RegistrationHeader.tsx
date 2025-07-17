
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft } from "lucide-react";

const ZCIcon = () => (
  <svg viewBox="0 0 32 32" className="h-8 w-8 text-black">
    <rect width="32" height="32" rx="6" fill="currentColor"/>
    <text x="16" y="22" textAnchor="middle" fill="white" fontFamily="system-ui" fontSize="14" fontWeight="bold">ZC</text>
  </svg>
);

interface RegistrationHeaderProps {
  currentStep: number;
  totalSteps: number;
}

export const RegistrationHeader = ({ currentStep, totalSteps }: RegistrationHeaderProps) => {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        {/* Mobile Layout */}
        <div className="block sm:hidden">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <ZCIcon />
              <div>
                <h1 className="text-lg font-bold text-gray-900">Zero Code Challenge</h1>
                <p className="text-xs text-gray-500">Registration</p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="sm"
              className="text-gray-500 hover:text-gray-900 p-2"
              onClick={() => window.location.href = '/'}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-gray-900 leading-tight">Register for the Challenge</h2>
              <span className="text-xs text-gray-500 whitespace-nowrap ml-2">Step {currentStep} of {totalSteps}</span>
            </div>
            <Progress value={(currentStep / totalSteps) * 100} className="h-1.5" />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:block">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <ZCIcon />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Zero Code Challenge</h1>
                <p className="text-sm text-gray-500">Registration</p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              className="text-gray-500 hover:text-gray-900"
              onClick={() => window.location.href = '/'}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Register for the Zero Code Challenge</h2>
              <span className="text-sm text-gray-500">Step {currentStep} of {totalSteps}</span>
            </div>
            <Progress value={(currentStep / totalSteps) * 100} className="h-2" />
          </div>
        </div>
      </div>
    </header>
  );
};
