import logo from './logo.svg';
import './App.css';
import SignupAndLogin from './Components/SignupAndLogin/SignupAndLogin';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import SignupAndLogin from './SignupAndLogin';
import Dashboard from './Components/SignupAndLogin/Dashboard';
import './index.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<SignupAndLogin />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


/*
function App() {
  return (
    <div>
      <SignupAndLogin />
    </div>
  );
}
*/

export default App;

