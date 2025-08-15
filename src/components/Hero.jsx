import Brand from "./Brand";
import Link from "next/link";


const Hero = () => {
  const title = "Consultoria e Controle Tecnológico";
  const description = "Atuamos com precisão técnica e soluções inovadoras para garantir a qualidade nas construções públicas e privadas.";

  const image1 = "/images/Ensaio de Moldagem de CP de concreto.jpeg";
  const image2 = "/images/Reciclagem com adição de Brita.jpeg";
  const image3 = "/images/ensaio piche.jpg";
  const image4 = "/images/ensaio_calda_cimento.jpeg";

  return (
    <section className="pt-0 pb-9">
      {/* Aqui começa a parte com fundo escuro */}
      <div className="bg-[#000000] py-10" style={{ color: "#acacad" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center container mx-auto">
          <div className="content_container mt-5 md:mt-0">
            <h1 className="sm:leading-[65px] leading-[50px] text-4xl sm:text-[50px] font-bold font_poppins max-w-[550px] text-left">
              {title}
            </h1>
            <p className="font_avenir text-lg font-normal max-w-[550px] text-left mt-3 sm:mt-0" style={{ color: "#ffffff" }}>
              {description}
            </p>
            <Link href="/services">
              <button className="font-poppins font-normal text-lg text-white mt-5 md:mt-[50px] bg-brandGreen px-[30px] py-5 hover:bg-brandGreen/90 duration-300">
                Conheça Nossos Serviços
              </button>
            </Link>

          </div>

          <div className="w-full order-first md:order-last lg:px-4">
            <div className="flex flex-wrap">
              <img className="w-1/3 lg:w-1/3 h-48 sm:h-64 p-2 object-cover rounded-lg" src={image1} alt="imagem 1" />
              <img className="w-2/3 lg:w-2/3 h-48 sm:h-64 p-2 object-cover rounded-lg" src={image2} alt="imagem 2" />
            </div>
            <div className="flex flex-wrap">
              <img className="w-2/3 lg:w-2/3 h-48 sm:h-64 p-2 object-cover rounded-lg" src={image3} alt="imagem 3" />
              <img className="w-1/3 lg:w-1/3 h-48 sm:h-64 p-2 object-cover rounded-lg" src={image4} alt="imagem 4" />
            </div>
          </div>
        </div>
      </div>

      {/* Marcas abaixo, fora do fundo escuro */}
      <div className="brand_container mt-20">
        <Brand />
      </div>
    </section>

  );
};

export default Hero;
