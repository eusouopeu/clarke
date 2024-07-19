import React from 'react'
import clsx from 'clsx'


interface CardsProps {
  children: React.ReactNode
  className?: string
  tile?: boolean
}
export default function Cards({
  tile,
  children
}: CardsProps) {

  if (tile) {
    return (
      <div className='flex flex-col items-center justify-center w-full md:w-[50%] h-full py-[24px] px-[16px] gap-[16px] bg-gradient-to-r from-zinc-50 to-zinc-200 hover:from-emerald-100 hover:to-emerald-200 border-[1px] border-zinc-300'>
        {children}
      </div>
    )

  } else {
    return (
      <div className='flex flex-col gap-[16px] bg-gradient-to-b from-zinc-50 to-zinc-200 rounded-xl shadow-lg'>
        {children}
      </div>
    )
  }
}
