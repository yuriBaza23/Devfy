import { Avatar, Menu, MenuButton, MenuItem, MenuList, useBreakpointValue } from "@chakra-ui/react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import { MdArrowDropDown, MdOutlineOpenInNew } from "react-icons/md";

function DropdownUser() {
  const router = useRouter();
  const session = useSession();
  const showDrop = useBreakpointValue({ base: 'small', md: 'all' });

  async function logout() {
    await signOut();
    window.location.href = '/';
  }

  return(
    <Menu variant='unstyled' autoSelect={false} colorScheme='black'>
      <MenuButton>
        <button className="w-fit h-8 bg-black p-1 flex rounded-full items-center">
          <Avatar w='1.5rem' h='1.5rem' src={session.data?.user?.image || undefined}/>
          { showDrop === 'all' && (
            <>
              <h1 className="mx-2 text-white font-semibold text-sm">{session.data?.user?.name}</h1>
              <MdArrowDropDown color="white" fontSize='1.5rem'/>
            </>
          ) }
        </button>
      </MenuButton>
      <MenuList bg='#161515' color='#fff' bordercolor='transparent'>
        <MenuItem w='100%' _hover={{ bg: '#2b2a2a' }}>
          <div className="flex items-center justify-between w-full">
            Conta
            <MdOutlineOpenInNew/>
          </div>
        </MenuItem>
        <MenuItem _hover={{ bg: '#2b2a2a' }}>Perfil</MenuItem>
        <MenuItem onClick={logout} _hover={{ bg: '#2b2a2a' }}>Sair</MenuItem>
      </MenuList>
    </Menu>
  )
}

export { DropdownUser };