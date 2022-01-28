import React from "react";
import { AiFillHeart } from "react-icons/ai";

function LikedMusicsButton() {
  return(
    <button className="group flex p-2 w-full h-10 rounded justify-start items-center px-5 text-sp-gray-1 hover:text-white">
      <div className="flex w-6 h-6 bg-[url('../../public/icons/likedMusicsInactive.png')] group-hover:bg-[url('../../public/icons/likedMusicsActive.png')] items-center justify-center">
        <AiFillHeart/>
      </div>
      <text className="font-arial font-semibold text-sm ml-2">
        Músicas Curtidas
      </text>
    </button>
  )
}

export { LikedMusicsButton }