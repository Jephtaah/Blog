# A React Blog App

A modern, responsive blog application built with React, featuring a clean design and smooth user experience. This blog showcases various React development topics with well-structured content and intuitive navigation.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with clean, modern UI
- **React Router**: Client-side routing for smooth navigation
- **Blog Posts**: Curated content about React development topics
- **Date Formatting**: User-friendly date display using dayjs
- **Icon Integration**: Beautiful icons from React Icons library
- **Component Architecture**: Well-structured, reusable components

## 📁 Project Structure

```
src/
├── components/
│   ├── BlogList.jsx      # Blog posts listing component
│   ├── BlogPost.jsx      # Individual post display component
│   ├── Header.jsx        # Navigation header
│   └── Layout.jsx        # App layout wrapper
├── pages/
│   ├── Home.jsx          # Homepage with blog list
│   ├── PostPage.jsx      # Individual post page
│   └── NotFound.jsx      # 404 error page
├── data/
│   └── blogPosts.js      # Static blog post data
├── App.jsx               # Main app component with routing
└── main.jsx              # App entry point
```

## 🛠️ Technologies Used

- **React 19.1.0** - UI library
- **React Router DOM 7.9.2** - Client-side routing
- **Vite 6.3.5** - Build tool and dev server
- **dayjs 1.11.13** - Date manipulation library
- **React Icons 5.5.0** - Icon library
- **ESLint** - Code linting

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pulse
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## 📖 Blog Content

The blog features articles covering:
- React fundamentals and component creation
- Modern JavaScript ES6+ features
- React Hooks (useState, useEffect)
- CSS styling approaches in React
- Best practices and development tips

## 🎨 Styling

The application uses vanilla CSS with a component-based styling approach. Each component has its own CSS file for better organization and maintainability.

## 🔄 Routing

The app includes the following routes:
- `/` - Homepage with blog post list
- `/post/:id` - Individual blog post pages
- `*` - 404 Not Found page

## 📱 Responsive Design

The blog is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile devices

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

