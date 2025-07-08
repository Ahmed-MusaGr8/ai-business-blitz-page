
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface FormNavigationProps {
  currentStep: number;
  totalSteps: number;
  isSubmitting: boolean;
  onPrevious: () => void;
  onNext: () => void;
}

export const FormNavigation = ({ 
  currentStep, 
  totalSteps, 
  isSubmitting, 
  onPrevious, 
  onNext 
}: FormNavigationProps) => {
  return (
    <div className="flex justify-between items-center pt-6">
      <Button
        type="button"
        variant="outline"
        onClick={onPrevious}
        disabled={currentStep === 1}
        className="border-gray-300 text-gray-700 hover:bg-gray-50"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Previous
      </Button>

      {currentStep < totalSteps ? (
        <Button
          type="button"
          onClick={onNext}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Next
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      ) : (
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-green-600 hover:bg-green-700 text-white"
        >
          {isSubmitting ? "Submitting..." : "Submit Registration"}
        </Button>
      )}
    </div>
  );
};
