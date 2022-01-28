import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { signIn, useSession } from 'next-auth/react';

interface ILoginProps {
  isOpen: boolean;
  onClose: () => void;
}

function Login({ isOpen, onClose }: ILoginProps) {
  function login() {
    signIn('github')
  }

  return(
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg='#161515' color='#fff'>
        <ModalHeader>Login</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Clique no botão para entrar usando sua conta do GitHub. É importante que tenha configurado um e-mail público.</Text>
        </ModalBody>
        <ModalFooter>
          <button className='flex items-center bg-sp-green-main rounded text-black px-8 py-3 font-bold hover:scale-105 transition-all duration-300' onClick={login}>
            <AiFillGithub/>
            <Text ml='.5rem'>Entrar com GitHub</Text>
          </button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export { Login };