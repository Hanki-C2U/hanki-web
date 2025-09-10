import { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  Search,
  Filter,
  MapPin,
  Star,
  Briefcase,
  ArrowLeft,
  GraduationCap,
  Target
} from "lucide-react";

const MenteeDiscovery = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedField, setSelectedField] = useState("");
  const [selectedSkills, setSelectedSkills] = useState("");

  const navigate = useNavigate()

  const mentees = [
    {
      id: 1,
      name: "Bienvenu Cyuzuzo",
      role: "Student",
      organization: "African Leadership University",
      field: "Software Engineering",
      skills: ["React", "JavaScript", "Node.js", "SQL", "HTML/CSS"],
      goals: ["Transition to Software Engineering", "Build Professional Network", "Develop Leadership Skills", "Prepare for technical interviews"],
      location: "Kigali, Rwanda",
      rating: 4.8,
      sessions: 6,
      avatar: null,
      profilePicture: "/shema-portrait.png",
      bio: "I'm a software engineering student passionate about building web applications. I'm currently focused on full-stack development using JavaScript, React, and SQL. I'm seeking mentorship to strengthen my system design, problem-solving, and career navigation skills."
    },
    {
      id: 2,
      name: "Alice Mutoni",
      role: "Frontend Developer",
      organization: "TechRwanda",
      field: "Web Development",
      skills: ["React", "Angular", "UI/UX", "CSS", "JavaScript"],
      goals: ["Become a senior developer", "Master advanced React patterns", "Improve UI/UX skills"],
      location: "Kigali, Rwanda",
      rating: 4.7,
      sessions: 8,
      avatar: null,
      profilePicture: "/claudine-portrait.png",
      bio: "Frontend developer with 2 years of experience. Passionate about creating beautiful and accessible user interfaces. Looking to advance my career and take on more challenging projects."
    },
    {
      id: 3,
      name: "David Nshuti",
      role: "Data Scientist",
      organization: "DataInsights Africa",
      field: "Data Science",
      skills: ["Python", "Machine Learning", "Data Visualization", "SQL", "Statistics"],
      goals: ["Develop expertise in NLP", "Build a portfolio of data science projects", "Transition into AI research"],
      location: "Nairobi, Kenya",
      rating: 4.9,
      sessions: 12,
      avatar: null,
      profilePicture: "/alex-portrait.webp",
      bio: "Data scientist with a passion for extracting insights from complex datasets. Currently working on machine learning projects with social impact in East Africa."
    },
    {
      id: 4,
      name: "Marie Uwase",
      role: "Product Manager",
      organization: "FinTech Rwanda",
      field: "Product Management",
      skills: ["User Research", "Agile", "Product Strategy", "Wireframing", "Market Analysis"],
      goals: ["Lead a product team", "Develop expertise in financial technology", "Create products with social impact"],
      location: "Kigali, Rwanda",
      rating: 4.6,
      sessions: 5,
      avatar: null,
      profilePicture: "/alice-portrait.webp",
      bio: "Product manager specializing in financial technology solutions. Passionate about creating products that improve financial inclusion in Africa."
    },
    {
      id: 5,
      name: "Eric Mugabo",
      role: "Agricultural Entrepreneur",
      organization: "AgriTech Rwanda",
      field: "Agriculture",
      skills: ["Business Development", "Agricultural Technology", "Sustainable Farming", "Project Management"],
      goals: ["Implement data-driven farming methods", "Expand export operations", "Build a network of agricultural technologists"],
      location: "Musanze, Rwanda",
      rating: 4.8,
      sessions: 9,
      avatar: null,
      profilePicture: "/james-portrait.webp",
      bio: "Agricultural entrepreneur using technology to improve farming outcomes. Focused on sustainable practices and increasing crop yields for small-scale farmers."
    },
    {
      id: 6,
      name: "Cynthia Mutoni",
      role: "Software Developer",
      organization: "Remote Tech",
      field: "Software Engineering",
      skills: ["Full-stack Development", "React", "Node.js", "MongoDB", "DevOps"],
      goals: ["Land a remote position with an international company", "Improve system design skills", "Contribute to open source"],
      location: "Kigali, Rwanda",
      rating: 4.7,
      sessions: 7,
      avatar: null,
      profilePicture: "/mary-portrait.webp",
      bio: "Self-taught developer with a passion for creating impactful applications. Currently focused on enhancing my skills to compete in the global tech market."
    }
  ];

  const fields = [
    "All Fields",
    "Software Engineering",
    "Web Development",
    "Data Science",
    "Product Management",
    "Agriculture",
    "Finance",
    "Marketing",
    "Design"
  ];

  const skillsList = [
    "All Skills",
    "React",
    "JavaScript",
    "Python",
    "SQL",
    "Machine Learning",
    "Agile",
    "Product Strategy",
    "UI/UX",
    "Data Visualization",
    "Business Development"
  ];

  const filteredMentees = mentees.filter(mentee => {
    const matchesSearch = mentee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentee.field.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentee.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesField = !selectedField || selectedField === "All Fields" ||
      mentee.field === selectedField;

    const matchesSkills = !selectedSkills || selectedSkills === "All Skills" ||
      mentee.skills.includes(selectedSkills);

    return matchesSearch && matchesField && matchesSkills;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-subtle border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/mentor-dashboard" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-smooth">
                <ArrowLeft className="h-4 w-4" />
                Back to Dashboard
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <h1 className="text-xl font-semibold">Discover Mentees</h1>
            </div>
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
              ATLAS
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-card p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">Find Mentees to Connect With</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search by name, field, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <select
              value={selectedField}
              onChange={(e) => setSelectedField(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
            >
              <option value="">Field of Study/Work</option>
              {fields.map((field) => (
                <option key={field} value={field}>{field}</option>
              ))}
            </select>

            <select
              value={selectedSkills}
              onChange={(e) => setSelectedSkills(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
            >
              <option value="">Skills</option>
              {skillsList.map((skill) => (
                <option key={skill} value={skill}>{skill}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center justify-between mt-6">
            <p className="text-gray-600">
              Showing {filteredMentees.length} mentee{filteredMentees.length !== 1 ? 's' : ''}
            </p>
            <button className="inline-flex items-center justify-center gap-2 h-9 px-3 rounded-md border border-gray-300 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </button>
          </div>
        </div>

        {/* Mentees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMentees.map((mentee) => (
            <div key={mentee.id} className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden hover:shadow-elevated transition-smooth">
              <div className="p-6">
                {/* Mentee Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    {mentee.profilePicture ? (
                      <img
                        src={mentee.profilePicture}
                        alt={mentee.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center text-white font-semibold text-lg">
                        {mentee.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{mentee.name}</h3>
                    <p className="text-emerald-600 font-medium">{mentee.role}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin className="h-3 w-3 text-gray-400" />
                      <span className="text-sm text-gray-600">{mentee.location}</span>
                    </div>
                  </div>
                </div>

                {/* Organization */}
                <div className="mb-3 flex items-center gap-2 text-sm text-gray-600">
                  <Briefcase className="h-4 w-4 text-gray-400" />
                  <span>{mentee.organization}</span>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <p className="text-sm font-medium mb-1">Skills</p>
                  <div className="flex flex-wrap gap-1">
                    {mentee.skills.slice(0, 3).map((skill, index) => (
                      <span key={index} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-emerald-100 text-emerald-800">
                        {skill}
                      </span>
                    ))}
                    {mentee.skills.length > 3 && (
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-gray-100 text-gray-700">
                        +{mentee.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Goals */}
                <div className="mb-4">
                  <p className="text-sm font-medium mb-1 flex items-center gap-1">
                    <Target className="h-3.5 w-3.5 text-emerald-600" />
                    Learning Goals
                  </p>
                  <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                    {mentee.goals.slice(0, 2).map((goal, index) => (
                      <li key={index} className="line-clamp-1">{goal}</li>
                    ))}
                    {mentee.goals.length > 2 && (
                      <li className="text-emerald-600 hover:underline cursor-pointer">
                        +{mentee.goals.length - 2} more goals
                      </li>
                    )}
                  </ul>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{mentee.rating}</span>
                    <span className="text-gray-600">({mentee.sessions} sessions)</span>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-600 font-medium">
                    <GraduationCap className="h-4 w-4" />
                    {mentee.field}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    className="flex-1 inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                    onClick={() => navigate(`/mentee/${mentee.id}`)}
                  >
                    View Profile
                  </button>
                  <button
                    className="inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                    onClick={() => navigate(`/messages/mentee/${mentee.id}`)}
                  >
                    Message
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredMentees.length === 0 && (
          <div className="text-center py-12">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No mentees found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or browse all mentees.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default MenteeDiscovery;
