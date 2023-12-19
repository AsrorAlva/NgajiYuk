import React from 'react';
import Sidebar from '../component/sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './admin.css';

const StatsSection = () => {
  return (
    <div className="stats-section">
      <h3>Statistics</h3>
      <p>Total users: 100</p>
      <p>Total videos: 50</p>
      {/* Tambahkan grafik atau informasi statistik lainnya */}
    </div>
  );
};

const Notifications = () => {
  return (
    <div className="notifications">
      <h3>Notifications</h3>
      <ul>
        <li>New user registered</li>
        <li>Video uploaded</li>
        {/* Tambahkan daftar notifikasi atau pesan */}
      </ul>
    </div>
  );
};

const RecentActivity = () => {
  return (
    <div className="recent-activity">
      <h3>Recent Activity</h3>
      <ul>
        <li>User A liked Video B</li>
        <li>User C uploaded new video</li>
        {/* Tambahkan daftar aktivitas terkini */}
      </ul>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="admin-page">
      <Sidebar />
      <div className="admin-content">
        <h2>Dashboard</h2>
        <div className="dashboard-components">
          <StatsSection />
          <Notifications />
          <RecentActivity />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
