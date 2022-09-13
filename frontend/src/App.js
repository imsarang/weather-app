import './App.css';
import {Routes,Route} from "react-router-dom"
import Dashboard from './components/Dashboard';
import Saved from './components/Saved';
import Calender from './components/Calender';
import State from './components/State';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path = "/" element={<Dashboard/>}/>
      <Route exact path = "/saved" element={<Saved/>}/>
      <Route exact path = "/calender" element={<Calender/>}/>
      <Route exact path = "/state" element={<State/>}/>
      </Routes>
    </div>
  );
}

export default App;
