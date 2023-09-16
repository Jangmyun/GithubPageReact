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
      {
        isOptionSelected ? 
        <>
        <div>보여줄거</div> 
        <Routes>
          <Route path='/order' element={ <OrderList></OrderList>}></Route> {/* /order 페이지 들어가면  orderList 보여주기*/}
          <Route path='/delivery'></Route>
        </Routes>
        </>
        : null
      }
      
    </div>
  );
}

export default App;
