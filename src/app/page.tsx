import Image from "next/image";
import React from "react";
import KingFisherImage from "../../public/KingFsiher Image.jpg";

const page = () => {
  return (
    <>
      <div>Home page</div>

      <Image src={KingFisherImage} alt="KingFisherImage" />

      <Image
        src="https://cdn.britannica.com/35/3635-050-96241EC1/Scarlet-macaw-ara-macao.jpg"
        alt="bird-img"
        width={300}
        height={300}
      />
    </>
  );
};

export default page;
