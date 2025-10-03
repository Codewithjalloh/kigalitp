'use client';

export default function MetricsOverview() {
  const metrics = [
    {
      title: 'Live Listeners',
      value: '2,847',
      change: '+12%',
      changeType: 'positive',
      icon: '👥'
    },
    {
      title: 'Total Shows',
      value: '24',
      change: '+2',
      changeType: 'positive',
      icon: '📻'
    },
    {
      title: 'Monthly Revenue',
      value: '$12,450',
      change: '+8%',
      changeType: 'positive',
      icon: '💰'
    },
    {
      title: 'Social Engagement',
      value: '89%',
      change: '+5%',
      changeType: 'positive',
      icon: '📱'
    }
  ];

  const recentShows = [
    { name: 'Morning Show with Sarah', time: '6:00 AM - 10:00 AM', listeners: '1,234' },
    { name: 'News Update', time: '12:00 PM - 12:30 PM', listeners: '2,156' },
    { name: 'Afternoon Drive', time: '3:00 PM - 7:00 PM', listeners: '1,890' },
    { name: 'Evening Talk', time: '8:00 PM - 10:00 PM', listeners: '1,456' },
  ];

  return (
    <div className="space-y-6">
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                <p className={`text-sm ${metric.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                  {metric.change} from last month
                </p>
              </div>
              <div className="text-3xl">{metric.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Listener Trends Chart Placeholder */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Listener Trends</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">📈</div>
              <p className="text-gray-500">Chart will be implemented here</p>
            </div>
          </div>
        </div>

        {/* Recent Shows */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Schedule</h3>
          <div className="space-y-4">
            {recentShows.map((show, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{show.name}</p>
                  <p className="text-sm text-gray-500">{show.time}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-blue-600">{show.listeners} listeners</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <span className="text-2xl">➕</span>
            <span className="font-medium">Add New Show</span>
          </button>
          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <span className="text-2xl">📊</span>
            <span className="font-medium">Generate Report</span>
          </button>
          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <span className="text-2xl">📢</span>
            <span className="font-medium">Send Announcement</span>
          </button>
        </div>
      </div>
    </div>
  );
}
