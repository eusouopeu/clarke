import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='fixed flex justify-between w-full p-[16px] bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl'>
      <h2>Clarke Energia</h2>

      <nav><ul>
        <li>
          <Link href="/sobre">Sobre</Link>
        </li>
      </ul></nav>
    </header>
  )
}
