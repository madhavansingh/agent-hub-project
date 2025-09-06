import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Calendar, 
  Activity, 
  Workflow, 
  Settings, 
  Crown,
  BarChart3,
  Clock
} from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

export default function Profile() {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    joinDate: "March 2024",
    plan: "Pro",
    agentsUsed: 24,
    workflowsCreated: 8,
    totalSessions: 156
  };

  const recentActivity = [
    { id: 1, type: "agent", name: "Blog Generator", time: "2 hours ago" },
    { id: 2, type: "workflow", name: "Content Pipeline", time: "5 hours ago" },
    { id: 3, type: "agent", name: "Code Generator", time: "1 day ago" },
    { id: 4, type: "workflow", name: "Marketing Automation", time: "2 days ago" },
  ];

  const savedProjects = [
    { id: 1, name: "Product Launch Campaign", agents: ["Blog Generator", "Social Media Agent"], created: "March 15" },
    { id: 2, name: "Website Redesign", agents: ["Code Generator", "Image Generator"], created: "March 10" },
    { id: 3, name: "Customer Onboarding", agents: ["Email Writer", "Customer Support"], created: "March 5" },
  ];

  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Profile Header */}
        <div className="mb-8">
          <div className="flex items-start space-x-6">
            <Avatar className="w-20 h-20">
              <AvatarFallback className="text-2xl bg-gradient-primary text-white">
                {user.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-3xl font-bold">{user.name}</h1>
                <Badge className="bg-gradient-primary text-white">
                  <Crown className="w-3 h-3 mr-1" />
                  {user.plan}
                </Badge>
              </div>
              <p className="text-muted-foreground mb-4">{user.email}</p>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>Joined {user.joinDate}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Activity className="w-4 h-4" />
                  <span>{user.totalSessions} total sessions</span>
                </div>
              </div>
            </div>
            
            <Button className="bg-gradient-primary hover:opacity-90 transition-smooth">
              <Settings className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-secondary">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <User className="w-4 h-4 text-primary" />
                </div>
                <span>Agents Used</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{user.agentsUsed}</div>
              <p className="text-sm text-muted-foreground">Across all categories</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-secondary">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Workflow className="w-4 h-4 text-accent" />
                </div>
                <span>Workflows Created</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">{user.workflowsCreated}</div>
              <p className="text-sm text-muted-foreground">Custom automations</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-secondary">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-green-600" />
                </div>
                <span>Total Sessions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">{user.totalSessions}</div>
              <p className="text-sm text-muted-foreground">Since joining</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="activity" className="space-y-6">
          <TabsList>
            <TabsTrigger value="activity">Recent Activity</TabsTrigger>
            <TabsTrigger value="projects">Saved Projects</TabsTrigger>
            <TabsTrigger value="settings">Account Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="activity" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest interactions with AI agents</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-4 p-4 bg-muted/30 rounded-lg">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      {activity.type === 'agent' ? 
                        <User className="w-5 h-5 text-primary" /> : 
                        <Workflow className="w-5 h-5 text-accent" />
                      }
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{activity.name}</p>
                      <p className="text-sm text-muted-foreground capitalize">{activity.type}</p>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{activity.time}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Saved Projects</CardTitle>
                <CardDescription>Your saved workflows and agent combinations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {savedProjects.map((project) => (
                  <div key={project.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                    <div>
                      <h3 className="font-medium">{project.name}</h3>
                      <div className="flex space-x-1 mt-2">
                        {project.agents.map((agent) => (
                          <Badge key={agent} variant="outline" className="text-xs">
                            {agent}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Created {project.created}</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Open
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your account preferences and billing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Subscription Plan</h3>
                    <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div>
                        <p className="font-medium">Pro Plan</p>
                        <p className="text-sm text-muted-foreground">Unlimited agents, custom workflows</p>
                      </div>
                      <Button variant="outline">Upgrade</Button>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Preferences</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                        <span>Email notifications</span>
                        <Button variant="outline" size="sm">Enabled</Button>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                        <span>Auto-save workflows</span>
                        <Button variant="outline" size="sm">Enabled</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}