import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Emplisting from './componants/Emplisting';
import Empdetail from './componants/Empdetail';
import Empedit from './componants/Empedit';
import Empcreate from './componants/Empcreate';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Emplisting />} />
          <Route path='/data/create' element={<Empcreate/>}/>
          <Route path='/data/detail/:daid' element={<Empdetail/>} />
          <Route path='/data/edit/:daid' element={<Empedit />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );


}

export default App;
