'use client'
import React from "react";
//-- COMPONENTs
import Carousel from "@/components/Carousel";
import { Hero, HalfImageSection, StepsSection } from "@/components/Sections";
import Steps from "@/components/Steps";
//-- ASSETs
import img1 from "@/assets/img1.jpg";
import img2 from "@/assets/img2.jpg";
import img3 from "@/assets/img3.jpg";
import desktop from '@/assets/Desktop.png'
import app from '@/assets/App.png'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-[45px] justify-between" data-aos='ease-in-out'>
      <Carousel src={img1} src1={img2} src2={img3} className="h-[450px] s-shadow" />

      <Hero/>

      <section className="s-gap s-padding">
        <h2 className="text-start">Dentre as mais de 1.000 empresas-clientes que utilizam o seu serviço estão:</h2>

      </section>

      
      <StepsSection className="lg:flex-row flex-wrap s-shadow items-center w-full bg-gradient-to-r from-zinc-50 to-zinc-200 light:bg-gradient-to-r light:from-zinc-800 light:to-zinc-900 gap-0">
        <Steps title="Ciclo de Desenvolvimento"/>
        <Steps number="2" title="Versionamento"/>
        <Steps number="3" title="Arquitetura"/>
        <Steps number="4" title="Banco de Dados"/>
      </StepsSection>

      <section className="s-gap s-padding">
        <h2 className="text-start">Integração & Testes</h2>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam cum error, doloremque illum dolorum neque ex hic mollitia illo. Veritatis similique, possimus vel quo voluptas repellat delectus expedita quia ullam.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam cum error, doloremque illum dolorum neque ex hic mollitia illo. Veritatis similique, possimus vel quo voluptas repellat delectus expedita quia ullam.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam cum error, doloremque illum dolorum neque ex hic mollitia illo. Veritatis similique, possimus vel quo voluptas repellat delectus expedita quia ullam.</p>
      </section>

      <HalfImageSection
        src={desktop}
        title="Website"
      >
        <ul className="flex flex-col gap-[8px] pl-[24px] list-disc *:text-[1.125rem]">
          <li>
            <span className="text-white font-bold">Informações Públicas: </span>
            Endereço, contato, termos de uso, etc.
          </li>
          <li>
            <span className="text-white font-bold">Linguagens: </span>
            HTML, CSS e JavaScript (back-end facultativo)
          </li>
          <li>
            <span className="text-white font-bold">Hospedagem: </span>
            ...
          </li>
        </ul>

        <h2 className="text-left text-white"> Blog e Aplicação Web </h2>
          <ul className="flex flex-col gap-[8px] pl-[24px] list-disc *:text-[1.125rem]">
            <li>
              <span className="text-white font-bold">Conteúdo dinâmico: </span>
              Cadastro, autenticação (clientes e/ou funcionários), acesso à informações privadas, etc.
            </li>
            <li>
              <span className="text-white font-bold">Linguagens: </span>
              React/Vue (front-end) | Node.js/Django (back-end)
            </li>
            <li>
              <span className="text-white font-bold">Hospedagem: </span>
              ...
            </li>
          </ul>


      </HalfImageSection>

      <section className="s-gap s-padding">
        <h2 className="text-start">Políticas de Dados, Backup & Técnicas de Segurança</h2>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, exercitationem! Blanditiis facere maxime a laudantium incidunt doloremque magni maiores dolorum, rerum numquam placeat, eos illum quibusdam, eius error dicta tempora?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, exercitationem! Blanditiis facere maxime a laudantium incidunt doloremque magni maiores dolorum, rerum numquam placeat, eos illum quibusdam, eius error dicta tempora?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, exercitationem! Blanditiis facere maxime a laudantium incidunt doloremque magni maiores dolorum, rerum numquam placeat, eos illum quibusdam, eius error dicta tempora?</p>

      </section>

      <HalfImageSection
        src={app}
        title="Aplicativo Mobile"
        className="lg:flex-row-reverse"
      >
        <ul className="flex flex-col gap-[8px] pl-[24px] list-disc *:text-[1.125rem]">
          <li>
            <span className="text-white font-bold">Multiplataforma: </span>
              disponível tanto na Apple Store (dispositivos iOS) quanto na Play Store (dispositivos Android)
          </li>
          <li>
            <span className="text-white font-bold">Linguagens: </span>
              Swift (iOS), Java (Android), React Native / Flutter (multiplataformas)
          </li>
          <li>
            <span className="text-white font-bold">Hospedagem: </span>
            ...
          </li>
        </ul>
      </HalfImageSection>
      

    </main>
  );
}
