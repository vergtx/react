//1. use state를 임포트

import {useState } from "react";

const Myclocktime1 = () => {

    //let mytime = new Date().toLocaleTimeString();
    //mytime 는  현재시점의 시강 가지고 오는 식

    //const [mytime, setmytime] = useState(t);
    //let cnt = 0;
    //setmytime(cnt +1); 

    
    
    // 1초에 한번씩 재 랜더링해야 함. 1초에 한번씩 바쭤 주는 것 >> setinterval 쓰면됨
        //setinterval은 콜백함수로 쓰는게 문법.
    // state 변수쓰면 바뀌는것 자동으로 화면에 반영해줌 ex) 시간
    // state 변수 쓰는 방법 >> state


//2. state 변수 선언 (use스테이트는 리엑트에 있는함수 > 대괄호로 사용하고 괄호안에는 변수이름, 두번째는 바꿔서 사용할 이름 "setmytime"으로 사용)
    // 변수의 초값설정(new Date().toLocaleTimeString())해줘야 합.
    const [mytime, setmytime] = useState(new Date().toLocaleTimeString())
    
//3.  1초에 한번씩 변경. setInterval 사용해서 변경, setInterval은 문법이 콜백함수 ()=> 사용
       //mytime으로 한번에 고치지 못하고 setmytime으로 사용해야 한다.
    setInterval(()=> {
        setmytime(new Date().toLocaleTimeString()) 
        },1000) ;
 
    return (
        <footer>

        <h1>{mytime}</h1>
           
   
         </footer>
    )

}

export default Myclocktime1;

// hook 이라는 시스템으로 시스템이 살아있는동안에 제어를 해준다.