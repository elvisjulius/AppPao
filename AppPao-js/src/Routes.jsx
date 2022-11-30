import { Route, Routes } from 'react-router-dom'
import Cashier from './components/Cashier';
import Catalog from './components/Catalog';
import Home from './components/Home';
import Inventory from './components/Inventory';
import Report from './components/Report';



export function Router(){
    return(
        <Routes>
            <Route path="/catalog" element={<Catalog/>} />
            <Route path="/cashier" element={<Cashier/>} />
            <Route path="/inventory" element={<Inventory/>} />
            <Route path="/report" element={<Report/>} />
            <Route path="/home" element={<Home/>} />
        </Routes>
    );
}