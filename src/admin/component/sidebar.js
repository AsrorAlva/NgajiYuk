import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // Import file CSS untuk sidebar

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul className="menu">

        <li>
          <Link to="/admin">Admin</Link>
        </li>
        <li>
          <Link to="/User">User</Link>
        </li>
        <li>
          <Link to="/ustadz">Ustadz</Link>
        </li>
        <li>
          <Link to="/materividio">Materi Video</Link>
        </li>
        <li>
          <Link to="/materipenjelasan">Materi Penjelasan</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
