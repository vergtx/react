
import './Taccidentnav2.css';

const Taccidentnav2 = ({c2, sel1, sel2, setsel2}) => {
    //console.log(c2);


    
    const  c2arr = c2
    .filter((item) => item[0] === sel1)
    .map((item) => (
      <li key={item[1]}>
        <button onClick={() => setsel2(item)}> {item[1]} </button>
      </li>
    ));

    return(
   
        <nav className="t-accident-nav2">
        <ul>
            <li><strong>사고유형 중분류</strong></li>
        </ul>
        <ul>
          {c2arr}
        </ul>
        </nav>

    );


}
export default Taccidentnav2;