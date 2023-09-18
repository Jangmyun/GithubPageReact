import {useEffect} from 'react';
const {kakao} = window;

function OrderList(){
    return(
        <div className="order-list">
            <div className='order-bar'>
                <p>주문 리스트</p>
                <button onClick={()=>{
                    window.location.href = '/order';
                }}>주문하기</button>
            </div>
        </div>
    );
}
function OrderMap() {
    useEffect(()=>{
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(36.109355184080215,129.34310443220502),
            level:3
        };
        const map = new kakao.maps.Map(container, options);
    }, []);
    return(
        <div id='map' style={{
            width:'90%',
            height:'300px'
        }}></div>
    );
}
function OrderForm(){
    return(
        <>
        <OrderMap></OrderMap>
        </>
    );
}

export {OrderList, OrderForm};