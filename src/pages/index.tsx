import { Center, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useCallback, useEffect } from 'react';
import { Header } from "../components/header";
import { RoundedButton } from "../components/roundedButton";
import { useSession } from 'next-auth/react';

function App() {
  const session = useSession();
  const router = useRouter();
  const changeDesign = useBreakpointValue({ base: 'base', lg: 'lg', xl: 'xl' })

  const goToPlayer = useCallback(() => {
    router.push('/player');
  }, [router])

  useEffect(() => {
    if(session.status === 'authenticated') {
      goToPlayer();
    }
  }, [session, goToPlayer]);

  return(
    <Flex flexDirection='column'>
      <div className={`flex flex-col ${changeDesign === 'xl' ? 'bg-hero' : 'bg-hero-2'} w-full h-screen bg-no-repeat bg-cover`}>
        <Header handleEnterClick={goToPlayer} breakpoints={changeDesign}/>

        <Center mt='auto' mb='auto' display='flex' flexDirection='column'>
          <Text 
            fontFamily='Montserrat' 
            fontSize={changeDesign === 'xl' ? '8.5rem' : changeDesign === 'lg' ? '5.5rem' : '4rem'} 
            fontWeight='800' 
            color='#1ED760' 
            w='70%' 
            textAlign='center' 
            lineHeight={changeDesign === 'xl' ? '11rem' : '6rem'} 
            >
              Escutar muda tudo
            </Text>
          <Text fontFamily='Montserrat' fontSize='1.15rem' fontWeight='600' color='#1ED760' w='70%' textAlign='center' mt='6'>Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito.</Text>
          <RoundedButton onClick={goToPlayer}>USE O DEVFY AGORA MESMO</RoundedButton>
        </Center>

      </div>
    </Flex>
  )
}

export default App;