import { Box, Flex, HStack, Image, Stack } from "@chakra-ui/react"
import { ReactNode } from "react"
import { Sidebar } from "../sidebar"

interface IDevfyLayoutProps {
  children: ReactNode;
  controls: ReactNode;
}

function DevfyLayout({ children, controls }: IDevfyLayoutProps) {
  return(
    <Flex
      w='100vw'
      h='100vh'
      bg='#000'
      flexDir='column'
    >
      <Flex w='100%' h='90vh'>
        <Flex flexDir='column' w='15vw' minWidth='14rem' p='.7rem' display='flex' justifyContent='flex-start'>
          <Box px='1rem' pt='1rem'>
            <Image alt='Logo' src='icons/icon.svg' h='2.4rem' w='fit-content'/>
          </Box>
          <Sidebar/>
        </Flex>
        { children }
      </Flex>
      <HStack h='10vh' bg='#181818' borderTop='1px solid #282828'>
        { controls }
      </HStack>
    </Flex>
  )
}

export { DevfyLayout }