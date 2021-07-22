import React, { useEffect } from 'react'
import './SongList.css'

const songList = [
    {
        name:"Toccata-and-Fugue-Dm.mp3",
        url: "https://www.mfiles.co.uk/mp3-downloads/Toccata-and-Fugue-Dm.mp3"
    },
    {
        name:"book1-prelude01.mp3",
        url: "https://www.mfiles.co.uk/mp3-downloads/book1-prelude01.mp3"
    },
    {
        name:"book1-prelude02.mp3",
        url: "https://www.mfiles.co.uk/mp3-downloads/book1-prelude02.mp3"
    },
    {
        name:"book1-fugue02.mp3",
        url: "https://www.mfiles.co.uk/mp3-downloads/book1-fugue02.mp3"
    },
    {
        name:"book1-prelude03.mp3",
        url: "https://www.mfiles.co.uk/mp3-downloads/book1-prelude03.mp3"
    },
    {
        name:"book1-prelude06.mp3",
        url: "https://www.mfiles.co.uk/mp3-downloads/book1-prelude06.mp3"
    },
    {
        name:"book1-fugue10.mp3",
        url: "https://www.mfiles.co.uk/mp3-downloads/book1-fugue10.mp3"
    }
]

function SongList({ setSong }) {
    function songClickHandler(url){
        setSong(url)
    }
    
    return (
        <div className="songsListContainer">
            {songList.map((song,index)=><div key={index} 
                                            id={index} 
                                            className="song" 
                                            onClick={()=>songClickHandler(song.url)}>
                                        {song.name}
                                        <div className="borderBox"></div>
                               </div>)}
        </div>
    )
}

export default SongList
