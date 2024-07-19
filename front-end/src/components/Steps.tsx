import React from 'react'
import Cards from './Cards'


interface StepsProps {
  number?: string,
  title?: string,
  text?: string
}
export default function Steps({
  number,
  title,
  text
}: StepsProps) {
  return (
    <Cards tile>
      <h3 className='text-[2rem] leading-none font-black'>
        <span className='text-emerald-400 text-[80px] font-bold'> {number || '1'} </span>
        <br/>
        {title || 'Titulo'}
      </h3>

      <p>{text || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto libero odio minus delectus aut, neque tempore modi quam laudantium? Dolor natus molestiae optio quibusdam sint culpa ratione a, recusandae fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam officia molestiae quam et aliquam labore magni soluta ex provident asperiores! Nihil quibusdam eius, consequatur veritatis totam aspernatur maiores quis cupiditate.'}</p>
    </Cards>
  )
}
