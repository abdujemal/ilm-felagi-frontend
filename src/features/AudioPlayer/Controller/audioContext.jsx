import React, { createContext, useContext, useState, useRef, useEffect } from "react";
import 'react-h5-audio-player/lib/styles.css';

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null)
  const audioPlayerRef = useRef();

  const currentTrack = playlist[currentIndex];

  const playTrack = (index) => {
    if (playlist[index]) {
      setCurrentIndex(index);
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const audioEl = audioPlayerRef.current?.audio?.current;
    if (!audioEl) return;

    const updateTime = () => setDuration(audioEl.currentTime);
    const updateDuration = () => {};

    audioEl.addEventListener("timeupdate", updateTime);
    audioEl.addEventListener("loadedmetadata", updateDuration);

    return () => {
      audioEl.removeEventListener("timeupdate", updateTime);
      audioEl.removeEventListener("loadedmetadata", updateDuration);
    };
  }, [currentTrack]);


  useEffect(() => {
    console.log({isPlaying});
    
    if(!isPlaying && currentCourse?._id) {
      console.log("saveing progress to local storage", currentCourse._id, currentIndex);
      saveCourseProgress();
    }
  },[isPlaying, currentCourse?._id])

  const saveCourseProgress = () => {
    console.log("seconds", duration);
    if(duration === 0) {
      return;
    }
    const savedCoursesStr = localStorage.getItem("courses") ?? "[]"
    var courses = JSON.parse(savedCoursesStr)
    if(courses.filter((v,i, a) => v._id === currentCourse._id).length > 0){
      courses = courses.map((v,i)=> v._id === currentCourse._id ? {...v, dateTime: new Date(), currentIndex: currentIndex, duration: duration,} : v)//[...courses,{...currentCourse, currentIndex: currentIndex, duration: duration,}];
      setCurrentCourse({...currentCourse, currentIndex: currentIndex, duration: duration,});
      localStorage.setItem("courses", JSON.stringify(courses));
      return;
    }
    courses = [...courses,{...currentCourse, dateTime: new Date(), currentIndex: currentIndex, duration: duration,}];
    localStorage.setItem("courses", JSON.stringify(courses));

    //seting current course
    setCurrentCourse({...currentCourse, currentIndex: currentIndex, duration: duration,});

    console.log("Course saved to local storage");
      
  }

  const tooglePlayingState = (playing) => {
    const audio = audioPlayerRef.current?.audio?.current;
    if (audio) {
      if(playing == true){
        audio.play();
      }else{
        audio.pause();
      }
      setIsPlaying(playing);
    }
  };

  const nextTrack = () => {
    setCurrentIndex((prev) =>
      prev < playlist.length - 1 ? prev + 1 : 0
    );
  };

  const prevTrack = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : playlist.length - 1
    );
  };
  

  return (
    <AudioContext.Provider
      value={{
        playlist,
        setPlaylist,
        currentIndex,
        setCurrentIndex,
        currentCourse,
        setCurrentCourse,
        currentTrack,
        isPlaying,
        setIsPlaying,
        playTrack,
        nextTrack,
        prevTrack,
        audioPlayerRef,
        tooglePlayingState,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);
