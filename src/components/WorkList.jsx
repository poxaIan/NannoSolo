const WorkList = () => {
  const workLists = [
    {
      icon: "/icons/Activity.png",
      title: "Análises Técnicas",
      des: "Realizamos ensaios técnicos para avaliação de solos, asfaltos e concreto com alta precisão."
    },
    {
      icon: "/icons/stats.png",
      title: "Relatórios Detalhados",
      des: "Fornecemos laudos completos com gráficos, tabelas e interpretações técnicas de fácil entendimento."
    },
    {
      icon: "/icons/project.png",
      title: "Acompanhamento de Projetos",
      des: "Monitoramos o desempenho de obras civis, oferecendo suporte com dados confiáveis para tomada de decisão."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="section_content">
          <p className="mb-4 tagline_text">O que fazemos</p>
          <h2 className="sub_heading max-w-[500px]">
            Soluções perfeitas para o crescimento do seu projeto
          </h2>
        </div>
        <div className="grid md:grid-cols-3 items-center mt-11">
          {workLists.map((item, index) => (
            <div key={index} className="py-[50px] px-[30px] card md:max-w-[380px]">
              <img src={item.icon} alt="ícone" />
              <h3 className="font-poppins font-semibold text-2xl text-left text-black mt-4">
                {item.title}
              </h3>
              <p className="font_avenir font-normal text-lg text-black mt-4">
                {item.des}
              </p>
              <button className="font_avenir text-lg font-normal rounded-lg bg-transparent hover:bg-greenLite duration-300 px-5 py-[15px] mt-11">
                <span className="flex items-center gap-2">
                  Saiba mais
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
