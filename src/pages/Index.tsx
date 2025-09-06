import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Shield, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl" />
      <div className="absolute bottom-32 right-32 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white">AI Agents Platform</h1>
          </div>
          
          {/* Hero Title */}
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Automate Everything<br />
            <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              With AI Agents
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Powerful AI agents to boost productivity, automate workflows, and unlock new possibilities 
            across content creation, development, and business operations.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/signup">
              <Button 
                size="lg" 
                className="bg-white text-gray-900 hover:bg-white/90 transition-smooth shadow-large text-lg px-8 py-4"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/signin">
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 transition-smooth text-lg px-8 py-4"
              >
                Sign In
              </Button>
            </Link>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Lightning Fast</h3>
              <p className="text-white/80">Deploy AI agents instantly with our intuitive platform</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Enterprise Ready</h3>
              <p className="text-white/80">Secure, scalable, and built for professional workflows</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Team Collaboration</h3>
              <p className="text-white/80">Share workflows and collaborate with your team seamlessly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
