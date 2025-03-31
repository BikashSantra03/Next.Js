"use client";

import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  console.log(router);

  const handleClick = (pageName: string) => {
    router.push(`${pageName}`);
  };
  return (
    <div className="flex flex-col items-start">
      <button onClick={() => handleClick("login")}>Go to login page</button>
      <button onClick={() => router.push("/colors")}>Go to colors page</button>
      <button onClick={() => router.push("/about")}>
        Go to login about page
      </button>
    </div>
  );
};

export default page;
