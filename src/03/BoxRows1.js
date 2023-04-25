import { useState } from 'react';
//const BoxRows = (probs) => {
 //   const mvlist = [...probs.mv];
import './box.css';
    const BoxRows = ({mv}) => {
  //  console.log("boxrows",mv)

    const [footTag, setfootTag] = useState('');

    const showMv = (row) => {
        console.log(row);
        setfootTag(row.movieCd);
    }

    let trTags = [] ;

    for (let row of mv) {
        console.log(row.rank, row.movieNm, row.salesAmt, row.rankInten)
        trTags.push(
            <tr className="mytr" key={row.movieCd} onClick={()=> showMv(row)}>
            <td>{row.rank}</td>
            <td>{row.movieNm}</td>
            <td>{parseInt(row.salesAmt).toLocaleString()}</td>
            <td className='right'>{row.rankInten > 0 ? '📈' : '📉'}{Math.abs(row.rankInten)}</td>
           
            </tr>
        )

    }

    return (
        
        <>
        <tbody>
            {trTags}
        </tbody>
        <tfoot>
            <tr>
            <td colSpan={4}>{footTag}</td>
            </tr>
        </tfoot>
        </>

    )


}


export default BoxRows ;
