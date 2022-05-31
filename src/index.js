import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="flex justify-center items-center h-screen">
      <Header />
      <App />
      <Footer />
    </div>
  </React.StrictMode>
);