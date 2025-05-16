const WorkList = () => {
  const workLists = [
    {
      icon: "/icons/investigation_inv.png",
      title: "Ensaios de Campo",
      des: "Realizamos sondagens, análises granulométricas, ensaios de compactação e ISC para avaliar as características físicas e mecânicas dos solos com alto rigor técnico.",
      cta: "Saiba Mais"
    },
    {
      icon: "/icons/report_inv.png",
      title: "Laudos Técnicos",
      des: "Entregamos relatórios completos com tabelas, gráficos e interpretações técnicas baseadas nas normas vigentes, facilitando decisões assertivas em obra.",
      cta: "Ver Exemplo de Laudo"
    },
    {
      icon: "/icons/blueprint_iv.png",
      title: "Gestão de Obras",
      des: "Monitoramos o desempenho de obras civis, oferecendo suporte com dados confiáveis para tomada de decisão.",
      cta: "Conheça Nosso Processo →"
    }
  ];

  return (
    <section className="py-16 bg-brandYellow">
      <div className="container">
        <div className="section_content">
          <p className="mb-4 tagline_text">O que fazemos</p>
          <h2 className="sub_heading max-w-[500px]">
            Soluções perfeitas para o crescimento do seu projeto
          </h2>
        </div>
        <div className="grid md:grid-cols-3 items-center mt-11">
          {workLists.map((item, index) => (
            <div key={index} className="py-[50px] px-[30px] card md:max-w-[380px] h-full flex flex-col items-start justify-start">
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

              <button className="font_avenir text-lg font-normal rounded-lg bg-transparent bg-white duration-300 px-5 py-[15px] mt-auto">
                <span className="flex items-center gap-2">
                  {item.cta}
                  <img src="/icons/arrow.png" alt="seta" />
                </span>
              </button>
            </div>


          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkList;
