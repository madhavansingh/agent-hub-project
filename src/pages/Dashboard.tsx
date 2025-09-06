import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Sparkles } from "lucide-react";
import AgentCard from "@/components/AgentCard";
import DashboardLayout from "@/components/DashboardLayout";
import { agents, agentCategories } from "@/data/agents";
import { useToast } from "@/hooks/use-toast";

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { toast } = useToast();

  const filteredAgents = agents.filter((agent) => {
    const matchesSearch = agent.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         agent.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         agent.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = !selectedCategory || agent.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleTryAgent = (agentId: string) => {
    toast({
      title: "Agent launched!",
      description: `Starting ${agents.find(a => a.id === agentId)?.title}...`,
    });
  };

  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              AI Agents Dashboard
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Discover powerful AI agents to automate your workflows, boost productivity, 
            and unlock new possibilities across content, development, and creativity.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search agents by name, description, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 transition-smooth"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Filter by category:</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => setSelectedCategory(null)}
            className="transition-smooth"
          >
            All Categories
          </Button>
          {agentCategories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="transition-smooth"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredAgents.length} of {agents.length} agents
          </p>
        </div>

        {/* Agents Grid */}
        {agentCategories.map((category) => {
          const categoryAgents = filteredAgents.filter(agent => agent.category === category);
          
          if (categoryAgents.length === 0) return null;
          
          return (
            <div key={category} className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <h2 className="text-2xl font-semibold">{category}</h2>
                <Badge variant="secondary">{categoryAgents.length}</Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryAgents.map((agent) => (
                  <AgentCard
                    key={agent.id}
                    title={agent.title}
                    description={agent.description}
                    icon={agent.icon}
                    category={agent.category}
                    tags={agent.tags}
                    onTryNow={() => handleTryAgent(agent.id)}
                  />
                ))}
              </div>
            </div>
          );
        })}

        {filteredAgents.length === 0 && (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No agents found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or filter criteria
            </p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}