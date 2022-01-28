import { HStack, useBreakpointValue } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { DropdownUser } from "./dropdownUser";

function Navbar() {
  const session = useSession();
  const showDrop = useBreakpointValue({ base: 'small', md: 'all' });

  return(
    <div className="fixed h-16 p-5 px-10 flex items-center justify-between bg-sp-gray-0 z-50" style={{ width: showDrop === 'all' ? '85vw' : '55vw' }}>
      <HStack spacing="1rem">
        <button className="w-8 h-8 bg-sp-black-op rounded-full flex items-center justify-center">
          <FiChevronLeft color="white" fontSize='1.5rem'/>
        </button>
        <button className="w-8 h-8 bg-sp-black-op rounded-full flex items-center justify-center">
          <FiChevronRight color="white" fontSize='1.5rem'/>
        </button>
      </HStack>

      <DropdownUser/>
    </div>
  )
}

export { Navbar };