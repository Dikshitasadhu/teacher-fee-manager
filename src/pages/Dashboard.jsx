import StatsCard from '../components/StatsCard';
import RevenueChart from '../components/RevenueChart';
import UpcomingAlerts from '../components/UpcomingAlerts';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatsCard title="Total Students" value="120" type="students" />
        <StatsCard title="Total Revenue" value="₹1,25,000" type="revenue" />
        <StatsCard title="Pending Payments" value="₹15,000" type="pending" />
        <StatsCard title="May Revenue" value="₹25,000" type="month" />
      </div>
      <RevenueChart />
      <UpcomingAlerts />
    </div>
  );
}
