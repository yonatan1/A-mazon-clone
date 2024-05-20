import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Components/Pages/Landing/Landing';
import SingUp from './Components/Pages/Auth/SingUp';
import Payment from './Components/Pages/Payment/Payment';
import Orders from './Components/Pages/Orders/Orders';
import Cart from './Components/Pages/Cart/Cart';
import Results from './Components/Pages/Results/Results';
function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/Auth" element={<SingUp />} />
                <Route path="/Payment" element={<Payment />} />
                <Route path="/Orders" element={<Orders />} />
                <Route path="/Car" element={<Cart />} />
                <Route path='/Category/:CategoryName'element={<Results/>}/>
            </Routes>
        </Router>
    );
}

export default Routing
