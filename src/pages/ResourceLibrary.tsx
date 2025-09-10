import { useState } from "react";
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
  Star
} from "lucide-react";

const ResourceLibrary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("articles");

  const resources = {
    articles: [
      {
        id: 1,
        title: "Complete Guide to Tech Career Transitions",
        description: "A comprehensive roadmap for professionals looking to break into the technology industry from other fields.",
        author: "Dr. Emmanuel Ntagungira",
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

  const filterResources = (resources: any[], type: string) => {
    if (!searchTerm) return resources;
    return resources.filter(resource =>
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  const tabs = [
    { id: "articles", label: "Articles", icon: FileText },
    { id: "templates", label: "Templates", icon: Download },
    { id: "videos", label: "Videos", icon: Video },
    { id: "tools", label: "Tools", icon: BookOpen }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
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
            <Link to="/" className="text-2xl font-bold gradient-hero bg-clip-text text-transparent">
              SkillsConnect
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
          <div className="grid grid-cols-4 max-w-2xl mx-auto bg-gray-100 rounded-lg p-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
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
              {filterResources(resources.articles, 'articles').map((article) => (
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
                      
                      <button className="w-full inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md bg-orange-500 text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors">
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
              {filterResources(resources.templates, 'templates').map((template) => (
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
                      
                      <button className="w-full inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md bg-orange-500 text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors">
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
              {filterResources(resources.videos, 'videos').map((video) => (
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
                      
                      <button className="w-full inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md bg-orange-500 text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors">
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
              {filterResources(resources.tools, 'tools').map((tool) => (
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
                      
                      <button className="w-full inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md bg-orange-500 text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors">
                        <ExternalLink className="h-4 w-4" />
                        Use Tool
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ResourceLibrary;