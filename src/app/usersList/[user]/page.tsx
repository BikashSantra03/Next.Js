import React from 'react'

const page = async ({ params }: {params:{user:string}}) => {
    const {user} = params;
  console.log(user);
  return <div>{user}</div>;
};

export default page