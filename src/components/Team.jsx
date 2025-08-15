import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


// Dados locais em vez de API
const members = [
  {
    id: 1,
    name: "Cleber Gusmão B.",
    formation: "Engenheiro Civil ",
    image: "/images/Team/cleber.png",
    linkedin: "https://www.linkedin.com/in/cleber-gusm%C3%A3o/",
    instagram: "",
    email: ""
  },
  {
    id: 2,
    name: "Ian Souza",
    formation: "Engenheiro de Computação",
    image: "/images/Team/ian.jpg",
    linkedin: "https://www.linkedin.com/in/ian-miranda-gomes-de-souza-3257a1222/",
    instagram: "https://www.instagram.com/ian_mgs/",
    email: ""
  },
  {
    id: 3,
    name: "Luciano Roberto Messias",
    formation: "Preposto de contrato/Coordenador de Projetos",
    image: "/images/Team/Luciano.jpeg",
    linkedin: "https://www.linkedin.com/in/lucianot%C3%A9cnicodeinspe%C3%A7%C3%A3ol%C3%ADderdeequipe/?originalSubdomain=br",
    instagram: "",
    email: ""
  },
  {
    id: 4,
    name: "Nilo Fabiano Flores Silva",
    formation: "",
    image: "/images/Team/image.png",
    linkedin: "",
    instagram: "",
    email: ""
  },
];



const Team = () => {
  return (
    <section className='pt-10 pb-10 bg-bgGrayTeam'>
      <div className="container">
        <div className="content">
          <h2 className="font-bold font_poppins text-4xl text-center text-white mt-4 ">Conheça Nossa Equipe</h2>
        </div>

        <div className="team_member grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {
            members.map(member =>
              <div key={member.id} className="member shadow-teamShadow rounded-[20px] bg-white">
                <div className="image_container relative">
                  <img className="object-cover w-full h-full max-h-[387px] rounded-t-[20px]" src={member.image} alt="team member" />
                  <div className="social_links flex items-center justify-between bg-white py-4 px-5 shadow-teamShadow rounded-[25px] absolute bottom-8 gap-4 left-1/2 -translate-x-1/2">
                    <Link className="text-[#737588] hover:text-brandYellow duration-300" href={member.linkedin}><FaLinkedinIn /></Link>
                    <div className="line bg-[#E3E3E3] w-[1px] h-4" />
                    <Link className="text-[#737588] hover:text-brandYellow duration-300" href={member.instagram}><FaInstagram /></Link>
                    <div className="line bg-[#E3E3E3] w-[1px] h-4" />
                    <a
                      href={member.email}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#737588] hover:text-brandYellow duration-300"
                    >
                      <MdEmail />
                    </a>

                  </div>
                </div>
                <div className='pt-7 pb-12 text-center'>
                  <h3 className='text-[#101A29] font-poppins text-[30px] font-semibold'>{member.name}</h3>
                  <p className="text-[#737588] font-avenir text-lg mt-2">{member.formation}</p>
                </div>

              </div>
            )
          }
        </div>
      </div>
    </section>
  );
};

export default Team;
