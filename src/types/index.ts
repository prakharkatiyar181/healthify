export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
}

export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  condition: string;
  status: 'Critical' | 'Stable' | 'Recovering';
  lastVisit: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export interface PatientState {
  patients: Patient[];
  loading: boolean;
  error: string | null;
}
