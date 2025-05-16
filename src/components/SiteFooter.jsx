'use client'

import Link from 'next/link'
import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { PiInstagramLogoFill } from "react-icons/pi"
import { MdEmail } from "react-icons/md"

// Ícone que rola até o campo de e-mail com id="contato"
const EmailScrollIcon = () => {
  const handleScrollToEmail = () => {
    const emailField = document.getElementById("contato")
    if (emailField) {
      console.log("Rolando até o campo de e-mail...");
      emailField.scrollIntoView({ behavior: "smooth" })
    } else {
      console.warn("Campo de e-mail (id='contato') não encontrado.")
    }
  }

  return (
    <div
      onClick={handleScrollToEmail}
      className="cursor-pointer w-10 h-10 rounded-full bg-white text-black flex items-center justify-center"
      title="Ir para o campo de e-mail"
    >
      <MdEmail />
    </div>
  )
}

const SiteFooter = () => {
  return (
    <section className='bg-brandYellow pt-10 pb-8'>
      <div className="container">
        <div className="footer_items_container grid grid-cols-1 md:grid-cols-2 gap-y-10 lg:gap-y-0 lg:flex items-start justify-between">
          {/* Coluna da logo e texto */}
          <div className="logo_items">
            <img src="/images/Hero/logo_amarelo.png" alt="logo" className="h-36" />
            <p className='font_avenir font-normal text-xl text-black max-w-[460px] mx-auto text-justify mt-3'>
              Algum texto institucional sobre a empresa. Uma breve descrição para ajudar as pessoas a entender melhor quem somos.
            </p>

            {/* Ícones sociais */}
            <div className="social_links flex items-center justify-start gap-4 mt-5">
              <Link
                href="https://www.linkedin.com/in/ian-miranda-gomes-de-souza-3257a1222/"
                target="_blank"
                className='w-10 h-10 rounded-full bg-white text-black flex items-center justify-center'
              >
                <FaLinkedinIn />
              </Link>

              <Link
                href="https://www.instagram.com/"
                target="_blank"
                className='w-10 h-10 rounded-full bg-white text-black flex items-center justify-center'
              >
                <PiInstagramLogoFill />
              </Link>

              <EmailScrollIcon />
            </div>
          </div>

          {/* Links rápidos */}
          <div className="quick_links">
            <div className="links_tittle">
              <p className='font-poppins font-semibold text-xl text-black text-left pt-10'>Links rápidos</p>
            </div>
            <div className="links mt-4 flex flex-col items-start justify-start gap-6">
              <Link href="/services" className='font_avenir font-normal text-lg text-black hover:text-white duration-300'>Serviços</Link>
              <Link href="/projects" className='font_avenir font-normal text-lg text-black hover:text-white duration-300'>Portfolio</Link>
              <Link href="/team" className='font_avenir font-normal text-lg text-black hover:text-white duration-300'>Sobre Nós</Link>
            </div>
          </div>

          {/* Endereço */}
          <div className="address">
            <div className="links_tittle">
              <p className='font-poppins font-semibold text-xl text-black text-left pt-10'>Endereço</p>
            </div>
            <p className='font_avenir font-normal text-xl text-black text-left mt-6 max-w-[250px]'>
              Escritório Central<br />
              Avenida Exemplo, 123<br />
              Cidade, Estado - Brasil
            </p>
          </div>
        </div>

        {/* Rodapé final */}
        <div className="copy_rights mt-12">
          <p className='font_avenir font-normal text-xl text-black text-left'>
            © {new Date().getFullYear()} Nanno SCIC. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  )
}

export default SiteFooter
