import React from 'react';
import Dashboard from './components/Dashboard';
import "@ravenpay/raven-bank-ui/dist/esm/styles/index.css";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Balance from './components/Balance';
import Transaction from './components/Transaction'
import Bill from './components/Bill';
import CardDetails from './components/CardDetails'
import Payment from './components/Payment';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/balance" element={<Balance />} />
          <Route path="/transaction" element={<Transaction/>} />
          <Route path="/bill" element={<Bill/>} />
          <Route path="/card" element={<CardDetails/>}/>
          <Route path="/payment" element={<Payment/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
