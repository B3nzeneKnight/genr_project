import React,{useState} from 'react'
import LyricsGenerator from './Components/Lyrics'
import ImageGenerator from './Components/Images'
import ImageToVideo from './Components/ImageToVideo'
import AudioGenerator from './Components/audios'
import Herosection from './Components/Herosection'
const App = () =>{
  const [lyrics,setLyrics] = useState("Lyrics will be displayed here")


  return (
    <div>
      <Herosection />
    <LyricsGenerator lyrics={lyrics} setLyrics={setLyrics}/>
    <ImageGenerator lyrics={lyrics} setLyrics={setLyrics}/>
    {/* <ImageToVideo/> */}
    <AudioGenerator/>
    </div>
  )
  }

export default App