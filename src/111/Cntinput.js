import { Link } from "react-router-dom";
import { useRecoilState} from "recoil";
import { Cntatom } from "./Cntatom";

const Cntinput =() => {
    
    const [n, setn]= useRecoilState(Cntatom); // useRecoilState 값 바꿀때 usestate처럼사용 useRecoilValue 읽어오기만 할떄 사용

  
    

    
    const downN = (e) => {
        e.preventDefault();
        if ( n -1 < 0 ) setn (0);
        else setn(n-1);
        setn(n-1);
    }

    const upN = (e) => {
        e.preventDefault();
        if (n+1 > 100)  setn(100);
        else setn(n+1);
    }


   

    return(
        <article>
                <form>
                <div className="grid">
                    <div></div>
                    <div><button onClick={downN}>-</button></div>
                    <div><input  type="text" name="text" readOnly value={n} ></input></div>
                    <div><button onClick={upN}>+</button></div>
                    <div></div>
                    
                </div>
                </form>
                
           

         

                <footer>
                    <Link to = 'disp'>출력화면이동</Link>
                </footer>
        </article>
    )

} 
export default Cntinput ;