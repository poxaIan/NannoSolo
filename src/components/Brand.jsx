import React from "react";

const imagesData = [
  { id: 1, image: "/images/Hero/construtec.png", name: "Construtec" },
  { id: 2, image: "/images/Hero/labotec.png", name: "Labotec" },
];

const Brand = () => {
  return (
    <div className="py-8 bg-white">
      <div className="container mx-auto flex justify-center items-center gap-10">
        {/* PARCERIAS + linha */}
        <div className="flex items-center gap-4">
          <span className="text-5xl font-bold text-black">PARCERIAS</span>
          <div className="h-36 w-[4px] bg-black" />
        </div>

        {/* Logos */}
        <div className="flex items-center gap-10">
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
    </div>
  );
};

export default Brand;
