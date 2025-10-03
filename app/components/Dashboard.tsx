'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import MetricsOverview from './MetricsOverview';
import ContentManagement from './ContentManagement';
import Analytics from './Analytics';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <MetricsOverview />;
      case 'content':
        return <ContentManagement />;
      case 'analytics':
        return <Analytics />;
      default:
        return <MetricsOverview />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
