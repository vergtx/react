const Myclocktime = () => {

    let mytime = new Date().toLocaleTimeString();

    return (
        <footer>

        <h1>{mytime}</h1>
           
   
         </footer>
    )

}

export default Myclocktime;