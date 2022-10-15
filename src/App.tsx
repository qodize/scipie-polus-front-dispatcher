import React from 'react';
import{Route, Routes} from "react-router-dom";
import {AuthPage} from "./pages/AuthPage"


import './App.css';

function setPhone(phone: string){
    sessionStorage.setItem("phone", phone);
}

function getPhone() {
    return sessionStorage.getItem("phone");
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
          {/*<Route path="/orders" element={<Orders/>}/>*/}
        </Routes>
      </>
    </div>
  );
}

export default App;
