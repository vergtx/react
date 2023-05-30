import { useState, useEffect, useRef } from "react";
import Cntdisp from "./Cntdisp";
import Cntinput from "./Cntinput";


const Cnt = () => {
    const [n, setn] = useState (1);  //첫번쨰 값은 상태값, 바꿀값 두번째 값

    useEffect(()=> {
        console.log ("n" , n);
    }, [n])
  

    return(
        
            <main className="container">

                <Cntinput n = {n} setn={setn}/>
                <Cntdisp n= {n}/>

            </main>
    


    )
}
export default Cnt ;