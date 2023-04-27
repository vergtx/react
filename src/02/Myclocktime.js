const Myclocktime = () => {

    let mytime = new Date().toLocaleTimeString();

    return (
        <footer>

        <h1>{mytime}</h1>
           
   
         </footer>
    )

}

export default Myclocktime;


//시계가 리얼타임으로 바뀌지 않는 버젼