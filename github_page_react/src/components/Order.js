import {useEffect} from 'react';

function OrderList(){
    
    return(
        <div className="order-list">
            <p>보여줄거</p>
        </div>
    );
}
function OrderForm(){
    useEffect(()=>{
        const mapScriptTag = document.createElement('script');
        mapScriptTag.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=54ee9989a4bb5b14eab732e07bd561cc"
        mapScriptTag.async = true;
        document.appendChild(mapScriptTag);
    });
    return(
        <>
        <div id='map'></div>
        </>
    );
}

export {OrderList, OrderForm};