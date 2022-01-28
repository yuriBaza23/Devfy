import { Avatar, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import { BsPlayFill } from 'react-icons/bs';

function SingerCard() {
  const showPlayButton = useBreakpointValue({ base: 'small', md: 'all' })

  return(
    <div className="max-w-md w-full bg-sp-gray h-20 rounded flex shadow-lg group relative items-center cursor-pointer transition-all duration-100">
      <Avatar w='5rem' h='5rem' borderRadius='.25rem' borderRightRadius='0' src='https://www.capitalinicial.com.br/wp-content/uploads/2015/11/CAPITALINICIAL_CAPA_DVD.png'/>
      <div className="h-20 p-5 flex items-center">
        <h1 className="font-semibold text-white">Capital Inicial</h1>
      </div>
      { showPlayButton === 'all' && (
        <button className="flex items-center justify-center opacity-0 group-hover:opacity-100 ml-auto mr-5 h-10 w-10 bg-sp-green rounded-full shadow-lg hover:w-12 hover:h-12 duration-100">
          <BsPlayFill color='white'/>
        </button>
      ) }
    </div>
  )
}

export { SingerCard }