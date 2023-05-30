import { Link } from "react-router-dom";
import styles from "./FcstNav.module.css";


const FcstNav = () => {


    return(

        
        <nav className={styles.nav}>
            <ul>
                <li><h4>기상청 단기 예보</h4></li>
            </ul>
            <ul>
                <li><Link to='/' role='button' className={styles.link}>단기예보홈</Link></li>
            </ul>



        </nav>




    )
}
export default FcstNav ;