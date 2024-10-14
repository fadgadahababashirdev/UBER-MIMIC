import { configureStore } from '@reduxjs/toolkit';
import  navSlice  from './Features/navSlice';

 export const store = configureStore({
  reducer: { 
    nav:navSlice
  },
});

