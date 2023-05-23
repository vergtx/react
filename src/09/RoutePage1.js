import { useParams } from "react-router-dom";

const RoutePage1 = () => {
    const item1 = useParams().item1 ;
    const item2 = useParams().item2 ;


    return(

        
              
        <article>
            <header><h1>RoutePage1</h1></header>
            <h1>{item1}</h1>    {/*네브에 표현한 것 const useParams 으로 떙겨옴 >>> <li><Link to='/page1/🍉/🍊' role='button'>Page1</Link></li>  */}
            <h1>{item2}</h1>

             </article>


    )
}
export default RoutePage1 ;