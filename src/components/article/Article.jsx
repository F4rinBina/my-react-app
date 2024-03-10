import styled from "./article.module.css"


function Article(props) {

    return(
        <div className={styled.articleWrapper}>
            <img src={props.industry.imageUrl}  />
            <h3>{props.industry.title}</h3>
            <p> خواندن{props.industry.readingTime}دقیقه ای</p>
        </div>
    )
    
}


export default Article;