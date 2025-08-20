import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { BarChart } from 'lucide-react';

const RevenueChart: React.FC = () => {
  const { isDark } = useTheme();

  const monthlyData = [
    { month: 'Jan', revenue: 8500, views: 180000 },
    { month: 'Feb', revenue: 9200, views: 195000 },
    { month: 'Mar', revenue: 11300, views: 210000 },
    { month: 'Apr', revenue: 10800, views: 205000 },
    { month: 'May', revenue: 12847, views: 235000 },
    { month: 'Jun', revenue: 14200, views: 250000 },
  ];

  const maxRevenue = Math.max(...monthlyData.map(d => d.revenue));
  const maxViews = Math.max(...monthlyData.map(d => d.views));

  return (
    <div className={`p-6 rounded-2xl shadow-sm border mb-8 transition-colors duration-300 ${
      isDark 
        ? 'bg-gray-800 border-gray-700' 
        : 'bg-white border-gray-100'
    }`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
            <BarChart className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className={`text-lg font-bold transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-800'
            }`}>Revenue & Views Trends</h3>
            <p className={`text-sm transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>Last 6 months performance</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {monthlyData.map((data, index) => (
          <div key={data.month} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className={`font-medium transition-colors duration-300 ${
                isDark ? 'text-gray-200' : 'text-gray-700'
              }`}>{data.month}</span>
              <div className="flex space-x-4">
                <span className="text-blue-600 font-medium">${data.revenue.toLocaleString()}</span>
                <span className="text-purple-600 font-medium">{(data.views / 1000).toFixed(0)}K views</span>
              </div>
            </div>
            
            <div className="space-y-1">
              {/* Revenue Bar */}
              <div className="relative">
                <div className={`w-full rounded-full h-2 transition-colors duration-300 ${
                  isDark ? 'bg-blue-900' : 'bg-blue-100'
                }`}>
                  <div
                    className="bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${(data.revenue / maxRevenue) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              {/* Views Bar */}
              <div className="relative">
                <div className={`w-full rounded-full h-2 transition-colors duration-300 ${
                  isDark ? 'bg-purple-900' : 'bg-purple-100'
                }`}>
                  <div
                    className="bg-gradient-to-r from-purple-400 to-purple-500 h-2 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${(data.views / maxViews) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={`flex items-center justify-center space-x-6 mt-6 pt-4 border-t transition-colors duration-300 ${
        isDark ? 'border-gray-700' : 'border-gray-100'
      }`}>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"></div>
          <span className={`text-sm transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>Revenue</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full"></div>
          <span className={`text-sm transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>Views</span>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;