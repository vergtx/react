import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cntdisp from "./Cntdisp";
import Cntinput from "./Cntinput";

import { RecoilRoot } from "recoil";

const Cnt = () => {

  
    return(
        <BrowserRouter>
        
            <main className="container">
                <RecoilRoot>

                <Routes>
                <Route path='/' element={<Cntinput/>} /> 
                <Route path='/disp' element={<Cntdisp/>} />        
                </Routes>

                
                </RecoilRoot>

            </main>

        </BrowserRouter>   
 
    )
}
export default Cnt ;