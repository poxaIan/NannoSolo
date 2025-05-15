import Link from "next/link";
import { parseDate } from "@/utils/helper";

const FeatureProject = () => {
  const featureProjects = [
    {
      title: "Projeto Principal",
      description: "Aplicativo moderno com foco em UX",
      image: "/images/ensaio_calda_cimento.jpeg",
      live: "#",
      updated_at: "2024-11-10"
    },
    {
      title: "Projeto Secundário",
      image: "/images/Ensaio de Moldagem de CP de concreto.jpeg",
      live: "#",
      created_at: "2024-10-15"
    },
    {
      title: "Projeto de Concreto",
      image: "/images/Ensaio de Calda de cimento.jpeg",
      live: "#",
      created_at: "2024-09-12"
    },
    {
      title: "Projeto de Penetração",
      image: "/images/Ensaio de Viga Benkelman.jpg",
      live: "#",
      created_at: "2024-08-01"
    },
    {
      title: "Projeto de Penetração",
      image: "/images/Ensaio de Viga Benkelman.jpg",
      live: "#",
      created_at: "2024-08-01"
    }
  ];

  const withoutFirstProject = featureProjects.slice(1);

  return (
    <section className="pt-16 pb-20 bg-bgGreenLite">
      <div className="container">
        <div className="feature_project_content">
          <p className="tagline_text">Projetos em Destaque</p>
          <h2 className="sub_heading mt-6 max-w-[500px]">
            Soluções perfeitas para o crescimento do seu negócio
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-[30px] mt-[70px] projects_container">
          <div className="first_project mb-5 lg:mb-0">
            <div className="porject">
              <Link href={featureProjects[0].live}>
                <img
                  className="lg:h-[531px] w-full rounded-[20px] object-cover"
                  src={featureProjects[0].image}
                  alt={featureProjects[0].title}
                />
              </Link>
              <p className="text-brandSecound/80 font_poppins font-normal text-sm mt-4">
                App Design - {parseDate(featureProjects[0].updated_at)}
              </p>
              <h4 className="text-2xl font-bold font_poppins text-brandSecound mt-[10px]">
                {featureProjects[0].title}
              </h4>
            </div>
          </div>

          <div className="other_project">
            <div className="grid grid-cols-2 items-start gap-[30px]">
              {withoutFirstProject.map((project, index) => (
                <div key={index} className="porject">
                  <Link href={project.live}>
                    <img
                      className="rounded-[20px]"
                      src={project.image}
                      alt={project.title}
                    />
                  </Link>
                  <p className="text-brandSecound/80 font_poppins font-normal text-sm mt-4">
                    App Design - {parseDate(project.created_at)}
                  </p>
                  <h4 className="text-lg font-bold font_poppins text-brandSecound text-left mt-[10px] max-w-[263px]">
                    {project.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureProject;
