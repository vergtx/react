/*
한국관광공사_관광사진갤러리 키워드 검색 목록 조회
https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=RMZOE5nxYetqyMQfyEMjbhv0YOxMX7mj%2B8ucPjopU%2FTHy%2BF2x3UjmB9kqdqtEqvO8mYBMx04W3%2BTmxwNF0sJmw%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%ec%9e%90%ea%b0%88%ec%b9%98&_type=json
*/
import { useState, useEffect, useRef } from 'react';
import styles from './Gallery_ver2.module.css' ;
import Gallary_Info_ver2 from './Gallary_Info_ver2';



const LoadingSpinner = () => {
    return (
        <div className="loading-spinner">
            <progress></progress>  {/* 로딩 스피너 디자인 및 내용 , 여기서는 pico css 가지고 옴 */}
            <a href="#" aria-busy="true">Generating ...ing....ing..... please wait......</a> {/* 로딩 스피너 디자인 및 내용 , 여기서는 pico css 가지고 옴 */}
        </div>
    );
};


const Gallery_ver2 = () => {
    //키워드 input
    const txt1 = useRef() ;
    const [inputValue, setInputValue] = useState(null);
    const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가
    

    //컴포넌트가 맨처음 랜더링되면 한번실행
    useEffect(() => {
        txt1.current.focus();
    }, []);



    //확인버튼
    const show = (e) => {
        e.preventDefault();
        if (txt1.current.value === '') return ; 

        let keyin = encodeURI(txt1.current.value) ; 
        
        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=RMZOE5nxYetqyMQfyEMjbhv0YOxMX7mj%2B8ucPjopU%2FTHy%2BF2x3UjmB9kqdqtEqvO8mYBMx04W3%2BTmxwNF0sJmw%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=`

        url = url + keyin + "&_type=json"
        
        console.log("url = ",url) ; // 페치하기전에 반드시 console 날려봐야 함 

        setIsLoading(true); // 로딩 상태 설정

        fetch(url)
        .then((resp) => resp.json())  //resp는 서버로부터 받은 "응답" 객체를 나타내며, .json() 메소드를 호출함으로써 JSON 형태로 변환됩니다
        .then((data) => {
            //setInputValue(data.response.body.items.item)) //setInputValue 데이타 중에data>response>body>items.item 가져와 배열만든다 
            // .then((data)=>  console.log(data))
            setInputValue(data.response.body.items.item);
            setIsLoading(false); // 로딩 상태 해제
          })
        
         
        .catch((err) => console.log(err))


    }
    //취소버튼
    const showClear = (e) => {
        e.preventDefault();
        
    }

    return(
        <main className="container">
            <form>
                <article className={styles.article}>
                        <header className={styles.header}>
                            <h1 className={styles.title}>한국관광공사 어디갈래 ?</h1>
                        </header>
                        <div className="grid">                        
                            <div>
                            <input ref={txt1} type="text" id="txt1" name="txt1" placeholder="키워드를 입력하세요." required />
                            </div>
                            <div className={styles.btDiv}>
                                <button className={styles.button} onClick={(e)=>show(e)}>확인</button> 
                                <button className={styles.button} onClick={(e)=>showClear(e)}>취소</button>
                            </div>
                        </div>
                 
              </article>
            </form>

            <div></div>
            
            {isLoading ? <LoadingSpinner /> : inputValue && <Gallary_Info_ver2 contants={inputValue} />} 
            {/* //probs를 쓰러면 테그로</>넘겨줘야한다.Gallary_Info_ver2 화면의 inputValue의를 넘겨주는데 inputValue의는 테그이다 */}
        </main>
    );
}

export default Gallery_ver2 ;