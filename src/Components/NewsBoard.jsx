import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";

const NewsBoard = ({category}) => {

    const [articles,setArticles] = useState([]);

    useEffect (()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=1dc38ed7fa5b4b2f9ee659b3b38dccdd`;
        fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles));  
    },[category])

  return (
    <div>
      <h2 className="text-center m-3">Latest <span className="badge bg-danger">News</span> From US</h2>
      {articles?.map((news,index)=>{
        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} publishedAt={news.publishedAt} source={news.source.name} />
      })}
    </div>
  )
}

export default NewsBoard
