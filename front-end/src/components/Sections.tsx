import clsx from 'clsx'
import React from 'react'


interface HeroProps {
  className?: string
  type?: string
  children?: React.ReactNode
}
export function Hero({
  className,
}: HeroProps) {

  return (
    <section className={clsx( "absolute s-gap justify-between s-padding z-10 flex flex-col lg:flex-row pt-[60px] text-white", className )}>
      <div>
        <h6 className="text-emerald-400"><span className="font-medium text-white">#o</span>futuro<span className="font-medium text-white">é</span>livre</h6>
        <h2 className="font-display text-start my-[12px]">
          A Clarke ajuda empresas a economizar até <span className="text-emerald-400">40%</span> na conta de luz
        </h2>
        <p className=''>
          A Clarke é um marketplace do Mercado Livre de Energia que ajuda negócios com gastos mensais de <span className="text-emerald-400 font-bold">mais de R$ 10 mil por mês</span> a economizar na conta de luz.
        </p>
      </div>

      <form action="" className='flex flex-col w-full p-[16px] gap-[8px] bg-gradient-to-b from-zinc-50/20 to-zinc-100/20 backdrop-blur-sm rounded-lg text-zinc-100'>
        <label htmlFor="nome">
          Nome da Empresa:
        </label>
        <input id='nome' type="text" placeholder="Clarke Energia" className='py-[8px] px-[16px] bg-slate-100/70 placeholder:text-zinc-900 rounded-xl shadow-lg' readOnly/>
        <label htmlFor="ramo">
          Ramo:
        </label>
        <input id='ramo' type="text" placeholder="Energia, MarketPlace, FinTech" className='py-[8px] px-[16px] bg-slate-100/70 placeholder:text-zinc-900 rounded-xl shadow-lg' readOnly/>
        <label htmlFor="tamanho">
          Tamanho:
        </label>
        <input id='tamanho' type="text" placeholder="Pequeno porte (1.000)" className='py-[8px] px-[16px] bg-slate-100/70 placeholder:text-zinc-900 rounded-xl shadow-lg' readOnly/>
        <label htmlFor="nome">
          Produtos:
        </label>
        <input id='nome' type="text" placeholder="Aplicação Web e App Mobile" className='py-[8px] px-[16px] bg-slate-100/70 placeholder:text-zinc-900 rounded-xl shadow-lg' readOnly/>

      </form>
    </section>
  )
}