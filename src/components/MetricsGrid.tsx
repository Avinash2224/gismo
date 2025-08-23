import React from 'react';
import clsx from 'clsx';
import { useTheme } from '../contexts/ThemeContext';
import { TrendingUp, Users, Eye, Heart, Play, MessageSquare, Share, DollarSign } from 'lucide-react';

const MetricsGrid: React.FC = () => {
  const { isDark } = useTheme();

  const mainMetrics = [
    {
      title: 'Total Revenue',
      value: '$12,847',
      change: '+18.2%',
      icon: DollarSign,
      color: 'bg-gradient-to-r from-pink-400 to-pink-500',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-600'
    },
    {
      title: 'Video Views',
      value: '2,847,293',
      change: '+12.5%',
      icon: Play,
      color: 'bg-gradient-to-r from-blue-400 to-blue-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      title: 'Subscribers',
      value: '45,687',
      change: '+8.3%',
      icon: Users,
      color: 'bg-gradient-to-r from-purple-400 to-purple-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      title: 'Engagement Rate',
      value: '7.2%',
      change: '+2.1%',
      icon: Heart,
      color: 'bg-gradient-to-r from-green-400 to-green-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    }
  ];

  const additionalMetrics = [
    {
      title: 'Watch Time (Hours)',
      value: '186,492',
      change: 'Yesterday 178,234',
      icon: Eye,
      bgColor: 'bg-gray-50'
    },
    {
      title: 'New Subscribers',
      value: '1,247',
      change: 'Yesterday 1,103',
      icon: TrendingUp,
      bgColor: 'bg-gray-50'
    },
    {
      title: 'Total Comments',
      value: '28,392',
      change: 'Yesterday 26,847',
      icon: MessageSquare,
      bgColor: 'bg-gray-50'
    },
    {
      title: 'Shares',
      value: '4,729',
      change: 'Yesterday 4,501',
      icon: Share,
      bgColor: 'bg-gray-50'
    }
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className={`text-xl font-bold transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-gray-800'
        }`}>Today's Analytics</h3>
        <button className="text-red-500 font-medium hover:text-red-600 transition-colors">
          More
        </button>
      </div>
      
      {/* Main Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {mainMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div
              key={index}
              className={`p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group cursor-pointer ${
                isDark ? 'bg-gray-800' : metric.bgColor
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${metric.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="space-y-1">
                <h4 className={`text-sm font-medium transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>{metric.title}</h4>
                <p className={`text-2xl font-bold transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-800'
                }`}>{metric.value}</p>
                <p className="text-sm text-green-600 font-medium">{metric.change}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {additionalMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div
              key={index}
              className={`p-6 rounded-2xl hover:shadow-lg transition-all duration-300 cursor-pointer ${
                isDark ? 'bg-gray-800' : metric.bgColor
              }`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <Icon className={`w-5 h-5 transition-colors duration-300 ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`} />
                <h4 className={`text-sm font-medium transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>{metric.title}</h4>
              </div>
              <p className={`text-2xl font-bold mb-1 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>{metric.value}</p>
              <p className={`text-xs transition-colors duration-300 ${
                isDark ? 'text-gray-400' : 'text-gray-500'
              }`}>{metric.change}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MetricsGrid;