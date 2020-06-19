import React, { useState } from 'react';
import ScotchInfoBar from '../ScotchInfoBar';
import './styles.css';

export default function App() {
  const apiURL = 'https://www.anapioficeandfire.com/api/books?pageSize=30';

  const [apiData, setApiData] = useState([])

  function fetchData(){
    fetch(apiURL).then(res => res.json())
    .then(data => setApiData(data))
  }
  
  return (
    <div className="App">
      <h1>Game of Thrones Books</h1>
      <h2>Fetch a list from an API and display it</h2>

      {/* Fetch data from API */}
      <div>
        <button onClick={fetchData} className="fetch-button">Fetch Data</button>
        <br />
      </div>

      {/* Display data from API */}

      {/* Use JSX below for each book */}
      <div className="books">

          {apiData.map(({name, isbn, authors, released, numberOfPages, country}) => (
            <div key={name} className="book">
              <h3>{isbn}</h3>
              <h2>{name}</h2>

              <div key={isbn} className="details">
                <p>👨: {authors.join(',')}</p>
                <p>📖: {numberOfPages}</p>
                <p>🏘️: {country}</p>
                <p>⏰: {new Date(released).toDateString()}</p>
              </div>
            </div>
          ))}
      </div>

      <ScotchInfoBar seriesNumber="7" />
    </div>
  );
}
