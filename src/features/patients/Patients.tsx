import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { loadMockData } from './patientSlice';
import PatientGrid from './PatientGrid';
import PatientList from './PatientList';
import styles from './Patients.module.scss';
import { FaThLarge, FaList } from 'react-icons/fa';

const Patients: React.FC = () => {
  const dispatch = useAppDispatch();
  const { patients, loading } = useAppSelector((state) => state.patients);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    dispatch(loadMockData());
  }, [dispatch]);

  const notifyUser = () => {
    if ('serviceWorker' in navigator && 'Notification' in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          navigator.serviceWorker.ready.then((registration) => {
            registration.showNotification('New Patient Assigned', {
              body: 'A new critical patient has been assigned to you.',
              icon: '/favicon.ico',
            });
          });
        }
      });
    }
  };

  return (
    <div className={styles.patientsContainer}>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <h2>Patient Management</h2>
          <p>View and manage your assigned patients.</p>
        </div>
        <div className={styles.actions}>
          <button onClick={notifyUser} className={styles.testNotificationBtn}>
            Test Notification
          </button>
          <div className={styles.toggleGroup}>
            <button 
              className={`${styles.toggleBtn} ${viewMode === 'grid' ? styles.active : ''}`}
              onClick={() => setViewMode('grid')}
            >
              <FaThLarge /> Grid
            </button>
            <button 
              className={`${styles.toggleBtn} ${viewMode === 'list' ? styles.active : ''}`}
              onClick={() => setViewMode('list')}
            >
              <FaList /> List
            </button>
          </div>
        </div>
      </div>

      {loading ? (
        <div className={styles.loading}>Loading patients...</div>
      ) : viewMode === 'grid' ? (
        <PatientGrid patients={patients} />
      ) : (
        <PatientList patients={patients} />
      )}
    </div>
  );
};

export default Patients;
