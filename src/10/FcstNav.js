import { Link } from "react-router-dom";


const FcstNav = () => {


    return(

        
        <nav>
            <ul>
                <li><h4>기상청 단기 예보</h4></li>
            </ul>
            <ul>
                <li><Link to='/' role='button'>단기예보홈</Link></li>
            </ul>



        </nav>




    )
}
export default FcstNav ;