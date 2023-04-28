
import data from './dataFrcst.json';   //DATA는 오브젝트 타입. 
                                        // 배열은순서가 굉장히 중요함. 
                                        // 오브젝크는 순서가 의미가 없다. 
                                        // 키에 의해서 데이타 구분한다. EX)frcstThreeCn,frcstTwoDt << 정보제공업체에서 정해줌.
import style from './Frcst.module.css';
import { useState } from 'react';

//state 1단계

const Frcst = () => {


    const dtkey = ["frcstOneDt","frcstTwoDt","frcstThreeDt","frcstFourDt"]; // 배열로 설정하면 맵이나 필터 사용할수 있음.
    

    const CNkey = ["frcstOneCn","frcstTwoCn","frcstThreeCn","frcstFourCn"]; // 배열로 설정하면 맵이나 필터 사용할수 있음.

    const dtcn = {};   //오브젝트 생성
     dtkey.map((item, idx) => {
        dtcn[data[item]] = data[CNkey[idx]];   
     });

    console.log(dtcn)


    //dtkey.map((item, index) => console.log(data[item], data[CNkey[index]]));

    let dttag = [];

     ////state 2단계 변수선언
     const [bodytag, setbodytag] = useState('');

     const detail = (k) =>{
        let dtcntiem = dtcn[k].split(',');
        dtcntiem = dtcntiem.map((item)=> item.split(':'));
        dtcntiem =  dtcntiem.map((item)=>
                    <div key = {item[0]}>
                        <span className={style.sp1}>{item[0]}</span>
                        <span className={style.sp2}>{item[1]}</span>
                    </div>
                )
        //state 3단계 값변경
        setbodytag(dtcntiem);
    }

    dttag = Object.keys(dtcn).map((item) => 
                    <div className={style.dt} key={'dt'+ item}
                     onClick={()=> detail(item)}>{item}</div>
                      );


    return (
        <main classsName='container'>
            <article>
                <header>
                    <h1>초미세먼지주간예고</h1>
                    <div className='grid'>
                        {dttag}
                        
                    </div>
                </header>
                    <div className='grid'>
                    {bodytag}    
                    </div>
                   
            </article>
            

        </main>
    )
}

export default Frcst
