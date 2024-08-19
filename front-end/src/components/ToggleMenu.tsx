import React from 'react'
import { Bars3BottomLeftIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'


export default function ToggleMenu() {


  return (
    <div>
      <div className='lg:hidden'>
        <Bars3BottomLeftIcon className='absolute right-[25px] top-[10px] w-[20px] h-[20px] fill-black' />

        <nav className='hidden flex-col items-center justify-center px-[48px]'><ul className='flex flex-col gap-[24px] text-white'>
          <li>
            <Link href={'./SobreNos'}> Sobre nós </Link>
          </li>
          <li>
            <Link href={'./SobreNos'}> Sobre nós </Link>
          </li>
          <li>
            <Link href={'./SobreNos'}> Sobre nós </Link>
          </li>
        </ul></nav>
      </div>
      
      <nav className='hidden lg:flex gap-[24px]'>
        <ul className='flex items-center gap-[16px] text-black'>
          <li>
            <Link href={'./SobreNos'}> Sobre nós </Link>
          </li>
          <li>
            <Link href={'./SobreNos'}> Sobre nós </Link>
          </li>
          <li>
            <Link href={'./SobreNos'}> Sobre nós </Link>
          </li>
          <li>
            <Link href={'./SobreNos'}> Sobre nós </Link>
          </li>
        </ul>

        <button>
          Dê um 10 pro nosso trabalho
        </button>
      </nav>
    </div>
  )
}
