import { Image } from "@chakra-ui/react";
import React, { useState } from 'react';
import { Login } from "../login";
import { Menu } from "../menu";

interface IHeaderProps {
  handleEnterClick: () => void;
  breakpoints?: string;
}

function Header({ handleEnterClick, breakpoints }: IHeaderProps) {
  const [openLogin, setOpenLogin] = useState(false);

  function openLoginModal() {
    setOpenLogin(true);
  }

  return(
    <div className={`bg-black w-full flex items-center justify-center ${breakpoints === 'xl' || breakpoints === 'lg' ? 'h-20' : 'h-14'}`}>
      <div className={`flex max-w-6xl w-full items-center justify-between ${breakpoints === 'xl' ? 'max-w-6xl' : breakpoints === 'lg' ? 'max-w-4xl' : 'max-w-3xl'} px-10 py-2`}>
        <Image alt='Logo' src='icons/icon.svg' h={breakpoints === 'xl' || breakpoints === 'lg' ? '2.4rem' : '1.7rem'} w='fit-content'/>

        { breakpoints === 'base' ? (
          <Menu handleOpenLogin={() => {}}/>
        ) : (
          <div className='max-w-md w-full flex items-center justify-between'>
            <a className='text-white font-bold hover:text-sp-green-main' href='#'>Premium</a>
            <a className='text-white font-bold hover:text-sp-green-main' href='#'>Suporte</a>
            <a className='text-white font-bold hover:text-sp-green-main' href='#'>Baixar</a>
            <div className='w-px h-5 bg-white'/>
            <a className='text-white font-bold hover:text-sp-green-main' href='#'>Inscrever-se</a>
            <button className='text-white font-bold hover:text-sp-green-main' onClick={openLoginModal}>Entrar</button>
          </div>
        ) }
      </div>
      <Login
        isOpen={openLogin}
        onClose={() => setOpenLogin(false)}
      />
    </div>
  )
}

export { Header };