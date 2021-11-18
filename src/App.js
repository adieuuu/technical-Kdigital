import './App.css';
import { Header } from 'semantic-ui-react'
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function App() {
  const [topStoriesData, setTopStoriesData] = useState([])
  const [arrData, setArrData] = useState([{}])
  const [tanda, setTanda] = useState(false)

  useEffect(() => {
    axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    .then((res) => {
      setTopStoriesData(res.data)
    })
  },[])

  return (
    <div className="App">
      <div style={{height: 47, backgroundColor: 'skyblue', alignContent: 'center'}}>
        <div style={{fontSize: 32, fontWeight: 'bold'}}>Top Stories</div>
      </div>

      <ImageList sx={{ width: '100%', height: 450 }} cols={2} rowHeight={164}>
      {topStoriesData.map((item, index) => (
        <ImageListItem key={index} style={{backgroundColor: 'red'}}>
          <h3>{item}</h3>
        </ImageListItem>
      ))}
      </ImageList>

    </div>
  );
}

export default App;
