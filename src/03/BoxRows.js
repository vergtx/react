//const BoxRows = (probs) => {
 //   const mvlist = [...probs.mv];
import './box.css';
 const BoxRows = ({mv}) => {
  //  console.log("boxrows",mv)

    let trTags = [] ;

    for (let row of mv) {
        console.log(row.rank, row.movieNm, row.salesAmt, row.rankInten)
        trTags.push(
            <tr className="mytr" key={row.movieCd}>
            <td>{row.rank}</td>
            <td>{row.movieNm}</td>
            <td>{parseInt(row.salesAmt).toLocaleString()}</td>
            <td className='right'>{row.rankInten > 0 ? '📈' : '📉'}{Math.abs(row.rankInten)}</td>
           
            </tr>
        )

    }

    return (
        
        <>{trTags}</>

    )


}


export default BoxRows ;
