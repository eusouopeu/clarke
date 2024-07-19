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
      <div className='flex flex-col w-full md:w-1/2 h-full md:h-1/2 gap-[16px] bg-gradient-to-r from-zinc-50 to-zinc-200 hover:from-zinc-200 hover:to-zinc-300'>
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
