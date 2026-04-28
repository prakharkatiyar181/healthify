import React from 'react';
import styles from './Dashboard.module.scss';
import { FaUsers, FaBed, FaUserMd, FaAmbulance } from 'react-icons/fa';

const Dashboard: React.FC = () => {
  const stats = [
    { title: 'Total Patients', value: '1,245', icon: <FaUsers />, color: 'primary' },
    { title: 'Available Beds', value: '342', icon: <FaBed />, color: 'success' },
    { title: 'Active Doctors', value: '86', icon: <FaUserMd />, color: 'info' },
    { title: 'Emergency', value: '12', icon: <FaAmbulance />, color: 'danger' },
  ];

  return (
    <div className={styles.dashboard}>
      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <div key={index} className={`${styles.statCard} ${styles[stat.color]}`}>
            <div className={styles.statIcon}>{stat.icon}</div>
            <div className={styles.statInfo}>
              <h3>{stat.title}</h3>
              <p>{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.dashboardContent}>
        <div className={styles.recentActivity}>
          <h2>Recent Activity</h2>
          <div className={styles.activityList}>
            <div className={styles.activityItem}>
              <div className={styles.activityDot}></div>
              <div className={styles.activityText}>
                <p><strong>Dr. Smith</strong> admitted a new patient.</p>
                <span>10 mins ago</span>
              </div>
            </div>
            <div className={styles.activityItem}>
              <div className={styles.activityDot}></div>
              <div className={styles.activityText}>
                <p><strong>Emergency Room</strong> capacity at 90%.</p>
                <span>1 hour ago</span>
              </div>
            </div>
            <div className={styles.activityItem}>
              <div className={styles.activityDot}></div>
              <div className={styles.activityText}>
                <p><strong>Lab Results</strong> for Patient ID 1024 are ready.</p>
                <span>3 hours ago</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.upcomingAppointments}>
          <h2>Upcoming Appointments</h2>
          <table className={styles.appointmentTable}>
            <thead>
              <tr>
                <th>Time</th>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>09:00 AM</td>
                <td>John Doe</td>
                <td>Dr. Adams</td>
                <td><span className={styles.statusConfirmed}>Confirmed</span></td>
              </tr>
              <tr>
                <td>10:30 AM</td>
                <td>Jane Smith</td>
                <td>Dr. Wilson</td>
                <td><span className={styles.statusPending}>Pending</span></td>
              </tr>
              <tr>
                <td>11:15 AM</td>
                <td>Michael Brown</td>
                <td>Dr. Adams</td>
                <td><span className={styles.statusConfirmed}>Confirmed</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
