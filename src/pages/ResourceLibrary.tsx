import { useState,useEffect } from "react";
import { Link } from "react-router";
import { 
  Search, 
  BookOpen, 
  FileText, 
  Video, 
  Download,
  ExternalLink,
  ArrowLeft,
  Clock,
  Users,
  Briefcase
} from "lucide-react";  
import OpportunityCard from "../components/OpportunityCard";
import type { Opportunity } from "../components/OpportunityCard";

const ResourceLibrary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("articles");

  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);

  useEffect(() => {
    // Load opportunities from localStorage
    const storedOpportunities = localStorage.getItem('opportunities');
    if (storedOpportunities) {
      setOpportunities(JSON.parse(storedOpportunities));
    }
  }, []);

  // Type interfaces
  interface BaseResource {
    id: number | string;
    title: string;
    description: string;
    tags: string[];
  }

  interface ArticleResource extends BaseResource {
    author: string;
    readTime: string;
    category: string;
    downloadUrl: string;
  }

  interface TemplateResource extends BaseResource {
    category: string;
    format: string;
    downloads: number;
    downloadUrl: string;
  }

  interface VideoResource extends BaseResource {
    duration: string;
    speaker: string;
    views: number;
    category: string;
    videoUrl: string;
  }

  interface ToolResource extends BaseResource {
    category: string;
    completionTime: string;
    users: number;
    toolUrl: string;
  }

  // Generic filter function
  function filterResources<T extends BaseResource>(resources: T[]): T[] {
    if (!searchTerm) return resources;
    return resources.filter(resource =>
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }

  const resources: {
    articles: ArticleResource[];
    templates: TemplateResource[];
    videos: VideoResource[];
    tools: ToolResource[];
  } = {
    articles: [
      {
        id: 1,
        title: "Complete Guide to Tech Career Transitions",
        description: "A comprehensive roadmap for professionals looking to break into the technology industry from other fields.",
        author: "Emmanuel Ntagungira",
        readTime: "15 min read",
        category: "Career Development",
        tags: ["Career Change", "Tech Industry", "Skills Development"],
        downloadUrl: "#"
      },
      {
        id: 2,
        title: "Building Your Professional Network in Rwanda",
        description: "Strategic approaches to building meaningful professional connections within Rwanda's growing business ecosystem.",
        author: "Marie Claire Uwimana",
        readTime: "10 min read", 
        category: "Networking",
        tags: ["Networking", "Professional Growth", "Rwanda"],
        downloadUrl: "#"
      },
      {
        id: 3,
        title: "Financial Planning for Young Professionals",
        description: "Essential financial management strategies for early-career professionals in emerging markets.",
        author: "Grace Uwamahoro",
        readTime: "12 min read",
        category: "Finance",
        tags: ["Financial Planning", "Career Development", "Money Management"],
        downloadUrl: "#"
      }
    ],
    templates: [
      {
        id: 1,
        title: "Professional Resume Template",
        description: "ATS-friendly resume template specifically designed for the Rwandan job market.",
        category: "Job Search",
        format: "PDF + Word",
        downloads: 1205,
        tags: ["Resume", "Job Search", "Templates"],
        downloadUrl: "#"
      },
      {
        id: 2,
        title: "Interview Preparation Checklist",
        description: "Comprehensive checklist covering technical and behavioral interview preparation.",
        category: "Interview Prep",
        format: "PDF",
        downloads: 892,
        tags: ["Interview", "Preparation", "Checklist"],
        downloadUrl: "#"
      },
      {
        id: 3,
        title: "Salary Negotiation Script",
        description: "Professional scripts and strategies for salary negotiations in the African context.",
        category: "Career Growth",
        format: "PDF",
        downloads: 634,
        tags: ["Salary", "Negotiation", "Career Growth"],
        downloadUrl: "#"
      }
    ],
    videos: [
      {
        id: 1,
        title: "Breaking into Tech: A Diaspora Professional's Journey",
        description: "Success story and practical advice from a Rwandan software engineer who transitioned from finance to tech.",
        duration: "28:45",
        speaker: "David Nkurunziza",
        views: 2340,
        category: "Career Stories",
        tags: ["Tech Career", "Success Story", "Career Transition"],
        videoUrl: "#"
      },
      {
        id: 2,
        title: "Effective Remote Work Strategies",
        description: "Best practices for productivity, communication, and career growth while working remotely.",
        duration: "22:18",
        speaker: "Sarah Mukamana", 
        views: 1876,
        category: "Professional Skills",
        tags: ["Remote Work", "Productivity", "Communication"],
        videoUrl: "#"
      },
      {
        id: 3,
        title: "Building Startups in Rwanda: Challenges and Opportunities",
        description: "Panel discussion on the startup ecosystem in Rwanda and opportunities for young entrepreneurs.",
        duration: "45:30",
        speaker: "Panel Discussion",
        views: 1523,
        category: "Entrepreneurship",
        tags: ["Entrepreneurship", "Startups", "Rwanda"],
        videoUrl: "#"
      }
    ],
    tools: [
      {
        id: 1,
        title: "Career Assessment Quiz",
        description: "Discover your strengths, interests, and ideal career paths with our comprehensive assessment.",
        category: "Self Assessment",
        completionTime: "15 minutes",
        users: 5670,
        tags: ["Career Assessment", "Self Discovery", "Quiz"],
        toolUrl: "#"
      },
      {
        id: 2,
        title: "Skill Gap Analysis Tool",
        description: "Identify skills gaps between your current abilities and target role requirements.",
        category: "Skill Development", 
        completionTime: "10 minutes",
        users: 3456,
        tags: ["Skills", "Assessment", "Career Planning"],
        toolUrl: "#"
      },
      {
        id: 3,
        title: "Networking Tracker",
        description: "Organize and track your professional networking activities and follow-ups.",
        category: "Networking",
        completionTime: "Ongoing",
        users: 2341,
        tags: ["Networking", "Organization", "Professional Growth"],
        toolUrl: "#"
      }
    ]
  };

  const tabs = [
    { id: "articles", label: "Articles", icon: FileText },
    { id: "templates", label: "Templates", icon: Download },
    { id: "videos", label: "Videos", icon: Video },
    { id: "tools", label: "Tools", icon: BookOpen },
    { id: "opportunities", label: "Opportunities", icon: Briefcase }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-subtle border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/mentee-dashboard" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-smooth">
                <ArrowLeft className="h-4 w-4" />
                Back to Dashboard
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <h1 className="text-xl font-semibold">Resource Library</h1>
            </div>
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
              ATLAS
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Career Development Resources</h1>
          <p className="text-xl text-gray-600 mb-6">
            Curated tools, guides, and content to accelerate your professional growth
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
        </div>

        {/* Resource Tabs */}
        <div className="space-y-6">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === tab.id
                    ? 'bg-emerald-500 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Articles Tab */}
          {activeTab === "articles" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterResources(resources.articles).map((article: ArticleResource) => (
                <div key={article.id} className="rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-200">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <div className="flex justify-between items-start mb-2">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-gray-100 text-gray-900">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-1 text-gray-500">
                        <Clock className="h-3 w-3" />
                        <span className="text-xs">{article.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{article.title}</h3>
                    <p className="text-sm text-gray-600">{article.description}</p>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="space-y-4">
                      <p className="text-sm text-blue-600 font-medium">By {article.author}</p>
                      
                      <div className="flex flex-wrap gap-1">
                        {article.tags.map((tag, index) => (
                          <span key={index} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-gray-900 border-gray-300">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button className="w-full inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md bg-emerald-500 text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors">
                        <FileText className="h-4 w-4" />
                        Read Article
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Templates Tab */}
          {activeTab === "templates" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterResources(resources.templates).map((template: TemplateResource) => (
                <div key={template.id} className="rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-200">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <div className="flex justify-between items-start mb-2">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-gray-100 text-gray-900">
                        {template.category}
                      </span>
                      <div className="flex items-center gap-1 text-gray-500">
                        <Download className="h-3 w-3" />
                        <span className="text-xs">{template.downloads}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{template.title}</h3>
                    <p className="text-sm text-gray-600">{template.description}</p>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="space-y-4">
                      <p className="text-sm text-blue-600 font-medium">Format: {template.format}</p>
                      <div className="flex flex-wrap gap-1">
                        {template.tags.map((tag, index) => (
                          <span key={index} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-gray-900 border-gray-300">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button className="w-full inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md bg-emerald-500 text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors">
                        <Download className="h-4 w-4" />
                        Download Template
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Videos Tab */}
          {activeTab === "videos" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterResources(resources.videos).map((video: VideoResource) => (
                <div key={video.id} className="rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-200">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <div className="flex justify-between items-start mb-2">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-gray-100 text-gray-900">
                        {video.category}
                      </span>
                      <div className="flex items-center gap-1 text-gray-500">
                        <Users className="h-3 w-3" />
                        <span className="text-xs">{video.views} views</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{video.title}</h3>
                    <p className="text-sm text-gray-600">{video.description}</p>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-blue-600 font-medium">{video.speaker}</span>
                        <span className="text-gray-500">{video.duration}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {video.tags.map((tag, index) => (
                          <span key={index} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-gray-900 border-gray-300">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button className="w-full inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md bg-emerald-500 text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors">
                        <Video className="h-4 w-4" />
                        Watch Video
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tools Tab */}
          {activeTab === "tools" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterResources(resources.tools).map((tool: ToolResource) => (
                <div key={tool.id} className="rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-200">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <div className="flex justify-between items-start mb-2">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-gray-100 text-gray-900">
                        {tool.category}
                      </span>
                      <div className="flex items-center gap-1 text-gray-500">
                        <Users className="h-3 w-3" />
                        <span className="text-xs">{tool.users} users</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{tool.title}</h3>
                    <p className="text-sm text-gray-600">{tool.description}</p>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="space-y-4">
                      <p className="text-sm text-blue-600 font-medium">
                        Time: {tool.completionTime}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {tool.tags.map((tag, index) => (
                          <span key={index} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-gray-900 border-gray-300">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button className="w-full inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md bg-emerald-500 text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors">
                        <ExternalLink className="h-4 w-4" />
                        Use Tool
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Opportunities Tab */}
          {activeTab === "opportunities" && (
            <div>
              <div className="mb-6 flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold">Career Opportunities</h2>
                  <p className="text-gray-600">Explore job and education opportunities shared by mentors</p>
                </div>
                <div className="flex gap-2">
                  <button
                    className={`px-3 py-1.5 rounded-md text-sm font-medium border transition-colors ${!searchTerm || searchTerm.includes('job')
                      ? 'bg-blue-100 border-blue-300 text-blue-800'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                      }`}
                    onClick={() => setSearchTerm('job')}
                  >
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="h-3.5 w-3.5" />
                      Jobs
                    </div>
                  </button>
                  <button
                    className={`px-3 py-1.5 rounded-md text-sm font-medium border transition-colors ${searchTerm && searchTerm.includes('education')
                      ? 'bg-emerald-100 border-emerald-300 text-emerald-800'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                      }`}
                    onClick={() => setSearchTerm('education')}
                  >
                    <div className="flex items-center gap-1.5">
                      <BookOpen className="h-3.5 w-3.5" />
                      Education
                    </div>
                  </button>
                  {searchTerm && (
                    <button
                      className="px-3 py-1.5 rounded-md text-sm font-medium border border-gray-300 text-gray-700 hover:bg-gray-100"
                      onClick={() => setSearchTerm('')}
                    >
                      Clear Filters
                    </button>
                  )}
                </div>
              </div>

              {opportunities.length === 0 ? (
                <div className="text-center py-12">
                  <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900">No opportunities yet</h3>
                  <p className="mt-2 text-gray-500">
                    Check back later as mentors share new job and education opportunities
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {opportunities
                    .filter(opp =>
                      !searchTerm ||
                      opp.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      opp.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      opp.description.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map(opportunity => (
                      <OpportunityCard key={opportunity.id} opportunity={opportunity} />
                    ))
                  }
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ResourceLibrary;