
import './App.css';
import News from './News';
import {useState,useEffect} from 'react';
function App() {
  let [articles,setArticles]=useState([]);
  let [category,setCategory]=useState("india");
  let [date,setDate]=useState();
  useEffect(()=>{
    fetch(`https://newsapi.org/v2/everything?q=${category}&from=${date}&apiKey=d883d16d9c0a451b8f3d1c20c2590ec8`)
    .then((response)=>response.json())
    .then((news)=>{
      setArticles(news.articles)
      console.log(news.articles)})
    .catch((error)=>{
      console.log(error);
    })

  },[category,date])
  return (
    <div className="App">
      <header className="header">
      <h3>NewApp</h3>
      <div className='newssearch'>
      <input type='date'className='date' onChange={(event)=>{
        setDate(event.target.value);
      }}></input>
      <input type='text' placeholder='Search News' onChange={(event)=>{
        if(event.target.value!==""){
          setCategory(event.target.value)
        }
        else{
          setCategory("sports")
        }
      }
      }/>

      <button className='search'>Search</button>


      </div>

      </header>
    <section className="news-articles">
      {
        articles.length!==0 ?
        articles.map((article)=>{
          return(
            <News article={article}/> 
          )

        }):
        <h3>No News Found For Searched Text..</h3>
      }
    </section>
    
    </div>
  ); 
}

export default App;
