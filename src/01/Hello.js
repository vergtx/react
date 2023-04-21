
import logo from '../logo.svg';
import './Hello.css';

const Hello = ()=> {          // <리액트 컴포넌트 구조>리액트 컴포넌트는 사용자 정의 함수인데 대문자로 시작
                                         //1. 이떄까지는 리턴이 없는 경우가 많았는데 컴포넌트에서는
                                   //2.사용자 정의 함수는 리턴이 있아야 한다.
                                   //3.사용자 테그도 필요함 , div 테그는 무조건 한개 있어야 한다. 자식 낳는거는 갠찮음 ex) 부모 노드 div 하나
                                     // 4. 내보내 주기 필요함.
                                      // 꺽쇠는 프레그먼트 테그 div 2개쓸 수 있게 한다.

    let name = '김광일' ;
    let git = '깃허브 주소 넣기';

    return(                            

   <main className='container'>  
         
        <article data-theme="dark">
            <div>
            <img src ={logo} className='App-logo' alt = 'logo' />
            </div>
            <footer>
                <hgroup>
                <h1>{name}</h1>
                <h2>a href = {git}>{git}</h2>    
                </hgroup>
            </footer>

        </article>   
        

        </main>


    );

}
export default Hello ;
