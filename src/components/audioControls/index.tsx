import { Image } from '@chakra-ui/react';
import React, { useState, useEffect, useRef } from 'react';
import { FiHeart } from 'react-icons/fi';
import { Controls } from './controls';

interface IAudioControlsProps {
  tracks: ITrack[];
}

export interface ITrack {
  title: string;
  artist: string;
  audioSrc: any;
  image: string;
  liked: boolean;
}

function AudioControls({ tracks }: IAudioControlsProps) {
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [durationFormated, setDurationFormated] = useState("00:00");
  const [timeFormated, setTimeFormated] = useState("00:00");

  const { title, artist, audioSrc, image, liked } = tracks[trackIndex];

  const audioRef = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio(audioSrc) : undefined
  );
  const intervalRef = useRef<ReturnType<any>>();
  const isReady = useRef(false);

  const duration = audioRef.current?.duration;

  function convertDuration(type: number, time: number) {
    if(type === 0) {
      if(audioRef.current?.duration){
        var seconds = audioRef.current?.duration % 60;
        var foo = audioRef.current?.duration - seconds;
        var minutes = foo / 60;
        var secondsString = seconds.toString();
        if(seconds < 10){
          secondsString = "0" + seconds.toString();
        }
        var fixedCurrentTime = minutes + ":" + secondsString;
        setDurationFormated(fixedCurrentTime.substring(0, 4));
      }
    } else {
      var seconds = time % 60;
        var foo = time - seconds;
        var minutes = foo / 60;
        var secondsString = seconds.toString();
        if(seconds < 10){
          secondsString = "0" + seconds.toString();
        }
        var fixedCurrentTime = minutes + ":" + secondsString;
        setTimeFormated(fixedCurrentTime.substring(0, 4));
    }
  }

  function startTimer() {
    clearInterval(intervalRef.current);

	  intervalRef.current = setInterval(() => {
      if (audioRef.current?.ended) {
        toNextTrack();
      } else {
        if(audioRef.current){
          setTrackProgress(audioRef.current.currentTime);
          convertDuration(1, audioRef.current.currentTime);
        }
      }
    }, 1000);
  }

  function changeProgress(value: number) {
    clearInterval(intervalRef.current);
    if(audioRef.current) {
      audioRef.current.currentTime = value;
      setTrackProgress(audioRef.current.currentTime);
    }
  }

  function onScrubEnd() {
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  }

  function toPrevTrack() {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  }

  function toNextTrack() {
    if(trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1)
    } else {
      setTrackIndex(0)
    }
  }

  function setPlayOrPause() {
    setIsPlaying(!isPlaying);
  }

  useEffect(() => {
    convertDuration(0, 0);
  }, [duration])

  useEffect(() => {
    if(isPlaying) {
      audioRef.current?.play();
      startTimer();
    } else {
      clearInterval(intervalRef.current);
      audioRef.current?.pause();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying])

  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      audioRef.current?.pause();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      clearInterval(intervalRef.current);
    }
  }, []);

  useEffect(() => {
    audioRef.current?.pause();

    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackIndex]);

  return(
    <div className="flex w-full p-5 items-center justify-between" style={{ height: '9.9vh' }} id="audio-controls">
      <div className="flex items-center w-64">
        <Image 
          h='6vh' 
          w='6vh'
          src={image}
          alt='music image'
        />
        <div className="flex flex-col items-left ml-3 w-64">
          <a className="text-white font-semibold text-sm hover:underline hover:text-white" href={`/albuns/${Math.random()}`}>{title}</a>
          <a className="text-sp-gray-1 text-xs hover:underline hover:text-white" href={`/artist/${Math.random()}`}>{artist}</a>
        </div>
        <button className="flex">
          <FiHeart color='#b8b8b8'/>
        </button>
      </div>

      <Controls 
        duration={duration}
        durationFormated={durationFormated}
        timeFormated={timeFormated}
        isPlaying={isPlaying} 
        trackProgress={trackProgress}
        handlePrevClick={toPrevTrack} 
        handleNextClick={toNextTrack}
        handlePlayPauseClick={setPlayOrPause}
        handleChangeProgress={(e) => changeProgress(Number(e.target.value))}
        handleKeyUpProgress={onScrubEnd}
        handleMouseUpProgress={onScrubEnd}
      />

      <div className="flex items-center w-80">

      </div>
    </div>
  )
}

export { AudioControls }