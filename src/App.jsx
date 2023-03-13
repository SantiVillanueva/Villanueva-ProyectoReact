import './App.css';
import { ItemListContainerComponent, NavBarComponent } from "./components";

function App() {
  return ( 
    <div>
    <NavBarComponent/>
    <ItemListContainerComponent greeting="tardes" /> 
    <ItemListContainerComponent greeting="noches" /> 
    
    </div>
    );
  }
  
  export default App;
  
