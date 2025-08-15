const servicesData = [
  {
    id: 1,
    title: "Projetos Asfálticos",
    des: "Projetos asfálticos completos para todas as técnicas de pavimentação, com CAP convencional ou modificado por polímero.",
    image1: "/images/service/asfalto/Aplicacao de massa asfaltica (1).JPG",
    image2: "/images/service/asfalto/Determinação de deflexão pela Viga Benkelman- RJ- BR-101 (2).jpg",
    image3: "/images/service/asfalto/Determinação de deflexão pela Viga Benkelman- RJ- BR-101 (5).jpg",
    image4: "/images/service/asfalto/Ensaio de viga pekema.jpg",
  },
  {
    id: 2,
    title: "Geotecnia e Ensaios de Solo",
    des: "Caracterização e estudos de solos com ensaios simples e especiais, seguindo rigorosamente as normas técnicas (ABNT 021:2024, NOV 2031 e DNIT 031:2024).",
    image1: "images/service/solo/Ensaio de Sedimentação de solos finos (1).jpg",
    image2: "images/service/solo/Ensaio não destrutivo com uso do exclerômetro -BR-365-RO (2).jpg",
    image3: "images/service/solo/Reciclagem com adição de Brita (1).jpg",
    image4: "images/service/solo/Sondagem para simples reconhecimento BR-232 (1).jpg",
  }
];

const Services = () => {
  return (
    <section className='pt-10 pb-10 bg-bgGrayTeam'>
      <div className="container">
        <div className="content">
          <h2 className="font-bold font_poppins text-4xl text-center mt-4 text-white">Oferecemos os Melhores Serviços</h2>
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
