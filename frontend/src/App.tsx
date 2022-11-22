import { BrowserRouter } from 'react-router-dom';
import Aside from './components/Aside';

import Nav from './components/Nav';
import { Router } from './Routes';
import './styles/global.css'

function App() {
  return (
    <div className="App">
      <div>
        <Nav/>
      </div>
      <div className='mainContainer'>
        <Aside/>
        <BrowserRouter>
        <Router />
      </BrowserRouter>
        {/* <Catalog/> */}
        {/* <Cashier/> */}
        {/* <Inventory/> */}
        {/* <Report/> */}
        {/* <Home/> */}
      </div>
      

      
    </div>
  );
}

export default App;
