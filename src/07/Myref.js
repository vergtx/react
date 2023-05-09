import { useState, useRef, useEffect} from "react";
import styles from './Myref.module.css';

// useraf 는 state 랜더링 일어날때 바뀐값 한번에 보임 그전까지는 콘솔에서 확인 가능
const Myref = () => {

    const txtref = useRef(); //인풋제어용으로 사용 input박스안에 ref속성으로 꽃아야함ref={txtref} 입력 //화면시작되면 마우스 커서가 클릭한거(focus) 처럼 useeffect 사용 처음에 한번 //
                            // 1. 레버변수로 사용하거나 >>>itemArr로 레퍼변수로 사용 / 폼테그안에 넣어 폼테그 변수 관리 하는 용도로 2가지 사용 >>> {txtref} 인풋안에 레퍼라는 속성을 줌 
    //useEffect(()=> {}, []) 사용법

    useEffect(()=> {
        txtref.current.focus();
    }, []) // 디팬던시에에 대괄호만 있으면 맨처음에 한번 일어남. 레퍼변수응 .current에 맞춰서 일어남. ex) 페이지 초반에 커서 포커스


    const itemArr = useRef([]);
    const [Itemtag, setItemtag] =useState(); // usestate 사용하는 식 << state 사용하는 이유 변경하는 순간 재 랜더링 일어나게 하기 위해서. {Itemtag}<header> 안에 테그로 들어감.



    const addItem = (e) => {
        e.preventDefault();
        itemArr.current = [...itemArr.current, txtref.current.value] // 배열 그대로에 내가 찍은 변수 값 아이템커런트에  추가
        itemArr.current = [...new Set(itemArr.current)];  //중복값 입력안되게 하는 방법 new Set
        itemArr.current = [... itemArr.current];
        console.log("addItem", itemArr.current )

    
        let tempTag = itemArr.current.map((item, idx) => <span className={styles.sp}/*변수로줘야 해서 중괄호*/  key = {idx}>{item}</span>) ;
        setItemtag(tempTag);
        resetItem();

    }
    const resetItem = () => {   //이벤트의 기본 동작을 막기 위해 사용되는 함수.preventDefault()를 사용하면 페이지를 다시 로드하지 않고 JavaScript 코드를 실행하여 원하는 동작을 수행할 수 있습니다.페이지 새로고침을 막기 위해 사용
        txtref.current.value = '';
        txtref.current.focus();   // 이 부분은 등록 누른이 후 인풋창 비워지게 하는 법
        console.log("resetItem")
    }



    return (
        <main className="container">
            <article>
                <header>
                    <form>
                        <div className="grid">
                            <div>
                                <label htmlFor="txt1">과일입력</label>
                                <input ref={txtref} type="text" id="txt1" required/>
                                
                            </div>
                            <div>
                                <button onClick={(e)=> addItem(e)}>등록</button>   
                                {/* // 버튼 누르면 additem 실행 */}
                                <button onClick={(e)=> resetItem(e)}>취소</button>
                        </div>

                        </div>
                        
                    </form>
                </header>
                <div>
                    {Itemtag}
                       
                </div>
            </article>
             
        </main>
    );
}

export default Myref