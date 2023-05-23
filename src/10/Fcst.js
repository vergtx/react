import UltraSrtFcst from "./UltraSrtFcst";
import VilageFcst from "./VilageFcst";
import FcstNav from "./FcstNav";

import FcstMain from "./FcstMain";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Fcst = () => {
    

    return(
        <BrowserRouter>
            <main className="container">
                <FcstNav />
                

                <Routes>
                    <Route path='/' element={<FcstMain/>} />
                    <Route path='/Vilage/:dt/:area/:x/:y' element={<VilageFcst/>} />
                    <Route path='/ultra/:dt/:area/:x/:y' element={<UltraSrtFcst/>} />
                </Routes>
         

            </main>
        </BrowserRouter>    


    )
}
export default Fcst ;