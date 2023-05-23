import { useLocation } from "react-router-dom";
import queryString from "query-string";

const RoutePage2 = () => {

    const location = useLocation().search;
    console.log("location", location);

    const item1 = queryString.parse(location).item1;
    const item2 = queryString.parse(location).item2;
    console.log('itme2', item2)

    return(

        
        <article>
             <header><h1>RoutePage2</h1></header>
                 <h1>{item1}</h1>
                 <h1>{item2}</h1>
             


        </article>


    )
}
export default RoutePage2 ;