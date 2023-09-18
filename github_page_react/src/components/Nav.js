import '../css/Nav.css';

function Nav(props){    //NavigationBar HTML 마크업    
    return(
        <div className="navbar">
            <div className="navbar-title" onClick={()=>{
                window.location.href = "/";
            }} >
                <h1>배달비좀 아끼자</h1>
            </div>

            <div className='navbar-option'>
                <div className='option-customer, option' onClick={()=>{
                    window.location.href = "/order";
                }}>
                    <span>주문할거임? 🤔</span>
                </div>
                <div className='option-rider, option' onClick={()=>{
                    window.location.href = "/delivery";                    
                }}>
                    <span>배달할거임? 🚙</span>
                </div>
            </div>
        </div>
    );
}

export default Nav;