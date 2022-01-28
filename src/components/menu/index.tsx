import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerOverlay, Image, useDisclosure } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Login } from '../login';

interface IMenuProps {
  handleOpenLogin: () => void;
}

function Menu({ handleOpenLogin }: IMenuProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [openLogin, setOpenLogin] = useState(false);
  const btnRef = useRef<any>();

  function openLoginModal() {
    onClose();
    setOpenLogin(true);
  }

  return(
    <>
      <button className='text-white font-semibold hover:text-sp-green-main' onClick={onOpen}>
        <GiHamburgerMenu fontSize='1.5rem'/>
      </button>
      <Drawer
        size='sm'
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg='#000' p='1rem'>
          <DrawerCloseButton color='#FFF' size='lg'/>

          <DrawerBody>
            <div className='flex flex-col'>
              <a className='text-4xl font-bold text-white mb-5 hover:text-sp-green-main'>Premium</a>
              <a className='text-4xl font-bold text-white mb-5 hover:text-sp-green-main'>Suporte</a>
              <a className='text-4xl font-bold text-white mb-5 hover:text-sp-green-main'>Baixar</a>
              <div className='h-px w-8 mt-10 mb-10 bg-white'/>
              <a className='text-3xl font-medium text-white mb-5 hover:text-sp-green-main'>Inscrever-se</a>
              <button className='max-w-min text-3xl font-medium text-white mb-2 hover:text-sp-green-main' onClick={openLoginModal}>Entrar</button>
            </div>
          </DrawerBody>

          <DrawerFooter display='flex' justifyContent='flex-start'>
            <Image alt='Logo' src='icons/icon.svg' h='2rem'/>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Login
        isOpen={openLogin}
        onClose={() => setOpenLogin(false)}
      />
    </>
  )
}

export { Menu };