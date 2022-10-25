import Aside from './components/Aside';
import Catalog from './components/Catalog';
import Nav from './components/Nav';
import './styles/global.css'

function App() {
  return (
    <div className="App">
      <div>
        <Nav/>
      </div>
      <div className='mainContainer'>
        <Aside/>
        <Catalog />
      </div>
      

      
    </div>
  );
}

export default App;
