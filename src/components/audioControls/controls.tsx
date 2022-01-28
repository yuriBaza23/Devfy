import { HStack, useBreakpointValue } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { MdPause, MdPlayArrow, MdSkipNext, MdSkipPrevious } from "react-icons/md";

interface IControls {
  isPlaying: boolean;
  duration?: number;
  durationFormated: string; 
  timeFormated: string; 
  trackProgress: number;
  handlePrevClick: () => void;
  handleNextClick: () => void;  
  handlePlayPauseClick: () => void;
  handleChangeProgress: (event: ChangeEvent<HTMLInputElement>) => void;
  handleKeyUpProgress: () => void;
  handleMouseUpProgress: () => void;
}

function Controls({ 
  isPlaying, 
  handlePrevClick, 
  handleNextClick, 
  handlePlayPauseClick, 
  trackProgress, 
  duration,
  handleKeyUpProgress,
  handleChangeProgress,
  handleMouseUpProgress,
  durationFormated, 
  timeFormated
}: IControls) {
  const showButtons = useBreakpointValue({ base: 'small', md: 'all' })

  return(
    <div className={`flex flex-col max-w-2xl w-full items-center ${ showButtons !== 'all' && 'ml-10' }`}>
      <HStack>
        { showButtons === 'all' && (
          <button className="text-sp-gray-1 text-sm hover:underline hover:text-white">
            <h1>Tocar aleatóriamente</h1>
          </button>
        ) }
        <button className="text-sp-gray-1 hover:text-white" onClick={handlePrevClick}>
          <MdSkipPrevious size='1.3rem'/>
        </button>
        { isPlaying ? (
          <button className="flex items-center justify-center rounded-full text-sp-gray-2 w-8 h-8 bg-white hover:scale-110 transition-all duration-300" onClick={handlePlayPauseClick}>
            <MdPause size='1.3rem'/>
          </button>
        ) : (
          <button className="flex items-center justify-center rounded-full text-sp-gray-2 w-8 h-8 bg-white hover:scale-110 transition-all duration-300" onClick={handlePlayPauseClick}>
            <MdPlayArrow size='1.3rem'/>
          </button>
        ) }
        <button className="text-sp-gray-1 hover:text-white" onClick={handleNextClick}>
          <MdSkipNext size='1.3rem'/> 
        </button>
        { showButtons === 'all' && (
          <button className="text-sp-gray-1 text-sm hover:underline hover:text-white">
            <h1>Repetir álbum/música</h1>
          </button>
        ) }
      </HStack>
      <div className="flex items-center justify-between w-full mt-2 max-w-2xl">
        <span className="text-sp-gray-1 text-xs">{timeFormated}</span>
        <input className="h-1 w-full mr-2 ml-2 rounded" 
          type="range" 
          value={trackProgress}
          step="1"
          min="0"
          max={duration ? duration : `${duration}`}
          onChange={(e) => handleChangeProgress(e)}
          onMouseUp={handleMouseUpProgress}
          onKeyUp={handleKeyUpProgress}
        />
        <span className="text-sp-gray-1 text-xs">{durationFormated}</span>
      </div>
    </div>
  )
}

export { Controls };