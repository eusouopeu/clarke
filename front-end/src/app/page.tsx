'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from 'aos';
import 'swiper/css';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import Steps from "@/components/Steps";
import { Hero } from "@/components/Sections";
import Cards from "@/components/Cards";
import img1 from "@/assets/img1.jpg";
import img2 from "@/assets/img2.jpg";
import img3 from "@/assets/img3.jpg";

AOS.init();
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-[45px] justify-between" data-aos='ease-in-out'>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 5000 }}
        scrollbar={{ draggable: true }}
        className="w-full h-[400px] brightness-50 s-shadow"
      >
        <Image src={img1} alt="Imagem 1" layout="fill" objectFit="cover" />
        <Image src={img2} alt="Imagem 2" layout="fill" objectFit="cover" />
        <Image src={img3} alt="Imagem 3" layout="fill" objectFit="cover" />
      </Swiper>

      <Hero/>

      <section className="s-gap s-padding">
        <h2 className="text-start">Dentre as mais de 1.000 empresas-clientes que utilizam o seu serviço estão:</h2>

      </section>

      
      <section data-aos='' className="s-gap s-shadow items-center justify-center w-full py-[24px] px-[24px] bg-gradient-to-r from-zinc-50 to-zinc-200 light:bg-gradient-to-r light:from-zinc-800 light:to-zinc-900">
        <Steps/>
        <Steps number="2"/>
        <Steps number="3"/>
        <Steps number="4"/>
      </section>

      <section className="s-padding s-gap s-shadow bg-gradient-to-r from-emerald-300 to-green-400">
        <h2>Economize com sustentabilidade</h2>

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla quo iusto eligendi tenetur quae inventore saepe similique? Voluptates, dolores modi dolorum vel fugiat provident dolor ut blanditiis labore quibusdam id! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, laudantium. Et voluptatum voluptatem maxime nostrum consequuntur praesentium vitae facere obcaecati odio reprehenderit, necessitatibus repellat eum vero repellendus dolorem numquam distinctio.</p>
      </section>

    </main>
  );
}
