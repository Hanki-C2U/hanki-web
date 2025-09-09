# Copilot Instructions for Skills Connect Hackathon Project

## Challenge of the Hackathon
Challenge:
Unlocking Diaspora potential for youth empowerment
The Problem:
Many educated Rwandan youth lack mentorship, global perspectives, and career readiness tools. The diaspora holds valuable expertise and networks, with an eagerness to contribute to the national development, but this resource is not structured or leveraged.
The Challenge:
How might we design a sustainable, inclusive, tech-enabled bridge between diaspora professionals and youth to foster job readiness and meaningful employment?

## Project Overview

This is a hackathon project called "Skills Connect" - a mentorship platform connecting mentees with mentors. The primary focus is on demonstrating the platform's concept, user experience, and more importantly how it solves the problem, rather than implementing a fully production-ready application.

## Tech Stack

- Frontend: React with TypeScript, Vite
- UI: TailwindCSS
- Backend: Supabase (being implemented by dedicated backend developer)

## Development Priorities

1. **Concept Demonstration**: Focus on communicating the platform idea and user flows
2. **Visual Appeal**: Create an attractive, functional UI that showcases the platform's potential
3. **Core Features**: Implement key user journeys rather than comprehensive functionality

## Implementation Guidelines

- **Backend Integration**:

  - Assume Supabase is available but DO NOT implement Supabase calls directly
  - Create placeholder functions that could later be connected to Supabase
  - Use hardcoded data or localStorage where appropriate for demonstration
  - Avoid modifying any existing backend integration code

- **Code Quality**:

  - Prioritize readability over optimization
  - Use TypeScript types but don't overcomplicate them
  - Create reusable components where it makes sense

- **User Experience**:
  - Focus on the mentorship journey and user flows
  - Ensure responsive design works on mobile and desktop
  - Implement just enough validation to demonstrate functionality

## Feature Areas

- User authentication (mentors/mentees) - UI only
- Profile creation and management
- Mentor discovery and filtering
- Booking mentorship sessions
- Progress tracking for mentees
- Dashboard views for both mentors and mentees

## Technical Boundaries

- **Do Not Modify**:
  - Existing Supabase integration
  - Backend API calls
  - Authentication implementation
- **Real-time Messaging**:
  - A separate branch may already have this implemented
  - Focus on UI components only, not the real-time functionality

Remember, this is a hackathon project meant to showcase the concept - prioritize demonstrating the platform's value proposition through frontend implementation while assuming backend functionality will be connected later. Always less is more.
