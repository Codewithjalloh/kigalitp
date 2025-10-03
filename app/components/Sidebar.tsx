'use client';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'content', label: 'Content Management', icon: '📻' },
    { id: 'analytics', label: 'Analytics', icon: '📈' },
    { id: 'listeners', label: 'Listeners', icon: '👥' },
    { id: 'revenue', label: 'Revenue', icon: '💰' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">KT</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Kigali Today</h1>
            <p className="text-sm text-gray-500">Radio Portal</p>
          </div>
        </div>
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center space-x-3 px-6 py-3 text-left hover:bg-gray-50 transition-colors ${
              activeTab === item.id
                ? 'bg-blue-50 border-r-4 border-blue-600 text-blue-600'
                : 'text-gray-700'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
