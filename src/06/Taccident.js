import dataTaccident from './dataTaccident.json';
import Taccidentnav1 from './Taccidentnav1';
import Taccidentnav2 from './Taccidentnav2';
import { useState, useEffect } from 'react';
import Taccidentnav3 from './Taccidentnav3';
//* 복습overall 
// 컴포넌트는 만들어지면 내가 제거하기전까지 생명주기
// hook이라는 개념 도입되고 함수형컴포넌트 사용 한번랜더링 되고난 뒤에 그다음 랜더링 정의 하기위해 훅 나옴.
// usestate 훅은 내가 필요한 부분(화면 바꾸고 싶은부분)에 재 랜더링 시킴. 변수 3단계사용
// 대신 usestate 조건이 있음. 변수에 할당값(변수=값) 넣지 못하고 변수의 값을 바꾸고 싶으면 set(세터) 변수값을 넣어줘야 한다.
// so...usestate 는 []로 묶어서 변수명,set값 입력해서 사용
// useEffect는 usestate와 같이 잘쓰인다.

// useEffect사용은 콜백함수와 쓰임"useEffect(() => {}, dependency값)" 재랜더링이 일어나면 콜백함수 사용
// 랜더링되면 자동실행, 한번만실행 사용법에 따라서 바꿀수 있음
// 
const Taccident = () => {
    //console.log(dataTaccident['data'])
    

    const data = dataTaccident.data ; // 사고건수 obj 배열
    //console.log(data);
    let c1 = data.map((item) => item['사고유형_대분류']); // map 으로 data내 15개 데잍터 배열 뽑은거라 15개 나온다.
    //console.log(c1);
    //c1 = new Set(c1); // 출력해보면 중괄호로 표현. 중괄호는 오브젝트
    c1 = [...new Set(c1)]; // "..."사용하여 set을 배열로 반환, set은 중복값제거
   // console.log(c1); 
    
    // 아래는 대분류, 중분류 값 페어링 해서 가지고 오기 //원래는 배열안에 배열만들어야 해서 push와 temp 사용 할 수 있으나 아래 방법이 더 쉬움
    const c2 = data.map((item) => [item['사고유형_대분류'],item['사고유형_중분류']]);
    //console.log("c2",c2);
    
    const [sel1, setsel1] = useState (0); // useState 변수 선언 초기값 0 // 대분류선택
    const [sel2, setsel2] = useState ([]); //  중분류선택
    const [seldata, setseldata] = useState ();

    useEffect ( ()=> {
        // console.log('Taccident sel1 useEffect sel1',sel1)
        }, [sel1]);

    useEffect ( ()=> {
        // console.log('Taccident sel1 useEffect sel2',sel2)
        let temp = data.filter((item)=> 
                item.사고유형_대분류===sel2[0] && item.사고유형_중분류 ===sel2[1]);
        console.log('Taccident temp',temp[0]   )    
        setseldata(temp[0]);
        }, [sel2]);

    useEffect (()=> {
        console.log('Taccident seldata useEffect ',seldata)
        }, [seldata]);

    // useEffect ( ()=> {
    //      console.log('Taccident sel1 useEffect non1',sel1)
    //       console.log('Taccident sel1 useEffect non2',sel2)
    //     },);



    

    // 위에서  c1, c2
    //<Taccidentnav1 "c1 = {c1}"sel1={sel1} setsel1={setsel1}" => c1,sel1,setsel1을 오브젝트로 만들어 Taccidentnav1 에서 사용 가능
    return(

        <main className='container'>
            <article>
                <header>
                <Taccidentnav1 c1 = {c1} sel1={sel1} setsel1={setsel1} />
                <Taccidentnav2 c2 = {c2} sel1={sel1} sel2={sel2} setsel2={setsel2} />
              
               </header>
                {seldata &&  <Taccidentnav3 seldata = {seldata}/>} 
                {/* {seldata && ...}은 JavaScript에서 "단축 평가(short-circuit evaluation)"라는 개념을 이용한 것입니다.
                이 코드는 seldata가 truthy한 값일 경우에만 ... 부분이 실행되도록 하는 것입니다. */}
            </article>
        </main>

    );



}

export default Taccident;