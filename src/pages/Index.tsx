
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-primary-50 to-secondary-50 animate-fadeIn">
      <div className="text-center max-w-3xl mx-auto p-8">
        <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-6">
          Welcome to ElectronJEE
        </span>
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
          Your Gateway to JEE Excellence
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Join our platform for comprehensive JEE preparation with live classes,
          interactive tests, and personalized feedback.
        </p>
        <div className="flex gap-4 justify-center">
          <Button
            asChild
            className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
          >
            <Link to="/auth">Get Started</Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="border-2 border-primary-200 hover:border-primary-300 px-8 py-6 rounded-lg text-lg transition-all duration-300"
          >
            <Link to="/auth">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
