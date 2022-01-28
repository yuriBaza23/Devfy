import { Divider, Stack } from "@chakra-ui/react";
import { LinkNav } from "./Link";
import { RiHome5Fill, RiHome5Line, RiSearchFill, RiSearchLine } from "react-icons/ri";
import { BiLibrary } from "react-icons/bi";
import { CreatePlaylistButton } from "./CreatePlaylist";
import { LikedMusicsButton } from "./LikedMusics";

function Sidebar() {
  return(
    <>
      <Stack mt='1.5rem'>
        <LinkNav 
          icon={<RiHome5Fill fontSize='1.2rem'/>} 
          iconInactive={<RiHome5Line fontSize='1.2rem'/>} 
          href="/"
        >
            Início
        </LinkNav>
        <LinkNav 
          icon={<RiSearchFill fontSize='1.2rem'/>}
          iconInactive={<RiSearchLine fontSize='1.2rem'/>} 
          href="/search"
        >
          Buscar
        </LinkNav>
        <LinkNav 
          icon={<BiLibrary fontSize='1.2rem'/>}
          iconInactive={<BiLibrary fontSize='1.2rem'/>} 
          href="/search"
        >
          Sua Biblioteca
        </LinkNav>
      </Stack>

      <Stack mt='1.5rem' spacing="0">
        <CreatePlaylistButton/>
        <LikedMusicsButton/>
      </Stack>

      <Divider mt='.5rem' color='#868686' opacity='.2' w='12vw' ml='auto' mr='auto'/>
    </>
  )
}

export { Sidebar }