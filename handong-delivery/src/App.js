import './App.css';
import {Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <div className='header-logo'>
          <p>포장주문 후 한번에 배달</p>
          <h1 className=''><span id='logo-span-0'>배달비</span><span id='logo-span-1'>좀</span><span id='logo-span-2'>아끼자</span></h1>
        </div>
        <div className='navbar'>
          <div className='header-profile'>
            <img src="/imgs/basic_profile.jpg" alt="" width={'100%'} />
          </div>
          <div className='navbar-btn'>
            <input type="checkbox" id='navbar-check'/>
            <label htmlFor='check' className='navbar-check-btn'> {/* react에서 label 태그에 for 속성 추가하려면 htmlFor= 사용해야함 */}
              <svg fill='#657786' xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>            
            </label>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
