import React from 'react';
import Header from "./Components/Layout/Header/Header";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
      </Router>
    </div>
  )
}

export default App;