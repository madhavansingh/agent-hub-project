import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthLayout from "@/components/AuthLayout";
import { useToast } from "@/hooks/use-toast";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Success!",
        description: "You have been signed in successfully.",
      });
      // Redirect to dashboard
      window.location.href = "/dashboard";
    }, 1000);
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to your account to continue"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="transition-smooth"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="transition-smooth"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-primary focus:ring-primary border-border rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-muted-foreground">
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <Link
              to="/forgot-password"
              className="font-medium text-primary hover:text-primary/80 transition-smooth"
            >
              Forgot your password?
            </Link>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-primary hover:opacity-90 transition-smooth shadow-medium"
          disabled={isLoading}
        >
          {isLoading ? "Signing in..." : "Sign in"}
        </Button>

        <div className="text-center">
          <span className="text-muted-foreground">Don't have an account? </span>
          <Link
            to="/signup"
            className="font-medium text-primary hover:text-primary/80 transition-smooth"
          >
            Sign up
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}