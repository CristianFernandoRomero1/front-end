import React from 'react';

import './App.css';
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Login</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>

      </header>
    </div>
  );
}

export default App;
