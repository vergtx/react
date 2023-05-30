import { Link } from "react-router-dom";

import { useRecoilValue } from "recoil";
import { Cntatom, CntatomTwice } from "./Cntatom";

const Cntdisp = () => {
    
    //const [n, setn]= useRecoilState(Cntatom);
    const n = useRecoilValue(Cntatom);  // 이화면은 출력기능만 하기 (cntinput에서 변경된값 불러옴) 때문에 setn 이 필요 없다 따라서 useRecoilValue (읽어오기만 할떄) 사용하면됨

    const n2= useRecoilValue(CntatomTwice);    

    return(
        
       
                <article>
                    <h1>입력값: {n} , 입력값 2배: {n2} </h1>
                    
                    <footer>
                        <Link to ='/' > 입력화면이동</Link>

                    </footer>

                </article>

    )
}
export default Cntdisp ;