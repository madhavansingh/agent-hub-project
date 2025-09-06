import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Workflow, Play, Edit, Trash2, GitBranch } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { useToast } from "@/hooks/use-toast";

export default function Workflows() {
  const { toast } = useToast();

  const workflows = [
    {
      id: 1,
      name: "Content Creation Pipeline",
      description: "Research → Blog Writer → SEO Optimizer → Social Media Posts",
      agents: ["Research Agent", "Blog Generator", "SEO Agent", "Social Media Agent"],
      status: "Active",
      runs: 15,
      lastRun: "2 hours ago"
    },
    {
      id: 2,
      name: "Code Review & Documentation",
      description: "Code Analysis → Bug Detection → Documentation Generation",
      agents: ["Code Analyzer", "Debugger Agent", "Documentation Writer"],
      status: "Draft", 
      runs: 3,
      lastRun: "1 day ago"
    },
    {
      id: 3,
      name: "Customer Support Automation",
      description: "Ticket Classification → Response Generation → Follow-up Scheduling",
      agents: ["Ticket Classifier", "Customer Support Agent", "Email Scheduler"],
      status: "Active",
      runs: 42,
      lastRun: "30 minutes ago"
    },
    {
      id: 4,
      name: "Marketing Campaign Builder",
      description: "Audience Research → Content Creation → Performance Analysis",
      agents: ["Research Agent", "Content Creator", "Analytics Agent"],
      status: "Paused",
      runs: 8,
      lastRun: "3 days ago"
    }
  ];

  const handleCreateWorkflow = () => {
    toast({
      title: "Workflow Builder",
      description: "Opening the drag-and-drop workflow builder...",
    });
  };

  const handleRunWorkflow = (workflowName: string) => {
    toast({
      title: "Workflow Started",
      description: `Running "${workflowName}"...`,
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-500/10 text-green-600 border-green-500/20";
      case "Draft": return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20";
      case "Paused": return "bg-gray-500/10 text-gray-600 border-gray-500/20";
      default: return "bg-gray-500/10 text-gray-600 border-gray-500/20";
    }
  };

  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <Workflow className="w-8 h-8 text-primary" />
              <h1 className="text-4xl font-bold">Workflows</h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Create and manage custom AI agent workflows to automate complex tasks
            </p>
          </div>
          
          <Button 
            onClick={handleCreateWorkflow}
            className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-medium"
          >
            <Plus className="w-4 h-4 mr-2" />
            Create Workflow
          </Button>
        </div>

        {/* Workflow Builder Card */}
        <Card className="mb-8 bg-gradient-secondary border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <GitBranch className="w-5 h-5 text-primary" />
              <span>Workflow Builder</span>
            </CardTitle>
            <CardDescription>
              Drag and drop AI agents to create powerful automation workflows
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  Connect multiple AI agents in sequence to create sophisticated automations
                </p>
                <div className="flex space-x-2">
                  <Badge variant="outline">Drag & Drop Interface</Badge>
                  <Badge variant="outline">Real-time Preview</Badge>
                  <Badge variant="outline">Custom Logic</Badge>
                </div>
              </div>
              <Button 
                onClick={handleCreateWorkflow}
                variant="outline"
                className="hover:bg-primary/10 transition-smooth"
              >
                Open Builder
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Workflows Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {workflows.map((workflow) => (
            <Card key={workflow.id} className="hover:shadow-medium transition-smooth">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{workflow.name}</CardTitle>
                    <CardDescription className="mb-3">
                      {workflow.description}
                    </CardDescription>
                    <Badge className={getStatusColor(workflow.status)}>
                      {workflow.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">Connected Agents:</p>
                  <div className="flex flex-wrap gap-1">
                    {workflow.agents.map((agent) => (
                      <Badge key={agent} variant="secondary" className="text-xs">
                        {agent}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{workflow.runs} runs</span>
                  <span>Last run: {workflow.lastRun}</span>
                </div>
                
                <div className="flex space-x-2 pt-2">
                  <Button 
                    onClick={() => handleRunWorkflow(workflow.name)}
                    size="sm" 
                    className="flex-1 bg-gradient-primary hover:opacity-90 transition-smooth"
                    disabled={workflow.status === "Paused"}
                  >
                    <Play className="w-3 h-3 mr-1" />
                    Run
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="w-3 h-3 mr-1" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="hover:bg-destructive/10 hover:text-destructive">
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State for New Users */}
        {workflows.length === 0 && (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Workflow className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No workflows yet</h3>
            <p className="text-muted-foreground mb-4">
              Create your first workflow to automate tasks with AI agents
            </p>
            <Button 
              onClick={handleCreateWorkflow}
              className="bg-gradient-primary hover:opacity-90 transition-smooth"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Your First Workflow
            </Button>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}