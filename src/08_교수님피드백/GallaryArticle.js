import styles from './Gallery_ver2.module.css' ;

const GallaryArticle = ({item}) => {

    let tags = item.galSearchKeyword.split(',') ;
    tags = tags.map((i) => <div className={styles.articleTags} key={i}>{i}</div>);// 이게 무슨의미 인지 확인.

    return (
        
        <article className={styles.articleContainer}>
            <header>
                <span>{item.galTitle}</span>
            </header>
            <div className={styles.imageContainer}>
                <img src={item.galWebImageUrl} alt="Travel photo"/>
            </div>
            <footer>
                 🔖 키워드: {tags}
            </footer>
        </article>

    )
}

export default GallaryArticle