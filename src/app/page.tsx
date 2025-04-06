
import { Merriweather } from "next/font/google";


const MerriweatherFont= Merriweather({
  weight:"400",
  subsets:["latin"],
  
})
const page = () => {
  return (
    <>
      <h1>Home Page</h1>
      <p className={`${MerriweatherFont.className}`}>Lorem ipsum dolor sit amet.</p>
    </>
  );
};

export default page;
