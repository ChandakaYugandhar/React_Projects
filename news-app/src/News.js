
export default function News(props){
    return(
        <div className='news'>
            <div className='news-img'>
                {
                    props.article.urlToImage!==null?
                    <img src={props.article.urlToImage}/>:
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPyLYsnyb-Cjqt0ZGHtrAuSrgl1hXj0xWRx9A5-O3VBT4fSFfRuFQL9WKmh25dnb4cZ7I&usqp=CAU"/>
                }

            </div>
            <h1>{props.article.title}</h1>
            <p>{props.article.description?.substring(0,100).concat("...")} <a href={props.article.url} target="_blank">Read more...</a></p>
            <div className='source'>
                <p>{props.article.author}</p>
                <p>{props.article.source.name}</p>
            </div>
        </div>
    );
}