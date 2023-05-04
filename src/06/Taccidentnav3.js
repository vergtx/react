import './Taccidentnav3.css';
const Taccidentnav3 = ({seldata}) => {
    
  
    console.log('detail', seldata);
    const tagkey = ["사고건수", "사망자수", "중상자수", "경상자수", "부상신고자수"]

    let tags = tagkey.map((k,index) => (
        <div key={`k${index}`}>
        {`${k} ${seldata[k]}`}
        </div>
    ));
    return(
        <div className="grid Taccidentnav3-container">
            {tags}
        </div>
       
    );
  };
export default Taccidentnav3;