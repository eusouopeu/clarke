import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'


interface CarouselProps {
  className?: string
  src: string
  src1: string
  src2: string
  src3: string
  children: React.ReactNode
}
export default function Carousel({
  className,
  src,
  src1,
  src2,
  src3,
  children
}: CarouselProps) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 5000 }}
      scrollbar={{ draggable: true }}
      className={clsx( "w-full h-[400px] brightness-50 s-shadow", className )}
    >
      <Image src={src} alt="Imagem 1" layout="fill" objectFit="cover" />
      {src1 && (<Image src={src1} alt="Imagem 2" layout="fill" objectFit="cover" />)}
      {src2 && (<Image src={src2} alt="Imagem 3" layout="fill" objectFit="cover" />)}
      {src3 && (<Image src={src3} alt="Imagem 4" layout="fill" objectFit="cover" />)}
    </Swiper>
  )
}
