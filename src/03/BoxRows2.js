import { useState } from 'react';
//const BoxRows = (probs) => {       // probs 부모가 가지고 있는 데이터를 자식이 쓸수 있게 데이터 전달하는것
 //   const mvlist = [...probs.mv];  //probs의 관건은 어떻게 사용하는 것이 관건이다. (...)< 점3개는 스프레드 연산자로 다펼쳐서 다시 값 집어 넣음
import './box.css';
    const BoxRows = ({mv}) => {  // 위 probs 사용 할때 변경해서 사용하지 않고 바로 사용 할꺼면 변수 바로 사용
  //  console.log("boxrows",mv)
  
    //상세정보 확인
    const [footTag, setfootTag] = useState('');
    // 클릭된 자료 확인
    const showMv = (row) => {    //클릭된 자료 확인하려고 onclick 시 실행된 콜백함수 생성 //안에 파라미터 이름 rowㅛㅛ바꿀수 있음.
        console.log(row);
        setfootTag( "🎬[" +row.movieCd + "] " + row.movieNm + "🗓개봉일: " + row.openDt );
    }

    let trTags = [] ;
        // 10개의 반복문이 trTags에 들어감

    for (let row of mv) {
        console.log(row.rank, row.movieNm, row.salesAmt, row.rankInten)
        trTags.push(
            <tr className="mytr" key={row.movieCd} onClick={()=> showMv(row)}>
            <td>{row.rank}</td>
            <td>{row.movieNm}</td>
            <td>{parseInt(row.salesAmt).toLocaleString()}</td>
            {/* 위 내용은 1000단위 구분하는것 */}
            <td className='right'>{row.rankInten > 0 ? '📈' : '📉'}{Math.abs(row.rankInten)}</td>
            </tr>
        )

    }

    return (
        
        <>
        <tbody>
            {trTags}  
            {/* //원래 tr10개 만들어야 하는데 배열변수로 한번에 사용   */}
        </tbody>
        <tfoot>
            <tr>
                <td colSpan="4">{footTag}</td>  
  
            </tr>
        </tfoot>
        </>

    )


}


export default BoxRows ;
