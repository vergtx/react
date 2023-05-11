
import './Gallary_info.css';

const Gallary_info = ({inputValue}) => {    //{inputValue} 이거는 앞페이지 probs 로 받은거
    console.log(inputValue)

    const iofo_tag = []

    for (let info of inputValue) {
       // console.log(info.galContentId, info.galTitle, info.galWebImageUrl, info.galPhotographyLocation, info.galSearchKeyword )
        iofo_tag.push (
            <div key={info.galContentId}>
                <h1>{info.galTitle}</h1> <h2>{info.galPhotographyLocation}</h2>
                
                <div> <img src={info.galWebImageUrl}/></div>
                
                <p> 🔖 키워드: {info.galSearchKeyword}</p>
            </div>
            
        )
    
    }

    return (
        <>
          {iofo_tag}
        </>
      );
    };
    




export default Gallary_info ;