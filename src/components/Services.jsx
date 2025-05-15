const servicesData = [
  {
    id: 1,
    title: "Geotecnia de Solos",
    des: "Estudos completos com ensaios de laboratório e sondagens de campo.",
    image1: "/images/service/image1.jpg",
    image2: "/images/service/image2.jpg",
    image3: "/images/service/image3.jpg",
    image4: "/images/service/image4.jpg",
  },
  {
    id: 2,
    title: "Topografia e Mapeamento",
    des: "Mapeamento digital e levantamento altimétrico com drones.",
    image1: "/images/service/image1.jpg",
    image2: "/images/service/image2.jpg",
    image3: "/images/service/image3.jpg",
    image4: "/images/service/image4.jpg",
  },
];

const Services = () => {
  return (
    <section className='pt-16 pb-20'>
      <div className="container">
        <div className="content">
          <p className='tagline_text'>Our All Services</p>
          <h2 className="sub_heading mt-4 max-w-[500px]">We Provide Best Web design services</h2>
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
