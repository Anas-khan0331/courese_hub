# CourseHub - Course Selling Platform

## 🎓 Overview

A modern, premium course selling platform built with Next.js and Tailwind CSS featuring smooth animations, glassmorphism design, and a responsive layout.

## 📁 Project Structure

```
src/app/
├── components/
│   ├── Header.js              # Navigation with mobile menu
│   ├── Footer.js              # Footer with links and social media
│   ├── HeroSection.js         # Hero section with stats
│   ├── FeaturesSection.js     # Platform features showcase
│   ├── PopularCoursesSection.js # Featured courses display
│   ├── AboutSection.js        # About section
│   ├── FAQSection.js          # FAQ accordion
│   └── CTASection.js          # Call-to-action section
├── page.js                    # Home page
├── about/
│   └── page.js                # About page
├── courses/
│   └── page.js                # Courses listing page
├── contact/
│   └── page.js                # Contact page with form
├── globals.css                # Global styles and animations
└── landing.css                # Landing page specific styles
```

## 🎨 Design Features

### Color Palette

- **Primary**: Indigo (#6366f1) to Pink (#ec4899) gradient
- **Secondary**: Green (#14f195) to Cyan (#06b6d4) gradient
- **Background**: Dark theme with glassmorphism effects
- **Text**: White primary, gray secondary

### Animations

- ✨ Fade-in-up animations with stagger effects
- 🌊 Floating background gradients
- 💫 Smooth hover transitions
- 🎯 Pulse effects for badges
- 📱 Responsive mobile menu animations

### Components

All components use Tailwind CSS with custom animations from globals.css

## 📄 Pages

### 1. Home Page (`/`)

- Hero section with stats (50K+ students, 200+ courses)
- Features section (6 key features)
- Popular courses showcase (3 featured courses)
- About section
- FAQ section (5 questions)
- CTA section

### 2. Courses Page (`/courses`)

- Category filter (All, Development, Design, Marketing, Business, Data Science)
- Course grid with 6 sample courses
- Course cards showing:
  - Course image/icon
  - Category and level badges
  - Title and description
  - Instructor name
  - Rating and student count
  - Duration
  - Price
  - Enroll button

### 3. About Page (`/about`)

- Mission and vision cards
- Statistics (50K+ students, 200+ courses, 150+ countries, 95% success rate)
- Company values (Innovation, Community, Excellence)

### 4. Contact Page (`/contact`)

- Contact form (name, email, subject, message)
- Contact information cards:
  - Email addresses
  - Phone number
  - Office address
  - Social media links

## 🎯 Key Features

### Navigation

- Fixed header with glassmorphism effect
- Desktop navigation links
- Mobile hamburger menu with smooth animation
- Links to: Home, Courses, About, Contact
- "Get Started" CTA button

### Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts
- Mobile menu for small screens

### Interactive Elements

- Hover effects on cards and buttons
- Smooth transitions (0.3s cubic-bezier)
- FAQ accordion functionality
- Category filtering on courses page
- Form validation on contact page

## 🚀 Technologies Used

- **Framework**: Next.js 16.0.3
- **Styling**: Tailwind CSS v4
- **React**: 19.2.0
- **Fonts**: Inter (body), Space Grotesk (headings)
- **Icons**: Emoji icons for visual appeal

## 🎨 Styling Approach

### Tailwind CSS Classes

- Utility-first approach
- Custom gradients using `bg-gradient-to-*`
- Glassmorphism with `backdrop-blur`
- Responsive utilities (`md:`, `lg:`, etc.)
- Hover states with `hover:` prefix
- Transitions with `transition-*` utilities

### Custom CSS (globals.css)

- CSS variables for consistent theming
- Keyframe animations (fadeInUp, float, pulse)
- Stagger animation delays
- Scrollbar styling
- Animated background effects

## 📊 Course Data Structure

Each course includes:

- ID
- Title
- Instructor name
- Rating (out of 5)
- Number of students
- Price
- Category
- Duration
- Level (Beginner/Intermediate/Advanced)
- Description
- Icon/emoji

## 🎯 Call-to-Actions

1. **Primary CTA**: "Browse Courses" / "Get Started"
2. **Secondary CTA**: "Watch Demo" / "Contact Sales"
3. **Course Enrollment**: "Enroll Now" buttons on course cards

## 🌟 Premium Features

- Lifetime access to courses
- Industry-recognized certificates
- 24/7 community support
- HD video lessons
- Expert instructors
- Career growth resources

## 📱 Mobile Optimization

- Responsive grid layouts
- Touch-friendly buttons and links
- Mobile menu with smooth animations
- Optimized font sizes for mobile
- Flexible spacing and padding

## 🎨 Visual Hierarchy

1. **Headers**: Large, bold, gradient text
2. **Subheaders**: Medium weight, white text
3. **Body**: Regular weight, gray text
4. **CTAs**: Bold, gradient background buttons
5. **Cards**: Glassmorphism with subtle borders

## 🔄 Reusable Components

All sections are modular and reusable:

- Can be easily rearranged
- Props can be added for customization
- Consistent styling across pages
- Easy to maintain and update

## 🎯 Next Steps (Potential Enhancements)

1. Add course detail pages
2. Implement user authentication
3. Add shopping cart functionality
4. Integrate payment gateway
5. Add student dashboard
6. Implement course progress tracking
7. Add video player for course content
8. Create instructor profiles
9. Add reviews and ratings system
10. Implement search functionality

## 📝 Notes

- All animations use the same timing functions for consistency
- Color palette is defined in CSS variables for easy theming
- Components use intersection observer for scroll animations
- Mobile menu state managed with React hooks
- Form handling ready for backend integration
