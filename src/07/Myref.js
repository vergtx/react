import { useState, useRef, useEffect} from "react";

// useraf 는 state 랜더링 일어날때 바뀐값 한번에 보임 그전까지는 콘솔에서 확인 가능
const Myref = () => {

    const txtref = useRef(); //인풋제어용으로 사용 input박스안에 ref속성으로 꽃아야함ref={txtref} 입력 //화면시작되면 마우스 커서가 클릭한거(focus) 처럼 useeffect 사용 처음에 한번
    
    //useEffect(()=> {}, []) 사용법

    useEffect(()=> {
        txtref.current.focus();
    }, [])


    const itemArr = useRef([]);
    const [Itemtag, setItemtag] =useState();

    const addItem = (e) => {
        e.preventDefault();
        itemArr.current = [...itemArr.current, txtref.current.value] // 배열 그대로에 내가 찍은 변수 값 추가
        console.log("addItem", itemArr.current )

    }

    const resetItem = (e) => {
        console.log("resetItem")
    }



    return (
        <main className="container">
            <article>
                <header>
                    <from>
                        <div className="grid">
                            <div>
                                <label htmlFor="txt1">과일입력</label>
                                <input ref={txtref} type="text" id="txt1" required/>
                                
                            </div>
                            <div>
                                <button onClick={(e)=> addItem(e)}>등록</button>
                                <button onClick={(e)=> resetItem(e)}>취소</button>
                        </div>

                        </div>
                        
                    </from>
                </header>
                <div className="grid">
                    {Itemtag}
                       
                </div>
            </article>
        </main>
    );
}

export default Myref