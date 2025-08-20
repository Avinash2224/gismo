import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { PieChart } from 'lucide-react';

const AudienceChart: React.FC = () => {
  const { isDark } = useTheme();

  const audienceData = [
    { category: '18-24', percentage: 28, color: 'bg-gradient-to-r from-pink-400 to-pink-500', textColor: 'text-pink-600' },
    { category: '25-34', percentage: 35, color: 'bg-gradient-to-r from-blue-400 to-blue-500', textColor: 'text-blue-600' },
    { category: '35-44', percentage: 22, color: 'bg-gradient-to-r from-purple-400 to-purple-500', textColor: 'text-purple-600' },
    { category: '45+', percentage: 15, color: 'bg-gradient-to-r from-green-400 to-green-500', textColor: 'text-green-600' }
  ];

  const deviceData = [
    { device: 'Mobile', percentage: 65, color: 'from-red-400 to-red-500' },
    { device: 'Desktop', percentage: 25, color: 'from-orange-400 to-orange-500' },
    { device: 'Tablet', percentage: 10, color: 'from-yellow-400 to-yellow-500' }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* Age Demographics */}
      <div className={`p-6 rounded-2xl shadow-sm border transition-colors duration-300 ${
        isDark 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-white border-gray-100'
      }`}>
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
            <PieChart className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className={`text-lg font-bold transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-800'
            }`}>Audience by Age</h3>
            <p className={`text-sm transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>Demographics breakdown</p>
          </div>
        </div>

        <div className="space-y-4">
          {audienceData.map((data, index) => (
            <div key={data.category} className="flex items-center space-x-4">
              <div className={`w-16 text-sm font-medium transition-colors duration-300 ${
                isDark ? 'text-gray-200' : 'text-gray-700'
              }`}>{data.category}</div>
              <div className="flex-1">
                <div className={`w-full rounded-full h-3 transition-colors duration-300 ${
                  isDark ? 'bg-gray-700' : 'bg-gray-100'
                }`}>
                  <div
                    className={`${data.color} h-3 rounded-full transition-all duration-700 ease-out`}
                    style={{ 
                      width: `${data.percentage}%`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  ></div>
                </div>
              </div>
              <div className={`text-sm font-bold ${data.textColor} w-12 text-right`}>
                {data.percentage}%
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Device Usage */}
      <div className={`p-6 rounded-2xl shadow-sm border transition-colors duration-300 ${
        isDark 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-white border-gray-100'
      }`}>
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
            <PieChart className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className={`text-lg font-bold transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-800'
            }`}>Device Usage</h3>
            <p className={`text-sm transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>How viewers watch</p>
          </div>
        </div>

        <div className="space-y-6">
          {deviceData.map((data, index) => (
            <div key={data.device} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className={`text-sm font-medium transition-colors duration-300 ${
                  isDark ? 'text-gray-200' : 'text-gray-700'
                }`}>{data.device}</span>
                <span className={`text-sm font-bold transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-800'
                }`}>{data.percentage}%</span>
              </div>
              <div className={`w-full rounded-full h-2 transition-colors duration-300 ${
                isDark ? 'bg-gray-700' : 'bg-gray-100'
              }`}>
                <div
                  className={`bg-gradient-to-r ${data.color} h-2 rounded-full transition-all duration-700 ease-out`}
                  style={{ 
                    width: `${data.percentage}%`,
                    animationDelay: `${index * 0.2}s`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-6 p-4 rounded-lg transition-colors duration-300 ${
          isDark 
            ? 'bg-gradient-to-r from-orange-900 to-red-900' 
            : 'bg-gradient-to-r from-orange-50 to-red-50'
        }`}>
          <p className={`text-sm transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            <span className="font-medium text-orange-600">Mobile-first:</span> 65% of your audience watches on mobile devices
          </p>
        </div>
      </div>
    </div>
  );
};

export default AudienceChart;