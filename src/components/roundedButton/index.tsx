import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function RoundedButton({ children, ...rest }: IButton) {
  return(
    <button className='mt-14 bg-[#1ED760] rounded-full px-8 py-3 text-[#2941AB] font-bold hover:scale-105' {...rest}>
      { children }
    </button>
  )
}

export { RoundedButton };