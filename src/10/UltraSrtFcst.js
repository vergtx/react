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
        const url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=bedwbCq%2By1PSxkAdCkwAfnUxOoMTnwcBgpSQabTqVoTGPq%2FEI9D9tfvkuiPdaBfhAh%2F1YjJ%2FUayyNdrqpr1Zaw%3D%3D&numOfRows=10&pageNo=1&base_date=${dt}&base_time=0500&nx=${x}&ny=${y}&dataType=json`
        console.log("url" , url);

        fetch(url)
        .then((resp) => resp.json())  //resp는 서버로부터 받은 "응답" 객체를 나타내며, .json() 메소드를 호출함으로써 JSON 형태로 변환됩니다
        .then((data) => setdatas(data.response.body.items.item))
        .catch((err) => console.log(err))

    }, [])

    

    return(

        
        <article>
            <header>{area}</header>
            <main>초단기예보</main>
            {datas && <FcstTable data={datas} gubun="초단기예보" />}
                
            


        </article>




    )
}
export default UltraSrtFcst ;