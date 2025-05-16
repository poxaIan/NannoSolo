import React from 'react'

const Subscribe = () => {
    return (
        <section className='pb-24 pt-24 bg-white text-black'>
            <div className="container">
                <p className='tagline_text text-center text-black'>ENTRE EM CONTATO</p>
                <h2 className='sub_heading max-w-[600px] mx-auto text-center capitalize mt-5'>
                    Receba Conteúdo Técnico Direto da Nanno Solo
                </h2>
                <p className='font_avenir text-[#8B8B8B] font-medium text-center mt-1'>
                    Deixe seu e-mail e receba informações sobre nossas soluções em solos, pavimentação e controle tecnológico.
                </p>
                <div className="imput_container max-w-[600px] mx-auto relative mt-10">
                    <input
                        className='w-full border border-black py-5 px-4 placeholder:text-[#8B8B8B] focus:outline-brandOrange'
                        placeholder='Seu melhor e-mail aqui!'
                        type="email"
                    />
                    <button className='bg-brandYellow py-4 px-6 font-poppins font-medium text-white absolute right-2 top-1/2 -translate-y-1/2'>
                        Enviar
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Subscribe
