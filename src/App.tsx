import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Menu, Moon, Sun, X } from 'lucide-react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Login from './pages/Login';

function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
      <div className={`${isDark ? 'bg-gray-900' : 'bg-gray-50'} min-h-screen transition-colors duration-200`}>
        {/* Navigation */}
        <nav className={`${isDark ? 'dark:bg-gray-800' : 'bg-white'} shadow-sm transition-colors duration-200 fixed w-full z-50`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className={`text-xl font-bold ${isDark ? 'dark:text-white' : 'text-gray-900'}`}>
                  richardcraddock <span className="font-bold text-custom-blue">dot</span> me
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden sm:flex sm:items-center sm:space-x-8">
                <Link to="/" className={`${isDark ? 'dark:text-gray-300 dark:hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Home</Link>
                <Link to="/resume" className={`${isDark ? 'dark:text-gray-300 dark:hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Resume</Link>
                <Link to="/projects" className={`${isDark ? 'dark:text-gray-300 dark:hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Projects</Link>
                <Link to="/contact" className={`${isDark ? 'dark:text-gray-300 dark:hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Contact</Link>
                <Link to="/login" className={`${isDark ? 'dark:text-gray-300 dark:hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Login</Link>
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-lg ${isDark ? 'dark:text-gray-300 dark:hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}
                >
                  {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
              </div>

              {/* Mobile menu button */}
              <div className="flex items-center sm:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`p-2 rounded-lg ${isDark ? 'dark:text-gray-300' : 'text-gray-700'}`}
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="sm:hidden">
              <div className={`px-2 pt-2 pb-3 space-y-1 ${isDark ? 'dark:bg-gray-800' : 'bg-white'}`}>
                <Link to="/" className={`block px-3 py-2 rounded-lg ${isDark ? 'dark:text-gray-300 dark:hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Home</Link>
                <Link to="/resume" className={`block px-3 py-2 rounded-lg ${isDark ? 'dark:text-gray-300 dark:hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Resume</Link>
                <Link to="/projects" className={`block px-3 py-2 rounded-lg ${isDark ? 'dark:text-gray-300 dark:hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Projects</Link>
                <Link to="/contact" className={`block px-3 py-2 rounded-lg ${isDark ? 'dark:text-gray-300 dark:hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Contact</Link>
                <Link to="/login" className={`block px-3 py-2 rounded-lg ${isDark ? 'dark:text-gray-300 dark:hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Login</Link>
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main className={`pt-16 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
          {children}
        </main>

        {/* Footer */}
        <footer className={`${isDark ? 'dark:bg-gray-800' : 'bg-white'} py-8`}>
          <div className="container mx-auto">
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/aliciousness" className={`${isDark ? 'dark:text-gray-400 dark:hover:text-gray-300' : 'text-gray-400 hover:text-gray-500'}`}>
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/richard-craddock-" className={`${isDark ? 'dark:text-gray-400 dark:hover:text-gray-300' : 'text-gray-400 hover:text-gray-500'}`}>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:craddock9richard@gmail.com" className={`${isDark ? 'dark:text-gray-400 dark:hover:text-gray-300' : 'text-gray-400 hover:text-gray-500'}`}>
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <div className={`mt-8 text-center ${isDark ? 'dark:text-gray-400' : 'text-gray-400'}`}>
              <p>&copy; {new Date().getFullYear()} Richard Craddock. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

function AppContent() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </Router>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;