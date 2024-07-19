import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='flex flex-col justify-center p-[64px] gap-[64px] lg:flex bg-black text-white'>

      <ul className='flex flex-col gap-[24px] text-white *:text-[12px]'>
        <li>
          <span className='text-white font-bold'>CNPJ:</span>
          <br/>
          xx.xxx.xxx/xxxx-xx
        </li>
        <li>
          <span className='text-white font-bold'>Endereço:</span>
          <br/>
          Rua dos Pinheiros, 610, Escritório 41
          <br/>
          05.422-902, São Paulo, SP
        </li>
        <li>
          <span className='text-white font-bold'>Contato:</span>
          <br/>
          +55 (11) 93409-0834
          <br/>
          <span className='underline'>contato@clarke.com.br</span>
        </li>
        <li className='flex gap-[16px]'>
          <span className='text-white font-bold'>Siga-nos:</span>
          <br/>
          
        </li>
      </ul>

      <div>
        <h6 className='text-start'>Destaques:</h6>
      </div>

      <div>
        <h6 className='text-start'>A Clarke apoia:</h6>
      </div>

      <ul className='flex flex-col text-white'>
        <li>
          <Link href={''} target='_blank'> Política de Privacidade </Link>
        </li>
        <li>
          <Link href={''} target='_blank'> Trabalhe Conosco </Link>
        </li>
        <li>
          <Link href={''} target='_blank'> Desperdiçômetro </Link>
        </li>
        <li>
          <Link href={''} target='_blank'> Blog </Link>
        </li>
      </ul>

      

    </footer>
  )
}
