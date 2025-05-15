const StatList = () => {
  const data = {
    followers: "12K+",
    solved: "4.8K",
    customers: "2.7K",
    projects: "350+"
  };

  return (
    <section className='py-10 sm:py-16'>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-[30px]">

        <div className="w-full px-[47px] py-[71px] rounded-[20px] shadow-statsShadow flex items-center justify-center flex-col stats">
          <img src="/icons/stats.png" alt="followers" />
          <p className='font-poppins font-semibold text-3xl text-black mt-5'>{data.followers}</p>
          <p className='font-poppins font-medium text-[16px] text-black mt-1 text-center'>Seguidores</p>
        </div>

        <div className="w-full px-[47px] py-[71px] rounded-[20px] shadow-statsShadow flex items-center justify-center flex-col stats">
          <img src="/icons/solved.png" alt="solved problems" />
          <p className='font-poppins font-semibold text-3xl text-black mt-5'>{data.solved}</p>
          <p className='font-poppins font-medium text-[16px] text-black mt-1 text-center'>Problemas resolvidos</p>
        </div>

        <div className="w-full px-[47px] py-[71px] rounded-[20px] shadow-statsShadow flex items-center justify-center flex-col stats">
          <img src="/icons/customer.png" alt="happy customers" />
          <p className='font-poppins font-semibold text-3xl text-black mt-5'>{data.customers}</p>
          <p className='font-poppins font-medium text-[16px] text-black mt-1 text-center'>Clientes satisfeitos</p>
        </div>

        <div className="w-full px-[47px] py-[71px] rounded-[20px] shadow-statsShadow flex items-center justify-center flex-col stats">
          <img src="/icons/project.png" alt="projects" />
          <p className='font-poppins font-semibold text-3xl text-black mt-5'>{data.projects}</p>
          <p className='font-poppins font-medium text-[16px] text-black mt-1 text-center'>Projetos</p>
        </div>

      </div>
    </section>
  );
};

export default StatList;
