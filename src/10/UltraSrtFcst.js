import { useState, useEffect} from 'react';
import FcstTable from "./FcstTable";
import { useParams } from 'react-router-dom';




const UltraSrtFcst = () => {
    console.log("useParams", useParams);
 
    

    const dt = useParams().dt;    // useParams :URL 파라미터로 전달되는 값 받음
    const area = useParams().area;
    const x = useParams().x;
    const y = useParams().y;

    const [datas, setdatas] = useState();
   
 
 

    useEffect(()=> {
        

        const url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=bedwbCq%2By1PSxkAdCkwAfnUxOoMTnwcBgpSQabTqVoTGPq%2FEI9D9tfvkuiPdaBfhAh%2F1YjJ%2FUayyNdrqpr1Zaw%3D%3D&numOfRows=60&pageNo=1&base_date=${dt}&base_time=0630&nx=${x}&ny=${y}&dataType=JSON`
        console.log("url" , url);

        fetch(url)
        .then((resp) => resp.json())  //resp는 서버로부터 받은 "응답" 객체를 나타내며, .json() 메소드를 호출함으로써 JSON 형태로 변환됩니다
        .then((data) => setdatas(data.response.body.items.item))
        .catch((err) => console.log(err))

      

    }, [dt, x, y]);  // useEffect의 의존성 배열에 dt, x, y 추가

    

    return(

        
        <article>
            <header><h4>{area} 초단기예보</h4></header>
            <main></main>
            {datas && <FcstTable datas={datas} gubun="초단기예보" />}
                
            


        </article>




    )
}
export default UltraSrtFcst ;