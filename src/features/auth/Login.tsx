import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setError } from './authSlice';
import styles from './Login.module.scss';
import { FaHeartbeat } from 'react-icons/fa';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useAppDispatch();
  const error = useAppSelector((state) => state.auth.error);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err: any) {
      dispatch(setError(err.message || 'Failed to login'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const fillTestCredentials = () => {
    setEmail('test@healthify.com');
    setPassword('password123');
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.logo}>
          <FaHeartbeat size={48} color="#007bff" />
          <h1>Healthify</h1>
        </div>
        <p className={styles.subtitle}>Sign in to your dashboard</p>
        
        {error && <div className={styles.errorMessage}>{error}</div>}
        
        <form onSubmit={handleLogin} className={styles.loginForm}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="test@healthify.com"
              required 
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required 
            />
          </div>
          <button type="submit" className={styles.loginButton} disabled={isSubmitting}>
            {isSubmitting ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        <div className={styles.hint}>
          <p style={{ marginBottom: '10px' }}><strong>Assignment Testing</strong></p>
          <button type="button" onClick={fillTestCredentials} className={styles.testCredentialsBtn}>
            Fill Test Credentials
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
