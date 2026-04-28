import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../services/firebase';
import styles from './Layout.module.scss';
import { FaHeartbeat, FaChartBar, FaUsers, FaHome, FaSignOutAlt } from 'react-icons/fa';

const Layout: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          <FaHeartbeat size={32} color="#007bff" />
          <h2>Healthify</h2>
        </div>
        <nav className={styles.nav}>
          <NavLink to="/" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink} end>
            <FaHome /> Dashboard
          </NavLink>
          <NavLink to="/patients" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
            <FaUsers /> Patients
          </NavLink>
          <NavLink to="/analytics" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
            <FaChartBar /> Analytics
          </NavLink>
        </nav>
        <div className={styles.logoutContainer}>
          <button onClick={handleLogout} className={styles.logoutButton}>
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </aside>
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <div className={styles.headerInfo}>
            <h1>Welcome back!</h1>
            <p>Here's what's happening today.</p>
          </div>
          <div className={styles.userProfile}>
            <div className={styles.avatar}>A</div>
            <span>Admin</span>
          </div>
        </header>
        <div className={styles.content}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
