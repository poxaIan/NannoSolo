import Link from "next/link";

// MOCK: substituindo o fetch temporariamente
const getData = async () => {
  return [
    {
      id: 1,
      title: "JDS, Engenharia e Consultoria Ltda.",
      image: "/images/projects/jds.png",
      description: `
        BR-101/RJ – Coleta de amostras indeformadas para ensaios de cisalhamento, sondagem e coleta de materiais para inspeção de ensaios.<br /><br />
        BR-230/BA – Inventário dos defeitos superficiais do pavimento, levantamento das irregularidades e deflexões admissíveis.
      `,
    },
    {
      id: 2,
      title: "RODOPLEX ENGENHARIA LTDA.",
      image: "/images/projects/rodoplex.png",
      description: `
        Acompanhamento do controle tecnológico na usina de asfalto.<br />
        Confecção de projetos de CAUQ, PMF, CPA e TSD nas obras do Aeroporto de Jacarepaguá - RJ.
      `,
    },
    {
      id: 3,
      title: "M.NETO, Sondagens e Estudos Geológicos Ltda.",
      image: "/images/projects/mneto.png",
      description: `
        Projeto da Estação GNC – Investigação com sondagens utilizando Cone de Penetração Dinâmico (DCP).
      `,
    },
    {
      id: 4,
      title: "VALLE SUL, Construtora Ltda.",
      image: "/images/projects/vallesul.png",
      description: `
        BR-101/RJ – Levantamento das deflexões admissíveis e ensaios para classificação de solos tropicais.
      `,
    },
    {
      id: 5,
      title: "SANTA LUZIA CONSTRUTORA LTDA.",
      image: "/images/projects/santaluzia.png",
      description: `
        Viaduto da BR-101/Itaguaí/RJ – Acompanhamento da implantação do novo viaduto, CAUQ – Terra Armada, concretagem.<br />
        Rodovia União Indústria/RJ – Ensaios com Pendulo Britânico, Mancha de Areia e relatório PGQ “As Built”.
      `,
    },
    {
      id: 6,
      title: "COBA, Consultores para Obras, Barragens e Planejamento Ltda.",
      image: "/images/projects/coba.png",
      description: `
        Implantação do BRS/Ciclovia – Niterói/RJ – Perfis geotécnicos individuais com sondagens SPT e coleta de amostras para investigação geológica.
      `,
    },
  ];
};


const AllProjects = async () => {
  const projects = await getData();

  return (
    <section className='pt-10 pb-10 bg-bgGrayTeam text-white'>
      <div className="container">
        <div className="content text-center">
          <h2 className="sub_heading mt-4 max-w-[500px] mx-auto text-white">
            Veja Nossos Últimos Clientes
          </h2>
        </div>

        <div className="projects_container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map(project => (
            <div
              key={project.id}
              className="group project bg-white px-6 pt-6 pb-8 rounded-[20px] shadow-brandShadow hover:shadow-lg transition duration-300"
            >
              <img
                className="rounded-[20px] w-full h-[200px] object-contain"
                src={project.image}
                alt={`Imagem do ${project.title}`}
              />
              <h4 className="font-poppins font-semibold text-xl text-black uppercase text-left mt-6">
                {project.title}
              </h4>

              {/* Descrição oculta por padrão, visível no hover */}
              <p
                className="text-sm text-gray-500 mt-2 text-left transition-all duration-300 ease-in-out opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[200px] overflow-hidden"
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
            </div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
