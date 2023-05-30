
const Cntinput =({n, setn}) => {
    
    
    
    

    
    const downN = (e) => {
        e.preventDefault();
        if ( n -1 < 0 ) setn (0);
        else setn(n-1);
        setn(n-1);
    }

    const upN = (e) => {
        e.preventDefault();
        if (n+1 > 100)  setn(100);
        else setn(n+1);
    }


   

    return(
        <article>
                <form>
                <div className="grid">
                    <div></div>
                    <div><button  onClick={downN}>-</button></div>
                    <div><input  type="text" name="text" readOnly value={n}></input></div>
                    <div><button onClick={(e)=> upN(e)}>+</button></div>
                    <div></div>
                    
                </div>
                </form>
        </article>
    )

} 
export default Cntinput ;