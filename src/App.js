import React from 'react';
import Dashboard from './components/Dashboard';
import "@ravenpay/raven-bank-ui/dist/esm/styles/index.css";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Balance from './components/Balance';
import Transaction from './components/Transaction'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/balance" element={<Balance />} />
          <Route path="/transaction" element={<Transaction/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
