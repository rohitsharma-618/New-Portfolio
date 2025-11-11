# 🚀 Rohit Sharma - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Full Stack Developer. Built with React, TypeScript, and Tailwind CSS with beautiful animations and interactive elements.

![Portfolio Preview]

## ✨ Features

- **Modern Design**: Clean, professional design with gradient backgrounds and glassmorphism effects
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Beautiful animations using Framer Motion
- **Interactive Elements**: Hover effects, micro-interactions, and smooth scrolling
- **Contact Integration**: WhatsApp integration for direct messaging
- **Resume Download**: Direct link to download resume from Google Drive
- **Social Media Links**: Quick access to GitHub, LinkedIn, and X (Twitter)

## 🛠️ Technologies Used

### Frontend
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons

### Development Tools
- **Vite** - Fast build tool and development server
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
src/
├── components/
│   ├── About.tsx          # About section with personal info
│   ├── Contact.tsx        # Contact form with WhatsApp integration
│   ├── Experience.tsx     # Work experience timeline
│   ├── Footer.tsx         # Footer with credits
│   ├── Hero.tsx          # Hero section with profile image
│   ├── Navbar.tsx        # Navigation bar
│   ├── Projects.tsx      # Projects showcase
│   └── Skills.tsx        # Skills with icons and categories
├── App.tsx               # Main app component
├── main.tsx             # App entry point
└── index.css            # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rohitsharma-618/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📱 Sections

### 🏠 Hero Section
- Professional profile image
- Introduction and role
- Call-to-action buttons
- Social media links

### 👨‍💻 About Section
- Personal background
- Professional journey
- Core values and characteristics

### 💼 Experience Section
- Work experience timeline
- Key responsibilities
- Technologies used
- Achievements

### 🛠️ Skills Section
- Technical skills with icons
- Categorized by type (Languages, Frameworks, Database, etc.)
- Interactive hover effects

### 🚀 Projects Section
- Project showcase with images
- Technology stack for each project
- GitHub and live demo links
- Hover effects for better UX

### 📞 Contact Section
- Contact information
- WhatsApp integration
- Social media links
- Contact form

## 🎨 Customization

### Colors
The website uses a purple-pink gradient theme. You can customize colors in:
- `tailwind.config.js` for global theme colors
- Individual components for specific styling

### Content
Update personal information in:
- `src/components/Hero.tsx` - Name, title, description
- `src/components/About.tsx` - Personal background
- `src/components/Experience.tsx` - Work experience
- `src/components/Skills.tsx` - Technical skills
- `src/components/Projects.tsx` - Project details
- `src/components/Contact.tsx` - Contact information

### Resume Link
Update the Google Drive resume link in `src/components/Hero.tsx`:
```typescript
const resumeUrl = "YOUR_GOOGLE_DRIVE_LINK_HERE";
```

## 📱 Contact Integration

The contact form integrates with WhatsApp for direct messaging. Update the phone number in `src/components/Contact.tsx`:
```typescript
const phoneNumber = "+918813954101"; // Replace with your number
```

## 🌐 Deployment

This project can be deployed on various platforms:

- **Netlify**: Connect your GitHub repository for automatic deployments
- **Vercel**: Import your GitHub repository
- **GitHub Pages**: Use GitHub Actions for deployment

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

**Rohit Sharma**
- 📧 Email: rohitsharma6378@gmail.com
- 🔗 LinkedIn: [rohit-sharma-62501b2b5](https://www.linkedin.com/in/rohit-sharma-62501b2b5/)
- 🐙 GitHub: [rohitsharma-618](https://github.com/rohitsharma-618)
- 🐦 X (Twitter): [@smarty618](https://x.com/smarty618)

## 🙏 Acknowledgments

- Icons provided by [Lucide React](https://lucide.dev/)
- Images from [Pexels](https://www.pexels.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Built with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/)

---

⭐ If you found this project helpful, please give it a star on GitHub!

Made with ❤️ and ☕ by Rohit Sharma