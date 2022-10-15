import React from 'react';
import{Route, Routes} from "react-router-dom";
import {AuthPage} from "./pages/AuthPage"
import {OrdersPage} from "./pages/OrdersPage"


import './App.css';

function setPhone(phone: string){
    localStorage.setItem("phone", phone);
}

function getPhone() {
    return localStorage.getItem("phone");
}

function App() {
    const currentPhone = getPhone();
    if (!currentPhone) {
        return <AuthPage setPhone={setPhone}/>;
    }

  return (
    <div className="App">
      <>
        {/*<Navigation/>*/}
        <Routes>
          {/*<Route path="/" element={<TransportPage/>}/>*/}
          <Route path="/orders" element={<OrdersPage/>}/>
        </Routes>
      </>
    </div>
  );
}

export default App;
