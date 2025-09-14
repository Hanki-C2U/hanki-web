import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router";
import {
  Search,
  BookOpen,
  FileText,
  Video,
  Download,
  ExternalLink,
  Clock,
  Users,
  Briefcase
} from "lucide-react";
// Removed unused imports
import AuthHeader from "../components/AuthHeader";
import { useAuthStore } from "../store/authStore";

const ResourceLibrary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("articles");
  const navigate = useNavigate();
  const { userRole } = useAuthStore();

  // Unified resource type
  type ResourceType = "article" | "template" | "video" | "tool" | "opportunity" | "event";
  interface Resource {
    id: string;
    type: ResourceType;
    title: string;
    description: string;
    tags: string[];
    // Optional fields for each type
    author?: string;
    readTime?: string;
    category?: string;
    downloadUrl?: string;
    format?: string;
    downloads?: number;
    duration?: string;
    speaker?: string;
    views?: number;
    completionTime?: string;
    users?: number;
    toolUrl?: string;
    videoUrl?: string;
    organization?: string;
    date?: string;
    location?: string;
    url?: string;
    // Opportunity-specific
    opportunityType?: string;
  }


  // Load all resources from localStorage
  const [resources, setResources] = useState<Resource[]>([]);
  useEffect(() => {
    const stored = localStorage.getItem('resources');
    if (stored) {
      setResources(JSON.parse(stored));
    }
  }, []);

  // Save resources to localStorage
  const saveResources = (newResources: Resource[]) => {
    setResources(newResources);
    localStorage.setItem('resources', JSON.stringify(newResources));
  };

  // Upload modal state
  const [showModal, setShowModal] = useState(false);
  const [newResource, setNewResource] = useState<Partial<Resource>>({ type: 'article', tags: [] });

  // Handle resource upload
  const handleAddResource = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newResource.title || !newResource.type || !newResource.description) return;
    // Get mentor name from auth store if available
    const mentorName = userRole === 'mentor' && (window.localStorage.getItem('mentorName') || 'Mentor');

    // Ensure date is properly formatted for events
    const formattedResource = { ...newResource };
    if (newResource.type === 'event' && newResource.date) {
      formattedResource.date = new Date(newResource.date).toISOString();
    }

    const resourceToAdd: Resource = {
      ...formattedResource,
      id: uuidv4(),
      tags: formattedResource.tags || [],
      author: formattedResource.author || mentorName || 'Mentor',
    } as Resource;
    saveResources([resourceToAdd, ...resources]);
    setShowModal(false);
    setNewResource({ type: 'article', tags: [] });
  };

  // Filter resources by type and search
  function filterResources(type: ResourceType): Resource[] {
    return resources.filter(resource =>
      resource.type === type &&
      (
        !searchTerm ||
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (resource.tags && resource.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase())))
      )
    );
  }

  const tabs = [
    { id: "articles", label: "Articles", icon: FileText },
    { id: "templates", label: "Templates", icon: Download },
    { id: "videos", label: "Videos", icon: Video },
    { id: "tools", label: "Tools", icon: BookOpen },
    { id: "opportunities", label: "Opportunities", icon: Briefcase },
    { id: "events", label: "Events", icon: Users }
  ];

  // Delete modal state
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

  // Handle delete
  const handleDeleteResource = () => {
    if (!selectedResource) return;
    const updated = resources.filter(r => r.id !== selectedResource.id);
    saveResources(updated);
    setShowDeleteModal(false);
    setSelectedResource(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50">
      {/* Header */}
      <AuthHeader />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(userRole === 'mentor' ? '/mentor-dashboard' : '/mentee-dashboard')}
              className="text-emerald-600 hover:text-emerald-700 font-medium"
            >
              ← Back to Dashboard
            </button>
            <div className="h-6 w-px bg-gray-300" />
            <h1 className="text-xl font-semibold text-gray-900">Resource Library</h1>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Delete Modal */}
        {showDeleteModal && selectedResource && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowDeleteModal(false);
                }}
              >
                &times;
              </button>
              <h2 className="text-xl font-bold mb-4">Delete Resource</h2>
              <p>Are you sure you want to delete <span className="font-semibold">{selectedResource.title}</span>?</p>
              <div className="flex justify-end gap-2 mt-6">
                <button
                  className="px-4 py-2 rounded bg-gray-200 text-gray-700"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowDeleteModal(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 rounded bg-red-600 text-white font-semibold hover:bg-red-700"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteResource();
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Mentor Add Resource Button */}
        {userRole === 'mentor' && (
          <div className="flex justify-end mb-4">
            <button
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-600 text-white font-semibold hover:bg-emerald-700 shadow"
              onClick={() => setShowModal(true)}
            >
              + Add Resource
            </button>
          </div>
        )}

        {/* Add Resource Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
              <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600" onClick={() => setShowModal(false)}>&times;</button>
              <h2 className="text-xl font-bold mb-4">Add New Resource</h2>
              <form onSubmit={handleAddResource} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Type</label>
                  <select
                    className="w-full border rounded px-3 py-2"
                    value={newResource.type}
                    onChange={e => setNewResource(r => ({ ...r, type: e.target.value as ResourceType }))}
                  >
                    <option value="article">Article</option>
                    <option value="template">Template</option>
                    <option value="video">Video</option>
                    <option value="tool">Tool</option>
                    <option value="opportunity">Opportunity</option>
                    <option value="event">Event</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Title</label>
                  <input className="w-full border rounded px-3 py-2" value={newResource.title || ''} onChange={e => setNewResource(r => ({ ...r, title: e.target.value }))} required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Description</label>
                  <textarea className="w-full border rounded px-3 py-2" value={newResource.description || ''} onChange={e => setNewResource(r => ({ ...r, description: e.target.value }))} required />
                </div>
                <div onClick={(e) => e.stopPropagation()}>
                  <label className="block text-sm font-medium mb-1">Tags (comma separated)</label>
                  <input
                    className="w-full border rounded px-3 py-2"
                    value={newResource.tags?.join(', ') || ''}
                    onChange={(e) => {
                      const value = e.target.value;
                      const tags = value.endsWith(',')
                        ? [...value.split(',').map(t => t.trim()).filter(Boolean), '']
                        : value.split(',').map(t => t.trim()).filter(Boolean);
                      setNewResource(r => ({ ...r, tags }));
                    }}
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
                {/* Type-specific fields */}
                {newResource.type === 'article' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium mb-1">Author</label>
                      <input className="w-full border rounded px-3 py-2" value={newResource.author || ''} onChange={e => setNewResource(r => ({ ...r, author: e.target.value }))} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Read Time</label>
                      <input className="w-full border rounded px-3 py-2" value={newResource.readTime || ''} onChange={e => setNewResource(r => ({ ...r, readTime: e.target.value }))} />
                    </div>
                  </>
                )}
                {newResource.type === 'template' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium mb-1">Format</label>
                      <input className="w-full border rounded px-3 py-2" value={newResource.format || ''} onChange={e => setNewResource(r => ({ ...r, format: e.target.value }))} />
                    </div>
                  </>
                )}
                {newResource.type === 'video' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium mb-1">Speaker</label>
                      <input className="w-full border rounded px-3 py-2" value={newResource.speaker || ''} onChange={e => setNewResource(r => ({ ...r, speaker: e.target.value }))} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Duration</label>
                      <input className="w-full border rounded px-3 py-2" value={newResource.duration || ''} onChange={e => setNewResource(r => ({ ...r, duration: e.target.value }))} />
                    </div>
                  </>
                )}
                {newResource.type === 'tool' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium mb-1">Completion Time</label>
                      <input className="w-full border rounded px-3 py-2" value={newResource.completionTime || ''} onChange={e => setNewResource(r => ({ ...r, completionTime: e.target.value }))} />
                    </div>
                  </>
                )}
                {newResource.type === 'opportunity' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium mb-1">Organization</label>
                      <input className="w-full border rounded px-3 py-2" value={newResource.organization || ''} onChange={e => setNewResource(r => ({ ...r, organization: e.target.value }))} />
                    </div>
                  </>
                )}
                {newResource.type === 'event' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium mb-1">Date</label>
                      <input type="date" className="w-full border rounded px-3 py-2" value={newResource.date || ''} onChange={e => setNewResource(r => ({ ...r, date: e.target.value }))} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Location/URL</label>
                      <input className="w-full border rounded px-3 py-2" value={newResource.location || ''} onChange={e => setNewResource(r => ({ ...r, location: e.target.value }))} />
                    </div>
                  </>
                )}
                <div className="flex justify-end">
                  <button type="submit" className="px-4 py-2 rounded bg-emerald-600 text-white font-semibold hover:bg-emerald-700">Add Resource</button>
                </div>
              </form>
            </div>
          </div>
        )}
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
              {filterResources("article").map((article) => (
                <div
                  key={article.id}
                  className="rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer"
                  onClick={() => {
                    setSelectedResource(article);
                    setShowDeleteModal(true);
                  }}
                >
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
                        {article.tags && article.tags.map((tag, index) => (
                          <span key={index} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-gray-900 border-gray-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button
                        className="w-full inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md bg-emerald-500 text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent opening delete modal
                          window.open(article.url, '_blank');
                        }}
                      >
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
            filterResources("template").length === 0 ? (
              <div className="text-center py-12">
                <Download className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900">No templates yet</h3>
                <p className="mt-2 text-gray-500">Check back later as mentors share new templates</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterResources("template").map((template) => (
                  <div
                    key={template.id}
                    className="rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer"
                    onClick={() => {
                      setSelectedResource(template);
                      setShowDeleteModal(true);
                    }}
                  >
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
                          {template.tags && template.tags.map((tag, index) => (
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
            )
          )}

          {/* Videos Tab */}
          {activeTab === "videos" && (
            filterResources("video").length === 0 ? (
              <div className="text-center py-12">
                <Video className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900">No videos yet</h3>
                <p className="mt-2 text-gray-500">Check back later as mentors share new videos</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterResources("video").map((video) => (
                  <div
                    key={video.id}
                    className="rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer"
                    onClick={() => {
                      setSelectedResource(video);
                      setShowDeleteModal(true);
                    }}
                  >
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
                          {video.tags && video.tags.map((tag, index) => (
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
            )
          )}

          {/* Tools Tab */}
          {activeTab === "tools" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterResources("tool").map((tool) => (
                <div
                  key={tool.id}
                  className="rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer"
                  onClick={() => {
                    setSelectedResource(tool);
                    setShowDeleteModal(true);
                  }}
                >
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
                        {tool.tags && tool.tags.map((tag, index) => (
                          <span key={index} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-gray-900 border-gray-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button
                        className="w-full inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md bg-emerald-500 text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent opening delete modal
                          window.open(tool.toolUrl, '_blank');
                        }}
                      >
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
          {/* Events Tab */}
          {activeTab === "events" && (
            filterResources("event").length === 0 ? (
              <div className="text-center py-12">
                <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900">No events yet</h3>
                <p className="mt-2 text-gray-500">Check back later as mentors share new events</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterResources("event").map((event) => (
                  <div
                    key={event.id}
                    className="rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer"
                    onClick={() => {
                      setSelectedResource(event);
                      setShowDeleteModal(true);
                    }}
                  >
                    <div className="flex flex-col space-y-1.5 p-6">
                      <div className="flex justify-between items-start mb-2">
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-gray-100 text-gray-900">
                          Event
                        </span>
                        <div className="flex items-center gap-1 text-gray-500">
                          <Clock className="h-3 w-3" />
                          <span className="text-xs">
                            {event.date
                              ? new Date(event.date).toLocaleDateString(undefined, {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                              })
                              : "N/A"
                            }
                          </span>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                      <p className="text-sm text-gray-600">{event.description}</p>
                    </div>
                    <div className="p-6 pt-0">
                      <div className="space-y-4">
                        <p className="text-sm text-blue-600 font-medium">Location/URL: {event.location}</p>
                        <div className="flex flex-wrap gap-1">
                          {event.tags && event.tags.map((tag, index) => (
                            <span key={index} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-gray-900 border-gray-300">
                              {tag}
                            </span>
                          ))}
                        </div>
                        {event.location && event.location.startsWith('http') && (
                          <button
                            className="w-full inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md bg-emerald-500 text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(event.location, '_blank');
                            }}
                          >
                            <ExternalLink className="h-4 w-4" />
                            Join Event
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )
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

              {filterResources("opportunity").length === 0 ? (
                <div className="text-center py-12">
                  <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900">No opportunities yet</h3>
                  <p className="mt-2 text-gray-500">
                    Check back later as mentors share new job and education opportunities
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterResources("opportunity")
                    .filter(opp =>
                      !searchTerm ||
                      (opp.type && opp.type.toLowerCase().includes(searchTerm.toLowerCase())) ||
                      (opp.title && opp.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
                      (opp.organization && opp.organization.toLowerCase().includes(searchTerm.toLowerCase())) ||
                      (opp.description && opp.description.toLowerCase().includes(searchTerm.toLowerCase()))
                    )
                    .map(opportunity => (
                      <div
                        key={opportunity.id}
                        className="rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer"
                        onClick={() => {
                          setSelectedResource(opportunity);
                          setShowDeleteModal(true);
                        }}
                      >
                        <div className="flex flex-col space-y-1.5 p-6">
                          <div className="flex justify-between items-start mb-2">
                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-gray-100 text-gray-900">
                              {opportunity.opportunityType}
                            </span>
                            <div className="flex items-center gap-1 text-gray-500">
                              <Briefcase className="h-3 w-3" />
                              <span className="text-xs">{opportunity.organization}</span>
                            </div>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900">{opportunity.title}</h3>
                          <p className="text-sm text-gray-600">{opportunity.description}</p>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {opportunity.tags && opportunity.tags.map((tag, index) => (
                              <span key={index} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-gray-900 border-gray-300">
                                {tag}
                              </span>
                            ))}
                          </div>
                          {opportunity.url && (
                            <button
                              className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-emerald-500 text-white hover:bg-emerald-600 w-full"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(opportunity.url, '_blank');
                              }}
                            >
                              <ExternalLink className="h-4 w-4" />
                              Apply Now
                            </button>
                          )}
                        </div>
                      </div>
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