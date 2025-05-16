const servicesData = [
  {
    id: 1,
    title: "Projetos Asfálticos",
    des: "Confecção de projetos para CAUQ, CPA, TSD, SMA, Micro, Lama, AAQ/AAF, PMQ/PMF, com cimento asfáltico convencional ou polímero.",
    image1: "/images/service/image1.jpg",
    image2: "/images/service/image2.jpg",
    image3: "/images/service/image3.jpg",
    image4: "/images/service/image4.jpg",
  },
  {
    id: 2,
    title: "Ensaios em Solos",
    des: "Soluções em SBC, SC, BGS, SBTC, RF e controle in situ com Brucutu, mini CBR, compactação e granulometria.",
    image1: "/images/service/image1.jpg",
    image2: "/images/service/image2.jpg",
    image3: "/images/service/image3.jpg",
    image4: "/images/service/image4.jpg",
  },
  {
    id: 3,
    title: "Ensaios Técnicos",
    des: "Realização de ISC, compactação, LL/LP, densidade in situ, granulometria por peneiramento e sedimentação.",
    image1: "/images/service/image1.jpg",
    image2: "/images/service/image2.jpg",
    image3: "/images/service/image3.jpg",
    image4: "/images/service/image4.jpg",
  },
  {
    id: 4,
    title: "Ensaios Especiais",
    des: "Abrasão Los Angeles, índice de forma e lameralidade, adesividade, equivalente de areia e impurezas orgânicas.",
    image1: "/images/service/image1.jpg",
    image2: "/images/service/image2.jpg",
    image3: "/images/service/image3.jpg",
    image4: "/images/service/image4.jpg",
  },
  {
    id: 5,
    title: "Avaliações e Medições",
    des: "Deflexão com viga Benkelman, mancha de areia, espessura com sonda rotativa, IRI com perfilôgrafo e IGG.",
    image1: "/images/service/image1.jpg",
    image2: "/images/service/image2.jpg",
    image3: "/images/service/image3.jpg",
    image4: "/images/service/image4.jpg",
  },
  {
    id: 6,
    title: "Apoio à Certificação",
    des: "Retirada de materiais, organização de pastas, montagem de mapas de progressão e apoio à calibração.",
    image1: "/images/service/image1.jpg",
    image2: "/images/service/image2.jpg",
    image3: "/images/service/image3.jpg",
    image4: "/images/service/image4.jpg",
  }
];

const Services = () => {
  return (
    <section className='pt-10 pb-10'>
      <div className="container">
        <div className="content">
          <h2 className="sub_heading mt-4 max-w-[600px]">Oferecemos os Melhores Serviços</h2>
        </div>

        <div className="service_card_container grid grid-cols-1 md:grid-cols-2 gap-8 mt-[50px]">
          {servicesData.map(service => (
            <div key={service.id} className="service_card bg-white cursor-pointer shadow-brandShadow max-w-[604px] rounded-[20px] mx-auto px-9 pt-10 pb-11">
              <div className="card_content">
                <h4 className='font-poppins font-semibold text-[26px] text-black uppercase'>{service.title}</h4>
                <p className='font-poppins font-normal text-[#9D9D9D] capitalize mt-5'>{service.des}</p>
              </div>

              <div className="service_images_container mt-14">
                <div className="imgaes flex items-center justify-between gap-4 lg:gap-8">
                  <img className="rounded-lg w-2/3 h-full object-cover max-w-[358px] max-h-[164px]" src={service.image1} alt="services image" />
                  <img className="rounded-lg h-[164px] w-1/3 lg:w-[143px] object-cover" src={service.image2} alt="services image" />
                </div>

                <div className="imgaes flex items-center justify-between gap-2 lg:gap-8 mt-5">
                  <img className="rounded-lg w-1/3 lg:w-[257px] object-cover h-[263px]" src={service.image3} alt="services image" />
                  <img className="rounded-lg w-2/3 lg:w-[248px] object-cover h-[263px]" src={service.image4} alt="services image" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
