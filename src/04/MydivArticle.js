//import Mydiv from "./Mydiv";

//const MydivArticle = (probs) => {
  //  const aname = probs.aname ;
import './Mydiv.css' ; // 마이 디아이브이와 마이디아이브이 아티클 h1 전역으로 적용
import style from './Mydiv.module.css'; // 모듈.css는 style from으로 불러와 사용 온리 컴포넌트에만 적용

// state는 수정해야하는 부분에 사용 할 수 있음
//state 변수 사용 1단계 use state hook <<리액트 함수를 import
//state 변수 사용 2단계 스테이트 변수선언 반드시 대괄호로 시작하는 배열[]로 해야 함(리턴된 함수 2개 있는데 cnt와 setCnt에 넣겟다는 의미 setcnt는 cnt 어떻게 바꾸고 때사용)
//state 변수 사용 3단계 내용 변경
import { useState } from 'react'; //1단계 improt

const MydivArticle = ({aname}) => {    // 매개변수를 probs사용하지 않고 오브젞트에  매개변수를 넣어서 사용 {} 안에 key 값 바로넣어서 쓸 수 도 있다.

    let n = (aname === undefined) ? '0' : aname.slice(-1)  ; // 자바스크립트 문법 짜고 return 할때 jsx언어로 넣어줌
    
    // 2단계 변수선언 배열로
    const [cnt, setCnt] = useState(0);
    console.log(n);

    //let cnt = 0;

    //click 이벤트 처리
    const like = ()=>{
        //cnt =  cnt +1 ;

        //3단계 변수사용
        setCnt(cnt +1); 
        console.log(cnt);
    }   
    return (                     // 아래 probs 는 아무값도 없을때는 mydiv0를 띄어라 의미 
        <article>     
            <header>
                <h1 className={style.mah1}> { aname || 'Mydiv0'}</h1>  
                <ul className={style.aul}>
                    <li className={style.ali} >{n ==='0' ? 'Mydiv0' : 'Mydiv'+n}1</li>
                    <li>{'Mydiv'+n}2</li>
                </ul>
                    {n=== '1' &&
                        <footer>
                            <h2><span onClick={()=> like()}>🧡</span> {cnt}</h2>
                        </footer>  
                    }
            </header>  
        </article>
    );



}

export default MydivArticle ;