import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{
      width:'100%',
      height:'100vh',
      display:'inline-block',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'rgba(250, 170, 170, 0.815)'
    }}>
    <App />
  </div>
  </React.StrictMode>
);


