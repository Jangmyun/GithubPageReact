import './css/App.css';
import Nav from './components/Nav';
import { useState } from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import {OrderList, OrderForm} from './components/Order';


function App() {
  let [isOptionSelected, setIsOptionSelected] = useState(false);

  return (
    <div className="App">
      <Nav isSelected={isOptionSelected} setIsSelected={setIsOptionSelected}></Nav>
      <Routes>
        <Route path='/' element={<OrderList></OrderList>}></Route>
        <Route path='/order' element={<OrderForm></OrderForm> }></Route>
        <Route path='/delivery'></Route>
      </Routes>
      
    </div>
  );
}

export default App;
