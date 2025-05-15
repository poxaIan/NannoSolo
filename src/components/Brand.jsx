const getData = async () => {
  const res = await fetch(process.env.BASE_URL + "/api/BrandList")
  if (!res.ok) {
    throw new Error("BrandList Response Error ")
  }
  return res.json()
}

const imagesData = [
  { id: 1, image: "/images/Hero/construtec.png", name: "Activity" },
  { id: 2, image: "/images/Hero/labotec.png", name: "Work" },
];

const Brand = () => {
  return (
    <div className="py-11 bg-brandsBG">
      
      <div className="grid grid-cols-2 sm:flex items-center justify-between justify-items-center gap-y-10 container">
        {imagesData.map((brand) => (
          <img
            key={brand.id}
            src={brand.image}
            alt={brand.name}
            className="w-96 h-48 object-contain"
          />
        ))}
      </div>
      
    </div>
  );
};

export default Brand;
