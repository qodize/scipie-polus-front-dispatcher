import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AuthPage} from "./pages/AuthPage"
import {OrdersPage} from "./pages/OrdersPage"
import {Navigation} from "./components/navigation";


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
      <>
          <Navigation/>
          <Routes>
              {/*<Route path="/" element={<TransportPage/>}/>*/}
              <Route path="/orders" element={<OrdersPage/>}/>
          </Routes>
      </>
  );
}

export default App;
