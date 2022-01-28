import { ReactNode } from "react";
import { useRouter } from "next/router";

interface ILinkNavProps {
  icon: ReactNode;
  iconInactive: ReactNode;
  children: ReactNode;
  href: string;
}

function LinkNav({ children, icon, iconInactive, href }: ILinkNavProps) {
  const router = useRouter()

  if(router.pathname === href) {
    return(
      <a className="flex p-2 bg-sp-gray w-full h-10 rounded justify-start items-center px-5 text-white" href={href}>
        { icon }
        <text className="font-arial font-semibold text-sm ml-2">
          { children }
        </text>
      </a>
    )
  } else {
    return(
      <a className="flex p-2 w-full h-10 rounded justify-start items-center px-5 text-sp-gray-1 hover:text-white" href={href}>
        { iconInactive }
        <text className="font-arial font-semibold text-sm ml-2">
          { children }
        </text>
      </a>
    )
  }
}

export { LinkNav }