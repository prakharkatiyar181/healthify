import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { PatientState, Patient } from '../../types';

const mockPatients: Patient[] = [
  { id: '1', name: 'John Doe', age: 45, gender: 'Male', condition: 'Hypertension', status: 'Stable', lastVisit: '2023-10-01' },
  { id: '2', name: 'Jane Smith', age: 34, gender: 'Female', condition: 'Diabetes Type 2', status: 'Critical', lastVisit: '2023-10-15' },
  { id: '3', name: 'Sam Wilson', age: 50, gender: 'Male', condition: 'Post-Surgery', status: 'Recovering', lastVisit: '2023-10-20' },
  { id: '4', name: 'Emily Davis', age: 28, gender: 'Female', condition: 'Asthma', status: 'Stable', lastVisit: '2023-09-25' },
  { id: '5', name: 'Michael Brown', age: 60, gender: 'Male', condition: 'Heart Disease', status: 'Critical', lastVisit: '2023-10-25' },
  { id: '6', name: 'Sarah Miller', age: 41, gender: 'Female', condition: 'Arthritis', status: 'Recovering', lastVisit: '2023-10-10' },
];

const initialState: PatientState = {
  patients: [],
  loading: false,
  error: null,
};

const patientSlice = createSlice({
  name: 'patients',
  initialState,
  reducers: {
    fetchPatientsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchPatientsSuccess: (state, action: PayloadAction<Patient[]>) => {
      state.patients = action.payload;
      state.loading = false;
    },
    fetchPatientsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    loadMockData: (state) => {
      state.patients = mockPatients;
      state.loading = false;
      state.error = null;
    }
  },
});

export const { fetchPatientsStart, fetchPatientsSuccess, fetchPatientsFailure, loadMockData } = patientSlice.actions;
export default patientSlice.reducer;
