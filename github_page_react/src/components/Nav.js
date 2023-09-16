import '../css/Nav.css';
import {useState} from 'react';

function Nav(props){    //NavigationBar HTML 마크업
    let [titleMarginTop, setTitleMarginTop] = useState( {margin:'60% 0 0.67em 0'});
    
    return(
        <div className="navbar">
            <div className="navbar-title" style={titleMarginTop}>
                <h1>배달비좀 아끼자</h1>
            </div>

            <div className='navbar-option'>
                <div className='option-customer, option' onClick={()=>{
                    setTitleMarginTop({margin: '30px 0 -20px 0'});
                    // setTimeout 함수로 option 버튼 터치시 
                    setTimeout(()=>{props.setIsSelected(true);} , 800);
                    window.location.href = "/order";
                }}>
                    <span>주문할거임? 🤔</span>
                </div>
                <div className='option-rider, option' onClick={()=>{
                    setTitleMarginTop({margin: '30px 0 -20px 0'});
                    setTimeout(()=>{props.setIsSelected(true);} , 1000);
                    window.location.href = "/delivery";
                }}>
                    <span>배달할거임? 🚙</span>
                </div>
            </div>
        </div>
    );
}

export default Nav;