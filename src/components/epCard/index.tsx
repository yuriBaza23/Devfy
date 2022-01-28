import { Avatar, Image } from '@chakra-ui/react';
import React from 'react';

interface IEpCardProps {
  imageUrl: string;
  title: string;
  description: string;
  isMusic?: boolean;
  isSinger?: boolean;
}

function EpCard({ imageUrl, title, description, isMusic = false, isSinger = false }: IEpCardProps) {
  return(
    <div className="max-w-md w-full bg-sp-gray-2 p-4 rounded flex flex-col shadow-lg group relative items-start cursor-pointer hover:bg-sp-gray transition-all duration-100">
      { isSinger ? (
        <Avatar
          mt='auto'
          ml='auto'
          mr='auto'
          w='9rem'
          h='9rem'
          name={title}
          src={imageUrl}
        />
      ) : (
        <Image 
          alt="image ep card" 
          src={imageUrl} 
          w='100%'
          h="10rem"
          objectFit="cover"
        />
      ) }
      <p className="mt-2 font-semibold text-white w-full truncate">{title}</p>
      <span className="mt-2 mb-2 font-semibold text-sp-gray-1 text-xs">{isSinger ? 'Artista' : description}</span>
    </div>
  )
}

export { EpCard }