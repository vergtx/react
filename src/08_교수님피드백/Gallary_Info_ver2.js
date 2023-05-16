
import GallaryArticle from './GallaryArticle'; // GallaryArticle 컴포넌트를 import합니다.

const Gallary_Info_ver2 = ({contants}) => {    //{contants} 이거는 앞페이지 probs 로 받은거
    console.log(contants)

    const iofo_tag = []

    for (let i = 0; i < contants.length; i = i + 2) {
        console.log(i)
        iofo_tag.push (
            <div className='grid' key={'div'+ i}>
                  <GallaryArticle item = {contants[i]} />
                  {(i+1 < contants.length) && <GallaryArticle item={contants[i + 1]} />}
            </div>
        );
    }
 
    return (
        <>
          {iofo_tag}
        </>
      );
    };
    




export default Gallary_Info_ver2 ;