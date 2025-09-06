import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

export default function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Branding */}
      <div className="flex-1 bg-gradient-hero relative overflow-hidden hidden lg:flex">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 flex flex-col justify-center px-12">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold text-white mb-4">
              AI Agents Platform
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Powerful AI agents to automate your workflows, boost productivity, 
              and unlock new possibilities across content, development, and creativity.
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl" />
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
      </div>

      {/* Right side - Auth form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">{title}</h2>
            <p className="mt-2 text-muted-foreground">{subtitle}</p>
          </div>
          
          {children}
        </div>
      </div>
    </div>
  );
}