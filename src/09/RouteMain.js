import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteNav from "./RouteNav";
import RouteHome from "./RouteHome";
import RoutePage1 from "./RoutePage1";
import RoutePage2 from "./RoutePage2";


const RouteMain = () => {


    return(
        <BrowserRouter>
        <main className="container">
            <RouteNav /> 

            <Routes>              {/* -----------------라우츠는 라우트되는 정보를 묶음 */}
                <Route path='/' element={<RouteHome />} />      {/* --------최초 첫 페이지--RouteHome로  이동 */}
                <Route path='/Page1/:item1/:item2' element={<RoutePage1 />} />              {/* --------주소에 "/Page1" 추가하면--RoutePage1로 이동 ex)http://localhost:3000/page1 */}
                <Route path='/Page2' element={<RoutePage2 />} />     {/* --------쿼리스트링 사용 문자열 ? 다름거 자동으로 따옴*/}
            </Routes>

            
        </main>
        </BrowserRouter>

    );
}
export default RouteMain ;