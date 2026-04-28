import React from 'react';
import type { Patient } from '../../types';
import styles from './Patients.module.scss';

interface Props {
  patients: Patient[];
}

const PatientGrid: React.FC<Props> = ({ patients }) => {
  return (
    <div className={styles.patientGrid}>
      {patients.map((patient) => (
        <div key={patient.id} className={`${styles.patientCard} ${styles['status-' + patient.status]}`}>
          <div className={styles.cardHeader}>
            <h3>{patient.name}</h3>
            <span className={`${styles.statusBadge} ${styles['status-' + patient.status]}`}>
              {patient.status}
            </span>
          </div>
          <div className={styles.cardBody}>
            <p><span>Age:</span> {patient.age}</p>
            <p><span>Gender:</span> {patient.gender}</p>
            <p><span>Condition:</span> {patient.condition}</p>
            <p><span>Last Visit:</span> {patient.lastVisit}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PatientGrid;
