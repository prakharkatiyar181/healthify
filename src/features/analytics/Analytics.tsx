import React from 'react';
import styles from './Analytics.module.scss';
import { FaChartLine, FaChartPie } from 'react-icons/fa';

const Analytics: React.FC = () => {
  return (
    <div className={styles.analytics}>
      <div className={styles.header}>
        <h2>Analytics Overview</h2>
        <p>Monthly performance metrics</p>
      </div>

      <div className={styles.chartsGrid}>
        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <FaChartLine color="#007bff" />
            <h3>Patient Admissions</h3>
          </div>
          <div className={styles.mockChartArea}>
            <div className={styles.barContainer}>
              <div className={styles.bar} style={{ height: '40%' }}></div>
              <div className={styles.bar} style={{ height: '60%' }}></div>
              <div className={styles.bar} style={{ height: '30%' }}></div>
              <div className={styles.bar} style={{ height: '80%' }}></div>
              <div className={styles.bar} style={{ height: '50%' }}></div>
              <div className={styles.bar} style={{ height: '90%' }}></div>
            </div>
            <div className={styles.chartLabels}>
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
            </div>
          </div>
        </div>

        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <FaChartPie color="#28a745" />
            <h3>Department Workload</h3>
          </div>
          <div className={styles.mockChartArea}>
             <div className={styles.pieChart}></div>
             <div className={styles.legend}>
               <div className={styles.legendItem}><span className={styles.dot} style={{backgroundColor: '#007bff'}}></span> Cardiology</div>
               <div className={styles.legendItem}><span className={styles.dot} style={{backgroundColor: '#28a745'}}></span> Neurology</div>
               <div className={styles.legendItem}><span className={styles.dot} style={{backgroundColor: '#ffc107'}}></span> Pediatrics</div>
               <div className={styles.legendItem}><span className={styles.dot} style={{backgroundColor: '#dc3545'}}></span> Emergency</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
