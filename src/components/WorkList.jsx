const WorkList = () => {
  const workLists = [
    {
      icon: "/icons/forms.png",
      title: "Ensaios de Campo",
      des: "Realizamos sondagens, análises granulométricas, ensaios de compactação e ISC para avaliar as características físicas e mecânicas dos solos com alto rigor técnico.",
      cta: "Saiba Mais"
    },
    {
      icon: "/icons/icon3.png",
      title: "Laudos Técnicos",
      des: "Entregamos relatórios completos com tabelas, gráficos e interpretações técnicas baseadas nas normas vigentes, facilitando decisões assertivas em obra.",
      cta: "Ver Exemplo de Laudo"
    },
    {
      icon: "/icons/icon3.2.png",
      title: "Gestão de Obras",
      des: "Monitoramos o desempenho de obras civis, oferecendo suporte com dados confiáveis para tomada de decisão e também precauções a serem seguidas.",
      cta: "Conheça Nosso Processo →"
    }
  ];

  return (
    <section className="pt-16 bg-brandYellow">
      <div className="container">
        <div className="section_content">
          <p className="text-4xl mb-4  pb-12 sm:text-[50px] font-bold font_poppins">O que Fazemos</p>

        </div>
        <div className="grid md:grid-cols-3 gap-8 items-start">

          {workLists.map((item, index) => (
            <div key={index} className="card md:max-w-[380px] h-full flex flex-col items-start justify-start">
              {/* Ícone e título lado a lado */}
              <div className="flex items-center gap-4">
                <img src={item.icon} alt="ícone" className="w-14 h-14" />
                <h3 className="font-poppins font-semibold text-2xl text-black">
                  {item.title}
                </h3>
              </div>

              <p className="font_avenir font-normal text-lg text-black mt-4">
                {item.des}
              </p>

              <button className="font_avenir text-lg font-normal bg-transparent bg-white duration-300 px-5 py-[15px] mt-6">
                <span className="flex items-center gap-2">
                  {item.cta}
                  <img src="/icons/arrow.png" alt="seta" />
                </span>
              </button>


            </div>




          ))}
        </div>

        <>
          <h2 className="sub_heading text-center text-4xl py-16">
            Soluções perfeitas para o crescimento do seu projeto
          </h2>
        </>
      </div>
    </section>
  );
};

export default WorkList;
