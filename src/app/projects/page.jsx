import AllProjects from "@/components/AllProjects"
import Breadcrumb from "@/components/Breadcrumb"
import Subscribe from "@/components/Subscribe"

const Projects = () => {
  return (
    <>
      {/* <div className=" pt-10 pb-10 bg-bgGray">
        <div className="container">
          <h1 className='heading'>Todos os Clientes</h1>
          <div className="navigation">
            <Breadcrumb />
          </div>
        </div>
      </div>*/}


      <AllProjects />
      <Subscribe />
    </>
  )
}

export default Projects