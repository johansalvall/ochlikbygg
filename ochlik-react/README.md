# Ochlik Bygg - React Website Prototypes

Three modern, fully responsive website prototypes for Ochlik Bygg AB, built with React, Vite, and Framer Motion.

## 🎨 Prototypes

### 1. Modern & Minimalist
- Clean, sophisticated design
- Olive green accents (#6b8e23)
- Emphasis on whitespace and readability
- Smooth scroll animations
- Perfect for showcasing a contemporary, professional company

### 2. Bold & Professional
- Strong, impactful design
- Dark backgrounds with bright orange accents (#ff6b35)
- High-contrast layout
- Statistics section highlighting experience
- Great for making a powerful first impression

### 3. Classic & Trustworthy
- Traditional, warm design
- Earth tones (browns and olive greens)
- Serif typography for headings
- Emphasis on family values and reliability
- Perfect for highlighting trust and experience

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd ochlik-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit the URL shown in the terminal (usually `http://localhost:5173`)

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📦 Technologies Used

- **React** - UI library
- **Vite** - Fast build tool and dev server
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## 🎯 Features

- ✨ Smooth page transitions and animations
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Three distinct design themes
- ⚡ Fast loading with Vite
- 🔄 Easy switching between prototypes
- ♿ Accessible markup
- 📧 Contact information integrated
- 🏗️ Complete service listings

## 📁 Project Structure

```
ochlik-react/
├── src/
│   ├── prototypes/
│   │   ├── Modern/
│   │   │   ├── ModernPrototype.jsx
│   │   │   └── Modern.css
│   │   ├── Bold/
│   │   │   ├── BoldPrototype.jsx
│   │   │   └── Bold.css
│   │   └── Classic/
│   │       ├── ClassicPrototype.jsx
│   │       └── Classic.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
└── README.md
```

## 🎨 Customization

### Changing Colors
Each prototype has its own CSS file where you can easily modify colors:
- Modern: `src/prototypes/Modern/Modern.css`
- Bold: `src/prototypes/Bold/Bold.css`
- Classic: `src/prototypes/Classic/Classic.css`

### Adding Content
Edit the respective prototype component files to add or modify content:
- `src/prototypes/Modern/ModernPrototype.jsx`
- `src/prototypes/Bold/BoldPrototype.jsx`
- `src/prototypes/Classic/ClassicPrototype.jsx`

## 📱 Responsive Design

All prototypes are fully responsive and tested on:
- Mobile (< 768px)
- Tablet (768px - 968px)
- Desktop (> 968px)

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

The built files will be in the `dist/` folder, ready to deploy to any static hosting service like:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- etc.

### Quick Deploy with Vercel
```bash
npm install -g vercel
vercel
```

### Quick Deploy with Netlify
```bash
npm run build
# Then drag and drop the dist folder to https://app.netlify.com/drop
```

## 📝 Company Information

**Ochlik Bygg AB**
- Founded: 2009
- Location: Hässleholmsvägen 22, 285 33 Markaryd
- Phone: 073-723 35 36 / 073-094 05 03
- Email: info@ochlikbygg.se / adam@ochlikbygg.se
- Social Media: Facebook (OTB Bygg AB), Instagram (@ochlikbygg)

### Core Values
- **Trygghet** (Security) - Safe and reliable building projects
- **Ansvar** (Responsibility) - Full accountability from start to finish
- **Kunskap** (Knowledge) - 15+ years of expertise

### Services
- Nybyggnation (New Construction)
- Renovering (Renovation)
- Takarbeten (Roofing)
- Fönsterinstallation (Window Installation)
- Tillbyggnad (Extensions)
- Specialarbeten (Specialized Construction)

## 📄 License

This project is created for Ochlik Bygg AB. All rights reserved.

## 👨‍💻 Development

Created with modern web technologies for optimal performance and user experience.

---

**Need help?** Contact the developer or refer to the official documentation:
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Framer Motion Documentation](https://www.framer.com/motion)
