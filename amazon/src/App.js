
import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage from "./component/HomePage/HomePage";
import LoginPage from "./component/LoginAccount/LoginAccount";
import Cart from "./component/Cart/Cart"
import LocationDelivery from "./component/Location/LocationDelivery";
import ReturnAndOrder from"./component/ReturnAndOrder/ReturnAndOrder";
import Country from "./component/Country/Country";
import ConditionPage from "./pages/Condition/ConditionPage";

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={ <HomePage/>}/>
    <Route path="/homePage" element={ <HomePage/>}/>

    <Route path="/Login" element={ <LoginPage/>}/>
    <Route path="/cart" element={ <Cart/>}/>
    <Route path="/LocationDelivery" element={ <LocationDelivery/>}/>
    <Route path="/ReturnAndOrder" element={ <ReturnAndOrder/>}/>
    <Route path="/ConditionPage" element={ <ConditionPage/>}/>

    </Routes>
    </BrowserRouter>
    <Country/>

   </>
  );
}

export default App;
