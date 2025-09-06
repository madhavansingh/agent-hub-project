import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface AgentCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
  tags?: string[];
  onTryNow: () => void;
}

export default function AgentCard({ 
  title, 
  description, 
  icon: Icon, 
  category, 
  tags = [],
  onTryNow 
}: AgentCardProps) {
  return (
    <Card className="group hover:shadow-medium transition-smooth cursor-pointer border-border/50 hover:border-primary/20 bg-gradient-secondary">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-smooth shadow-soft">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold group-hover:text-primary transition-smooth">
                {title}
              </CardTitle>
              <Badge variant="secondary" className="mt-1 text-xs">
                {category}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pb-4">
        <CardDescription className="text-muted-foreground leading-relaxed line-clamp-3">
          {description}
        </CardDescription>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={onTryNow}
          className="w-full bg-gradient-primary hover:opacity-90 transition-smooth shadow-soft group-hover:shadow-medium"
        >
          Try Now
        </Button>
      </CardFooter>
    </Card>
  );
}