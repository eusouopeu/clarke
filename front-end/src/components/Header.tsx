import Link from 'next/link'
import React from 'react'
import ToggleMenu from './ToggleMenu'


export default function Header() {
  return (
    <header className='fixed z-20 flex items-center justify-between w-full py-[12px] px-[25px] bg-gradient-to-b  from-white from-60% to-zinc-400 shadow-xl text-emerald-400'>
      <h2 className='text-[16px] font-display font-semibold'><span className='font-bold'>Clarke</span>Energia</h2>

      <ToggleMenu />
    </header>
  )
}
