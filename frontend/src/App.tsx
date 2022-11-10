import Aside from './components/Aside';
import Cashier from './components/Cashier';
import Catalog from './components/Catalog';
import Home from './components/Home';
import Inventory from './components/Inventory';
import Nav from './components/Nav';
import Report from './components/Report';
import './styles/global.css'

function App() {
  return (
    <div className="App">
      <div>
        <Nav/>
      </div>
      <div className='mainContainer'>
        <Aside/>
        {/* <Catalog/> */}
        {/* <Cashier/> */}
        {/* <Inventory/> */}
        <Report/>
        {/* <Home/> */}
      </div>
      

      
    </div>
  );
}

export default App;
