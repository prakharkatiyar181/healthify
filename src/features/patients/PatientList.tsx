import React from 'react';
import type { Patient } from '../../types';
import styles from './Patients.module.scss';

interface Props {
  patients: Patient[];
}

const PatientList: React.FC<Props> = ({ patients }) => {
  return (
    <div className={styles.patientListContainer}>
      <table className={styles.patientList}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Condition</th>
            <th>Status</th>
            <th>Last Visit</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td><strong>{patient.name}</strong></td>
              <td>{patient.age}</td>
              <td>{patient.gender}</td>
              <td>{patient.condition}</td>
              <td>
                <span className={`${styles.statusBadge} ${styles['status-' + patient.status]}`}>
                  {patient.status}
                </span>
              </td>
              <td>{patient.lastVisit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientList;
