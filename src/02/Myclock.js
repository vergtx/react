import Myclockimage from "./Myclockimage";
import Myclocktime1 from "./Myclocktime1"; 
import '../01/Hello.css';



const Myclock = () => { 


    
    return (
        <main className='container'>  
        <article data-theme="dark">
            <Myclockimage />
            <Myclocktime1 />
        </article>   
        </main>
    );

}

export default Myclock;



// 컴포넌트 사용 할떄 는 import / export 써야 한다
// jsx 는 표현하는 방법으로 테그,중괄호 하여 표현 가능
//