import React from 'react';
import './App.css';

import VideoContainer from "./components/videoContainer/VideoContainer";

const videos = [
    {
        id: 1,
        title: 'Aerosmith - Dream On',
        img: 'https://as.com/tikitakas/imagenes/2016/06/28/portada/1467099582_791147_1467100596_noticia_normal.jpg',
    },
    {
        id: 2,
        title: 'Guns N Roses - Paradise City',
        img: 'https://rockandblog.net/wp-content/uploads/2020/04/10-curiosidades-guns-and-roses-1.jpg',
    }
];

function App() {
  return (
    <div className="App">
        <VideoContainer title="Recomendados" videos={videos}/>
    </div>
  );
}

export default App;
