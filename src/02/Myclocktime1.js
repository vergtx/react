import { useEffect, useState } from "react";

const Myclocktime = () => {

    let t = new Date().toLocaleTimeString();

    const [mytime, setmytime] = useState(t);

    let cnt = 0;

    //setmytime(cnt +1); 
        console.log(cnt);
    }, [cnt]);
    


    return (
        <footer>

        <h1>{mytime}</h1>
           
   
         </footer>
    )

}

export default Myclocktime;