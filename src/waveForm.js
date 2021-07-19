import React,{ useEffect,useRef,useState } from 'react'
import WaveSurfer from 'wavesurfer.js';
import "./waveForm.css"

const formWaveElement = (ref) => ({
    container:ref,
    waveColor:"#eee",
    progressColor:"OrangeRed",
    cursorColor:"OrangeRed",
    barWidth:3,
    barRadius:3,
    responsive:true,
    height:150,
    normalize:true,
    partialRender:true
})

function WaveForm (){
    const url = "https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3"
    const waveformRef = useRef(null)
    const wavesurfer = useRef(null);
    const [playing, setPlay] = useState(false)
    const [volume, setVolume] = useState(0.5)
    
    useEffect(()=>{ 
        setPlay(false);
        
        // const options = formWaveElement(waveformRef.current)
        // wavesurfer.current = WaveSurfer.create(options);
        // wavesurfer.current.load(url);
        // wavesurfer.current.on("ready", function() {
        //     if (wavesurfer.current) {
        //       wavesurfer.current.setVolume(volume);
        //       setVolume(volume);
        //     }
        //   })
        // console.log(wavesurfer)
        // return () => wavesurfer.current.destroy();

    },[url])
    
    const handlePlayPause = () => {
        setPlay(!playing);
        wavesurfer.current.playPause();
      };
    
      const onVolumeChange = e => {
        const { target } = e;
        const newVolume = +target.value;
    
        if (newVolume) {
          setVolume(newVolume);
          wavesurfer.current.setVolume(newVolume || 1);
        }
      };

    return (
        <React.Fragment>
            <div id="waveform" ref={waveformRef} />
            <div className="controls">
                <button className = "controlsButton" onClick={handlePlayPause}>{!playing ? "Play" : "Pause"}</button>
                <input
                className = "volumeInput"
                type="range"
                id="volume"
                name="volume"
                min="0.01"
                max="1"
                step=".025"
                onChange={onVolumeChange}
                defaultValue={volume}
                />
                <label htmlFor="volume">Volume</label>
            </div>
        </React.Fragment>
    )
}

export default WaveForm