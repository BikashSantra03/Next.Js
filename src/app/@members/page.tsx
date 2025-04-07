import React from "react";

const members = async () => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("content is loading");
    }, 3000)
  );

  return <div className="border border-black w-[300px] h-[300px]">members</div>;
};

export default members;
