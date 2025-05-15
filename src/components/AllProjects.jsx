import Link from "next/link";

// MOCK: substituindo o fetch temporariamente
const getData = async () => {
  return [
    { id: 1, title: "Projeto 1", image: "/images/projects/logo1.jpg" },
    { id: 2, title: "Projeto 2", image: "/images/projects/logo2.jpg" },
    { id: 3, title: "Projeto 3", image: "/images/projects/logo4.jpg" },
    { id: 4, title: "Projeto 4", image: "/images/projects/logo4.jpg" },
    { id: 5, title: "Projeto 5", image: "/images/projects/logo5.png" },
    { id: 6, title: "Projeto 6", image: "/images/projects/logo6.png" },
  ];
};

const AllProjects = async () => {
  const projects = await getData();

  return (
    <section className='pt-16 pb-20'>
      <div className="container">
        <div className="content text-center">
          <p className='tagline_text'>Todos os Projetos</p>
          <h2 className="sub_heading mt-4 max-w-[500px] mx-auto">
            Visualize os Projetos com Identidade Visual
          </h2>
        </div>

        <div className="projects_container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map(project => (
            <div key={project.id} className="project bg-white px-6 pt-6 pb-8 rounded-[20px] shadow-brandShadow hover:shadow-lg transition duration-300">
              <img
                className="rounded-[20px] w-full h-[250px] object-cover"
                src={project.image}
                alt={`Imagem do ${project.title}`}
              />
              <h4 className="font-poppins font-semibold text-xl text-black uppercase text-left mt-6">
                {project.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
