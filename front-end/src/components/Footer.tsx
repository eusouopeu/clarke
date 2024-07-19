import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import destaques from '../assets/Destaques.png'
import empresa from '../assets/Empresa.png'
import clarkeapoia from '../assets/ClarkeApoia.png'


export default function Footer() {
  return (
    <footer className='flex flex-col lg:flex-row justify-center p-[64px] gap-[64px] lg:flex bg-black text-white'>

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
        <h6>Destaques:</h6>
        <Image src={destaques} alt='Destaques' />
      </div>

      <div>
        <h6>A Clarke apoia:</h6>
        <Image src={clarkeapoia} alt='Clarke Apoia' />
      </div>


      <div>
        <ul className='flex flex-col text-white w-fit'>
          <li>
            <Link href={''} target='_blank' className=''> Política de Privacidade </Link>
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

        <Image src={empresa} alt='Empresa' className='max-w-[160px] max-h-[160px]' />
      </div>

    </footer>
  )
}
