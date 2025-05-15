const getData = async () => {
  const res = await fetch(process.env.BASE_URL + "/api/BrandList")
  if (!res.ok) {
    throw new Error("BrandList Response Error ")
  }
  return res.json()
}

const imagesData = [
  { id: 1, image: "/icons/Activity.png", name: "Activity" },
  { id: 2, image: "/icons/Work.png", name: "Work" },
  { id: 3, image: "/icons/stats.png", name: "Stats" },
  { id: 4, image: "/icons/solved.png", name: "Solved" },
  { id: 5, image: "/icons/customer.png", name: "Customer" },
];

const Brand = () => {
  return (
    <div className='py-11 bg-brandsBG'>
      <div className="grid grid-cols-2 sm:flex items-center justify-between justify-items-center gap-y-10 container">
        {
          imagesData.map(brand => (
            <img key={brand.id} src={brand.image} alt={brand.name} />
          ))
        }
      </div>
    </div>
  );
};

export default Brand;
