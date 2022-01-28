import React from "react";
import { GrFormAdd } from "react-icons/gr";

function CreatePlaylistButton() {
  return(
    <button className="group flex p-2 w-full h-10 rounded justify-start items-center px-5 text-sp-gray-1 hover:text-white">
      <div className="flex w-6 h-6 bg-sp-gray-1 group-hover:bg-white items-center justify-center">
        <GrFormAdd/>
      </div>
      <text className="font-arial font-semibold text-sm ml-2">
        Criar playlist
      </text>
    </button>
  )
}

export { CreatePlaylistButton }