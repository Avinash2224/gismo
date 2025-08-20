import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { 
  Video, 
  Store, 
  Share2, 
  Gift, 
  Palette, 
  Megaphone, 
  Bookmark, 
  CreditCard 
} from 'lucide-react';

const ToolsGrid: React.FC = () => {
  const { isDark } = useTheme();

  const tools = [
    {
      title: 'Live Streaming',
      subtitle: 'Go live with your audience',
      icon: Video,
      color: 'text-red-500',
      bgColor: 'bg-red-50',
      hoverColor: 'hover:bg-red-100'
    },
    {
      title: 'Creator Store',
      subtitle: 'Sell your merchandise',
      icon: Store,
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100'
    },
    {
      title: 'Social Sharing',
      subtitle: 'Cross-platform promotion',
      icon: Share2,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100'
    },
    {
      title: 'Gifting System',
      subtitle: 'Receive virtual gifts',
      icon: Gift,
      color: 'text-pink-500',
      bgColor: 'bg-pink-50',
      hoverColor: 'hover:bg-pink-100'
    },
    {
      title: 'Brand Studio',
      subtitle: 'Customize your channel',
      icon: Palette,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
      hoverColor: 'hover:bg-purple-100'
    },
    {
      title: 'Advertising',
      subtitle: 'Promote your content',
      icon: Megaphone,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
      hoverColor: 'hover:bg-orange-100'
    },
    {
      title: 'Content Planner',
      subtitle: 'Schedule your posts',
      icon: Bookmark,
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-50',
      hoverColor: 'hover:bg-indigo-100'
    },
    {
      title: 'Revenue Analytics',
      subtitle: 'Track your earnings',
      icon: CreditCard,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-50',
      hoverColor: 'hover:bg-emerald-100'
    }
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className={`text-xl font-bold transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-gray-800'
        }`}>Creator Tools</h3>
        <button className="text-red-500 font-medium hover:text-red-600 transition-colors">
          More
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tools.map((tool, index) => {
          const Icon = tool.icon;
          return (
            <div
              key={index}
              className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer group hover:shadow-lg ${
                isDark 
                  ? 'bg-gray-800 hover:bg-gray-700' 
                  : `${tool.bgColor} ${tool.hoverColor}`
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Icon className={`w-8 h-8 ${tool.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className={`font-semibold mb-1 transition-colors duration-300 ${
                    isDark 
                      ? 'text-white group-hover:text-gray-100' 
                      : 'text-gray-800 group-hover:text-gray-900'
                  }`}>
                    {tool.title}
                  </h4>
                  <p className={`text-sm transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>{tool.subtitle}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ToolsGrid;