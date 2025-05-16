import React from "react";

const imagesData = [
  { id: 1, image: "/images/Hero/construtec.png", name: "Construtec" },
  { id: 2, image: "/images/Hero/labotec.png", name: "Labotec" },
];

const Brand = () => {
  return (
    <div className="py-11 bg-white">
      <div className="grid grid-cols-2 sm:flex items-center justify-between justify-items-center gap-y-10 container">
        {imagesData.map((brand, index) => (
          <React.Fragment key={brand.id}>
            <img
              src={brand.image}
              alt={brand.name}
              className="w-96 h-48 object-contain"
            />
            {index === 0 && (
              <span className="text-3xl font-bold text-black mx-4">
                PARCERIAS
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Brand;
