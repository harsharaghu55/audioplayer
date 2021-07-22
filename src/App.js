import './App.css';
import { useState } from 'react'
import SongList from './SongList';
import WaveForm from "./waveForm"

function App() {
  const [ song,setSong ] = useState('https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3')
  return (
    <div className="App">
      <WaveForm url={song}/>
      <SongList setSong={setSong}/>
    </div>
  );
}

export default App;
