import { 
  FileText, 
  Mail, 
  Bookmark, 
  Code, 
  Bug, 
  Workflow, 
  Users, 
  BarChart3, 
  Headphones,
  Image,
  Video,
  Share2,
  GraduationCap,
  Languages,
  Target
} from "lucide-react";

export interface Agent {
  id: string;
  title: string;
  description: string;
  icon: any;
  category: string;
  tags: string[];
}

export const agentCategories = [
  "Content & Writing",
  "Developer & Technical", 
  "Productivity & Business",
  "Creative & Design",
  "Learning & Personal Help"
];

export const agents: Agent[] = [
  // Content & Writing
  {
    id: "blog-generator",
    title: "Blog/Article Generator",
    description: "Create engaging blog posts and articles with AI assistance. Generate outlines, write content, and optimize for SEO automatically.",
    icon: FileText,
    category: "Content & Writing",
    tags: ["SEO", "Blogging", "Content"]
  },
  {
    id: "email-writer",
    title: "Email/Resume Writer", 
    description: "Craft professional emails, cover letters, and resumes. Tailored for different industries and communication styles.",
    icon: Mail,
    category: "Content & Writing",
    tags: ["Professional", "Communication"]
  },
  {
    id: "summarizer",
    title: "Summarizer Agent",
    description: "Summarize long documents, articles, and research papers into key insights and actionable takeaways.",
    icon: Bookmark,
    category: "Content & Writing", 
    tags: ["Research", "Analysis"]
  },

  // Developer & Technical
  {
    id: "code-generator",
    title: "Code Generator",
    description: "Generate clean, efficient code in multiple programming languages. From functions to full applications.",
    icon: Code,
    category: "Developer & Technical",
    tags: ["Programming", "Automation"]
  },
  {
    id: "debugger",
    title: "Debugger Agent",
    description: "Identify and fix bugs in your code. Provides explanations and suggests best practices for better code quality.",
    icon: Bug,
    category: "Developer & Technical",
    tags: ["Debugging", "Quality"]
  },
  {
    id: "api-workflow",
    title: "API Workflow Agent",
    description: "Design and implement API workflows. Connect different services and automate data processing pipelines.",
    icon: Workflow,
    category: "Developer & Technical",
    tags: ["APIs", "Integration"]
  },

  // Productivity & Business
  {
    id: "meeting-notes",
    title: "Meeting Notes Agent",
    description: "Automatically generate meeting summaries, action items, and follow-ups from recordings or transcripts.",
    icon: Users,
    category: "Productivity & Business",
    tags: ["Meetings", "Productivity"]
  },
  {
    id: "data-analysis",
    title: "Data Analysis Agent",
    description: "Analyze datasets, generate insights, and create visualizations. Perfect for business intelligence and reporting.",
    icon: BarChart3,
    category: "Productivity & Business",
    tags: ["Analytics", "Business Intelligence"]
  },
  {
    id: "customer-support",
    title: "Customer Support Agent",
    description: "Handle customer inquiries, provide solutions, and escalate complex issues. Available 24/7 for your business.",
    icon: Headphones,
    category: "Productivity & Business",
    tags: ["Support", "Customer Service"]
  },

  // Creative & Design
  {
    id: "image-generator",
    title: "Image Generator",
    description: "Create stunning images, artwork, and visual content from text descriptions. Perfect for marketing and creative projects.",
    icon: Image,
    category: "Creative & Design",
    tags: ["Art", "Visual Content"]
  },
  {
    id: "video-script",
    title: "Video Script Agent",
    description: "Write engaging video scripts for YouTube, social media, and marketing content. Includes hooks and call-to-actions.",
    icon: Video,
    category: "Creative & Design",
    tags: ["Video", "Scripting"]
  },
  {
    id: "social-media",
    title: "Social Media Content Agent",
    description: "Create compelling social media posts, captions, and content calendars across all major platforms.",
    icon: Share2,
    category: "Creative & Design",
    tags: ["Social Media", "Marketing"]
  },

  // Learning & Personal Help
  {
    id: "ai-tutor",
    title: "AI Tutor Agent",
    description: "Personalized learning assistant that adapts to your pace. Covers various subjects with interactive explanations.",
    icon: GraduationCap,
    category: "Learning & Personal Help",
    tags: ["Education", "Learning"]
  },
  {
    id: "language-translator",
    title: "Language Translator & Explainer",
    description: "Translate text between languages and provide cultural context. Learn languages through practical examples.",
    icon: Languages,
    category: "Learning & Personal Help",
    tags: ["Languages", "Translation"]
  },
  {
    id: "life-coach",
    title: "Life/Task Coach Agent",
    description: "Organize your goals, create actionable plans, and stay motivated. Your personal productivity and life coach.",
    icon: Target,
    category: "Learning & Personal Help",
    tags: ["Coaching", "Goal Setting"]
  },
];