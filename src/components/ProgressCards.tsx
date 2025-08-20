import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Check, Upload, DollarSign } from 'lucide-react';

const ProgressCards: React.FC = () => {
  const { isDark } = useTheme();

  const steps = [
    {
      id: 1,
      title: '1. Channel Setup',
      subtitle: 'Complete profile information',
      icon: Check,
      color: 'bg-gradient-to-r from-pink-400 to-pink-500',
      textColor: 'text-pink-600',
      bgColor: 'bg-pink-50',
      completed: true
    },
    {
      id: 2,
      title: '2. Upload Content',
      subtitle: 'Publish your first video',
      icon: Upload,
      color: 'bg-gradient-to-r from-blue-400 to-blue-500',
      textColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
      completed: false
    },
    {
      id: 3,
      title: '3. Monetize',
      subtitle: 'Enable revenue streams',
      icon: DollarSign,
      color: 'bg-gradient-to-r from-purple-400 to-purple-500',
      textColor: 'text-purple-600',
      bgColor: 'bg-purple-50',
      completed: false
    }
  ];

  return (
    <div className="mb-8">
      <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
        isDark ? 'text-white' : 'text-gray-800'
      }`}>Your creator journey begins here</h3>
      <p className={`mb-6 transition-colors duration-300 ${
        isDark ? 'text-gray-300' : 'text-gray-600'
      }`}>Complete the following steps to maximize your reach</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.id}
              className={`p-6 rounded-2xl border border-opacity-20 hover:shadow-lg transition-all duration-300 cursor-pointer group ${
                isDark 
                  ? 'bg-gray-800 border-gray-600' 
                  : `${step.bgColor} border-gray-200`
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <button className={`px-4 py-2 ${step.completed ? 'bg-green-100 text-green-700' : step.color} text-white rounded-lg text-sm font-medium hover:shadow-md transition-all duration-200`}>
                  {step.completed ? 'Done' : 'Go'}
                </button>
              </div>
              <h4 className={`font-bold text-lg mb-1 transition-colors duration-300 ${
                isDark ? 'text-white' : step.textColor
              }`}>{step.title}</h4>
              <p className={`text-sm transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>{step.subtitle}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressCards;