import { Link } from "react-router-dom"; //라우트 쓰면 링크로 걸어야 함

const RouteNav = () => {


    return(

        
        <nav>
            <ul>
                <li><Link to='/' role='button'> Home</Link></li>   {/* 라우트 쓰면Link to를 사용해서 링크 걸어야함 */}
                <li><Link to='/page1/🍉/🍊' role='button'>Page1</Link></li>    {/* main에 <Route path='/Page1/:item1/:item2 이 item 넣어준 것을 어떻게 표현할지 정함' */}
                <li><Link to='/page2?item1=🍉&item2=🍊' role='button'>Page2</Link></li>   {/* --------쿼리스트링 사용 문자열 ? 다름거 자동으로 따옴*/}
            </ul>


        </nav>


    )
}
export default RouteNav;