import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AuthPage} from "./pages/AuthPage"
import {OrdersPage} from "./pages/OrdersPage"
import {TransportsPage} from "./pages/TransportsPage";
import {Navigation} from "./components/navigation";


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
              <Route path="/" element={<OrdersPage/>}/>
              <Route path="/transports" element={<TransportsPage/>}/>
          </Routes>
      </>
  );
}

export default App;
