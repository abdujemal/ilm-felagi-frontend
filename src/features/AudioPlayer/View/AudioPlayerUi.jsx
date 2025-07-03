import React, { useEffect, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import { useAudio } from "../Controller/audioContext.jsx";

const AudioPlayerUi = () => {
  const {
    currentTrack,
    nextTrack,
    prevTrack,
    setIsPlaying,
    audioPlayerRef,
  } = useAudio();

  // const [currentTime, setCurrentTime] = useState(0);
  // const [duration, setDuration] = useState(0);

  // // Track time updates
  // useEffect(() => {
  //   const audioEl = audioPlayerRef.current?.audio?.current;
  //   if (!audioEl) return;

  //   const updateTime = () => setCurrentTime(audioEl.currentTime);
  //   const updateDuration = () => setDuration(audioEl.duration || 0);

  //   audioEl.addEventListener("timeupdate", updateTime);
  //   audioEl.addEventListener("loadedmetadata", updateDuration);

  //   return () => {
  //     audioEl.removeEventListener("timeupdate", updateTime);
  //     audioEl.removeEventListener("loadedmetadata", updateDuration);
  //   };
  // }, [currentTrack]);

  // const formatTime = (sec) =>
  //   isNaN(sec) ? "00:00" : new Date(sec * 1000).toISOString().substring(14, 19);



  if (!currentTrack) return <div></div>;

  return (
    <div className="w-full shadow-md bg-bg1-light dark:bg-bg1-dark ">

      <div className=" max-w-screen-2xl m-auto z-50 bg-bg1-light dark:bg-bg1-dark ">
        {/* Time display */}
        {/* <div className="flex justify-between text-xs px-4 pt-2 text-gray-600 dark:text-gray-300">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div> */}

        {/* Audio player */}
        <AudioPlayer
            
            ref={audioPlayerRef}
            src={currentTrack?.url}
            autoPlay
            showSkipControls
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onClickNext={()=>nextTrack()}
            onClickPrevious={()=>prevTrack()}
            onEnded={nextTrack}
            header={`${currentTrack?.title} በ${currentTrack?.ustaz}`}
            
            style={
              {
                border: "0",
                boxShadow: "none",
                color: "inherit"
              }
            }
            className="rounded-none border-none shadow-none text-text-light dark:text-text-dark m-auto bg-white dark:bg-bg1-dark"
          />
      </div>
    </div>
    
      //  <AudioPlayer
      //     ref={audioPlayerRef}
      //     src={currentTrack?.url}
      //     autoPlay
      //     showSkipControls
          
      //     onPlay={() => setIsPlaying(true)}
      //     onPause={() => setIsPlaying(false)}
      //     onClickNext={()=>nextTrack()}
      //     onClickPrevious={()=>prevTrack()}
      //     onEnded={nextTrack}
      //     header={currentTrack?.title}
      //     className="rounded-none max-w-screen-2xl border-none m-auto bg-bg1-light dark:bg-bg1-dark"
      //   />
    
    
  );
};

export default AudioPlayerUi;
