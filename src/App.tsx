import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Menu, Moon, Sun, X } from 'lucide-react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Login from './pages/Login';

function AppContent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <Router>
      <div className={`min-h-screen ${isDark ? 'dark:bg-gray-900' : 'bg-gray-50'} transition-colors duration-200`}>
        <nav className={`${isDark ? 'dark:bg-gray-800' : 'bg-white'} shadow-sm transition-colors duration-200`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className={`text-xl font-bold ${isDark ? 'dark:text-white' : 'text-gray-900'}`}>
                  richardcraddock <span className="font-bold text-custom-blue">dot</span> me
                </Link>
              </div>

              <div className="hidden sm:flex sm:items-center sm:space-x-8">
                <Link to="/" className={`${isDark ? 'dark:text-gray-300 dark:hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Home</Link>
                <Link to="/resume" className={`${isDark ? 'dark:text-gray-300 dark:hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Resume</Link>
                <Link to="/projects" className={`${isDark ? 'dark:text-gray-300 dark:hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Projects</Link>
                <Link to="/contact" className={`${isDark ? 'dark:text-gray-300 dark:hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Contact</Link>
                <Link to="/Login" className={`${isDark ? 'dark:text-gray-300 dark:hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Login</Link>
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-lg ${isDark ? 'dark:text-gray-300 dark:hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>

              <div className="sm:hidden flex items-center space-x-4">
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-lg ${isDark ? 'dark:text-gray-300 dark:hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`${isDark ? 'dark:text-gray-300 dark:hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {isMenuOpen && (
            <div className="sm:hidden">
              <div className={`pt-2 pb-3 space-y-1 ${isDark ? 'dark:bg-gray-800' : 'bg-white'}`}>
                <Link
                  to="/"
                  className={`block px-3 py-2 text-base font-medium ${isDark ? 'dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/resume"
                  className={`block px-3 py-2 text-base font-medium ${isDark ? 'dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Resume
                </Link>
                <Link
                  to="/projects"
                  className={`block px-3 py-2 text-base font-medium ${isDark ? 'dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  to="/contact"
                  className={`block px-3 py-2 text-base font-medium ${isDark ? 'dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  to="/Login"
                  className={`block px-3 py-2 text-base font-medium ${isDark ? 'dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              </div>
            </div>
          )}
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </main>

        <footer className={`${isDark ? 'dark:bg-gray-800' : 'bg-white'} transition-colors duration-200`}>
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
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