import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'


interface CarouselProps {
  className?: string
  src: any
  src1?: any
  src2?: any
  src3?: any
  children?: React.ReactNode
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
      autoplay={{ delay: 3000 }}
      scrollbar={{ draggable: true }}
      className={clsx( "w-full h-[500px] brightness-50 s-shadow", className )}
    >
      <SwiperSlide>
        <Image src={src} alt="Imagem 1" layout="fill" objectFit="cover" />
      </SwiperSlide>
      <SwiperSlide><Image src={src1} alt="Imagem 2" layout="fill" objectFit="cover" /></SwiperSlide>
      {src2 && (<SwiperSlide><Image src={src2} alt="Imagem 3" layout="fill" objectFit="cover" /></SwiperSlide>)}
      {src3 && (<SwiperSlide><Image src={src3} alt="Imagem 4" layout="fill" objectFit="cover" /></SwiperSlide>)}
      {children}
    </Swiper>
  )
}
