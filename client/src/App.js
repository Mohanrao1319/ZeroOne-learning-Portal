import './App.css';
import { Routes, Route, Router } from 'react-router-dom';


//import components here
import Homeapp from './Pages/Home/Homeapp';
import Home from './Pages/Home/Home';
import CprogrammingApp from './courses/c-programming-module/CprogrammingApp';
import PythonApp from './courses/python-module/PythonApp.js';
import NotFound from './NotFound/NotFound'
import Coming from './Comingsoon/Coming';


function App() {
  return (
    <div className="App">
        <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/courses/*' element={<Homeapp/>}></Route>
              <Route path='/c-programming/*' element={<CprogrammingApp/>}></Route>
              <Route path='/python/*' element={<PythonApp/>}></Route>
              <Route path='*' element={<NotFound/>}></Route>
              <Route path='/coming-soon' element={<Coming/>}></Route>
        </Routes> 
    </div>
  );
}

export default App;
