import MydivArticle from "./MydivArticle";


const Mydiv = () => {

    return (
        <main className="container">
            <h1>Mydiv</h1>
            <MydivArticle />
            <MydivArticle aname='MyDiv1'/>
            <MydivArticle aname='MyDiv2'/>
        </main>
    );



}

export default Mydiv ;