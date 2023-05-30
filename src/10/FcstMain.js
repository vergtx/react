import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react"; // 날짜와 도시 선택한 값 초단기와 단기로 가져가기위해 사용
import xy from './getxy.json';
import styles from "./FcstMain.module.css";
const FcstMain = () => {

    

    const ops = xy.map((item) =>
        <option value={item["행정구역코드"]} key={item["행정구역코드"]}>
          {item["1단계"]}  
        </option>

    );
    console.log(xy);
    // 입력값을 받아오기 위한ref변수사용 입력컨퍼넌트 제어하는 목적.
    const txt1 = useRef () ; // 아래 input 박스네 ref={txt1} 박음
    const sel1 = useRef () ;

      ////////////////useState///////////////////////////
    const [dt, setdt] = useState() ; //area와 x, y 다 잡아야 한다.
    const [area, setarea] = useState();//area와 x, y 다 잡아야 한다.
    const [x, setx] = useState() ; //area와 x, y 다 잡아야 한다.
    const [y, sety] = useState() ; //area와 x, y 다 잡아야 한다.

    
    //dt가 변경되었을때 
    useEffect (()=> {
        console.log(dt, area);
    }, [dt, area]) ;  // <<<dt 값이 변경될때마다  useEffect실행된다.

    const getDt = () => { // 날짜를 그냥 가지고 오면 2022-02-02형식으로 가지고 온다. replaceAll 함수를 써서 "-" 제거
        let tdt= txt1.current.value ;
        tdt = tdt.replaceAll('-', '');
        setdt(tdt);
    }

    const getSel = () => {
        let tSel = parseInt(sel1.current.value);
        let temp = xy.filter((item) => item["행정구역코드"] === tSel)[0];
        console.log(temp);
        setarea(temp["1단계"]);
        setx(temp["격자 X"]);
        sety(temp["격자 Y"]);
     } 


    return(

        <article className={styles.container}>
            <header className={styles.header}><h2 className={styles.heading}>일기예보</h2></header>
            <div className={styles.grid}>
                <div>
                    <input ref={txt1} type="date" id='dt' name='dt' onChange={() => getDt()}></input>
                </div>
                <div>
                    <select ref={sel1} id='sel' name='sel' onChange={() => getSel()}>
                        <option value='' >선택</option>
                        {ops}
                    </select>
                </div>
            </div>

            <footer className={styles.footer}>
            <div className={styles.buttonGroup}>
                    <Link to ={`/ultra/${dt}/${area}/${x}/${y}`} role='button' className={styles.button}>초단기예보</Link>
                    <Link to ={`/Vilage/${dt}/${area}/${x}/${y}`} role='button' className={styles.button}>단기예보</Link>
                </div>
            </footer>
                
            


        </article>


       




    )
}
export default FcstMain ;