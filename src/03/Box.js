import BoxRows from "./BoxRows2";
import {useRef, useState , useEffect} from 'react'
const Box = () => {
    
   
    
    const [mvlist, setmvlist] = useState();
    
      
    // 날짜 입력창
    const dt1 = useRef();
   

    //날짜선택
    const getdt = () => {
        
        let seldt = dt1.current.value.replaceAll('-','')
        console.log("seldt = ", seldt);

        //날짜 정해졌으니 url 날려봄

        let url = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt='
        url = url + seldt;
        console.log("url = ", url);

        fetch(url)
        .then((resp) => resp.json())  //resp는 서버로부터 받은 응답 객체를 나타내며, .json() 메소드를 호출함으로써 JSON 형태로 변환됩니다
        .then((data)=>  setmvlist(data.boxOfficeResult.dailyBoxOfficeList)) //setmvlist 데이타 중에boxOfficeResult.boxofficeType 가져와 배열만든다 
        // .then((data)=>  console.log(data))
        .catch((err) => console.log(err))

    }

    return (

        <main className =  "container">
            <article>
                
                <header>🎬 Box Office</header>
                <input ref={dt1} type="date" id = "dt1" name="dt1" onChange={()=>getdt()}/>
                
                <table>
                    <thead>
                        <tr>
                            <th scope="col" class="rank">순위</th>
                            <th scope="col" class="movie-title">영화명</th>
                            <th scope="col" class="sales">매출액</th>
                            <th scope="col" class="change">증감</th>
                        </tr>
                    </thead>
                        {mvlist && <BoxRows mv={mvlist} />}  
                        {/* mvlist && < 초기값설정 // mvlist 잇어야 날라간다.는말 */}

                </table>

            </article>
        </main>
    );


}


export default Box ;
