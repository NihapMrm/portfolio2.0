import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; 
import './index.css';
import AppsModel from './components/models/AppsModel';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <AppsModel/>
  </StrictMode>
);
