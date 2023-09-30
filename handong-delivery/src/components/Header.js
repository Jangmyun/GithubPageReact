import { useState } from "react";

function Header(){
    let [isNavbarClicked, setIsNavbarClicked] = useState(false); // 아이콘 모양 변경을 위한 변수 isNavbarClicked
    return(
        <>
        <div className='header'>
            <div className='header-logo'>
                <p>포장주문 후 한번에 배달</p>
                <h1 className=''><span id='logo-span-0'>배달비</span><span id='logo-span-1'>좀</span><span id='logo-span-2'>아끼자</span></h1>
            </div>
            <div className='navbar'>
                <div className='header-profile'>
                    <img src="/imgs/basic_profile.jpg" alt="" width={'100%'} />
                </div>
            <div className='navbar-btn' onClick={()=>{
                setIsNavbarClicked(!isNavbarClicked);
            }}>
                <div className='navbar-check-icon'> {/* react에서 label 태그에 for 속성 추가하려면 htmlFor= 사용해야함 */}
                { /* navbar에 버튼 클릭시 아이콘 모양 변경 */
                    isNavbarClicked ?
                    <svg fill="#657786" xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                    : <svg fill='#657786' xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                } 
                </div>
            </div>
            </div>
        </div>

        {
            isNavbarClicked ? <SideNav></SideNav>: null
        }
        </>
    );
} 

function SideNav() {
    return(
        <div className="sidenav">
            <input type="text" placeholder="통합검색" />
            <ul className="sidenav-btn">
                <li><a href=""></a></li>
            </ul>
        </div>
    );
}

export default Header;