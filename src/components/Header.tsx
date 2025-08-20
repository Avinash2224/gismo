import React from 'react';
import { Bell, HelpCircle, User, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className={`shadow-sm border-b px-6 py-4 transition-colors duration-300 ${
      isDark 
        ? 'bg-gray-800 border-gray-700' 
        : 'bg-white border-gray-200'
    }`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className={`text-xl font-semibold transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>Alex's Channel</h2>
          <span className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
            isDark 
              ? 'bg-purple-900 text-purple-300' 
              : 'bg-purple-100 text-purple-700'
          }`}>
            Creator
          </span>
        </div>
        
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors duration-300 ${
              isDark 
                ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-700' 
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
            }`}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button className={`p-2 rounded-lg transition-colors duration-300 ${
            isDark 
              ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-700' 
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
          }`}>
            <Bell className="w-5 h-5" />
          </button>
          <button className={`p-2 rounded-lg transition-colors duration-300 ${
            isDark 
              ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-700' 
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
          }`}>
            <HelpCircle className="w-5 h-5" />
          </button>
          <div className={`flex items-center space-x-2 rounded-lg px-3 py-2 transition-colors duration-300 ${
            isDark ? 'bg-gray-700' : 'bg-gray-100'
          }`}>
            <User className={`w-5 h-5 ${isDark ? 'text-gray-300' : 'text-gray-600'}`} />
            <span className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>Alex</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;