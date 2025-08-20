import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { 
  Home, 
  BarChart3, 
  Video, 
  Users, 
  ShoppingBag, 
  Database, 
  Briefcase, 
  Grid3X3, 
  Settings 
} from 'lucide-react';

interface SidebarProps {
  activeItem: string;
  setActiveItem: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem, setActiveItem }) => {
  const { isDark } = useTheme();

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'content', label: 'Content', icon: Video },
    { id: 'audience', label: 'Audience', icon: Users },
    { id: 'monetization', label: 'Monetization', icon: ShoppingBag },
    { id: 'data', label: 'Data', icon: Database },
    { id: 'campaigns', label: 'Campaigns', icon: Briefcase },
    { id: 'tools', label: 'Tools', icon: Grid3X3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className={`w-64 shadow-lg min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Video className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className={`text-lg font-bold transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-800'
            }`}>CreatorHub</h1>
            <p className={`text-xs transition-colors duration-300 ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`}>Content Creator</p>
          </div>
        </div>
      </div>
      
      <nav className="px-4 pb-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-lg transition-all duration-200 mb-1 ${
                isActive 
                  ? 'bg-red-50 text-red-600 border-r-2 border-red-500' 
                  : isDark
                    ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-red-500' : 'text-gray-500'}`} />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;