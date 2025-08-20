import React, { useState } from 'react';
import { useTheme } from './contexts/ThemeContext';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ProgressCards from './components/ProgressCards';
import MetricsGrid from './components/MetricsGrid';
import RevenueChart from './components/RevenueChart';
import AudienceChart from './components/AudienceChart';
import ToolsGrid from './components/ToolsGrid';

function App() {
  const [activeItem, setActiveItem] = useState('home');
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200'
    }`}>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
        
        {/* Main Content */}
        <div className="flex-1 min-h-screen">
          <Header />
          
          <main className="p-6 max-w-7xl mx-auto">
            {/* Progress Cards */}
            <ProgressCards />
            
            {/* Metrics Grid */}
            <MetricsGrid />
            
            {/* Charts Section */}
            <RevenueChart />
            <AudienceChart />
            
            {/* Tools Grid */}
            <ToolsGrid />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;