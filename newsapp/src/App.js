import './App.css';
import {useEffect,useState} from 'react';
import News from './News';

function App() {
  let [articles,setArticles]=useState([]);
  let [category,setCategory]=useState("sports");
  useEffect(()=>{
    fetch("https://newsapi.org/v2/everything?q=${category}&from=2024-01-22&sortBy=publishedAt&apiKey=341e0a2f42684aa186f3a19ce704bb4e")
    .then((response)=>response.json())
    .then((news)=>{
      setArticles(news.articles);
      console.log(news.articles);
    })
    .catch((error)=>{
      console.log(error);
    })
  },[category]);
 

  return (
    <div className="App">
      <header className="header">
        <h3>News App</h3>
        <input type="text" className="search" onChange={(event)=>{
          setCategory(event.target.value);
          }} placeholder="search news"/>
      </header>
      <section className="news-articles">
        {
          articles.map((article)=>{
            return(
              <News article={article}/>
            )
          })
        }
      </section>
    </div>
  );
}

export default App;
