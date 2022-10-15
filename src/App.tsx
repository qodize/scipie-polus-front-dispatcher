import React from 'react';
import{Route, Routes} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <>
        {/*<Navigation/>*/}
        <Routes>
          {/*<Route path="/" element={<TransportPage/>}/>*/}
          {/*<Route path="/orders" element={<Orders/>}/>*/}
        </Routes>
      </>
    </div>
  );
}

export default App;
