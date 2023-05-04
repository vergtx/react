import { useState, useRef } from "react";

// useraf 는 state 랜더링 일어날때 바뀐값 한번에 보임 그전까지는 콘솔에서 확인 가능
const Myref = () => {

    let cnt1 = 1;

    const[cnt2, setcnt2] = useState (1);
    const cnt3 = useRef (1);

    const showcnt = () => {
        console.log('cnt1=', cnt1, 'cnt2=', cnt2, 'cnt3=', cnt3);
    }

    let showcnt1 = ()=>{
        cnt1 = cnt1+1;
        showcnt();
    } 
    
    const showcnt2 = () => {
        setcnt2(cnt2 + 1) ;
        showcnt();
        
    }

     
    const showcnt3 = () => {
        cnt3.current =  cnt3.current+1
       
    }

    return (
        <main className="container">
            <article>
                <header>
                  <div className="grid"><h1>컴포넌트 변수 : {cnt1}</h1></div> 
                  <div className="grid"><h1>state 변수 : {cnt2}</h1></div> 
                  <div className="grid"><h1>useRef 변수 : {cnt3.current}</h1></div> 
                </header>
                <div className="grid">
                        <button onClick={()=> showcnt1()}> 컴포넌트 변수</button>
                        <button onClick={()=> showcnt2()}> state 변수</button>
                        <button onClick={()=> showcnt3()}> useRef 변수</button>
                </div>
            </article>
        </main>
    );
}

export default Myref