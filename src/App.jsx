import React, {useState, useEffect} from 'react'
import Search from './Search'
import Display from './Display'


export default function App() {

  const [name,setName] = useState('');
  const [movie, setMovie] = useState([]);

  const nameChangeHandler = (data) => {
    setName(data);
  }


  const fetchmovie = async () => {
      let API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"

      if(name != ""){
        
        API = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${name}`
    }
    
        const response = await fetch(API);
        const data = await response.json();
        setMovie(data.results);

  }

  useEffect(
    () => {
      fetchmovie();
    
  }, [name])
  

  return (
    <>
        <div className="container">
          <Search nameChange = {nameChangeHandler} />
          <Display movies = {movie}/>
        </div>
    </>
  )
}


