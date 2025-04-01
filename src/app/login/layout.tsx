import Link from "next/link";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      Layout
      <ul className="flex gap-5">
        <li className=" border border-2 p-1 bg-blue-200">
          <Link href={`/`}>Home Page</Link>
        </li>
        <li className=" border border-2 p-1 bg-blue-200">
          <Link href={`/login/loginuser`}>Login as Regular User</Link>
        </li>
        <li className=" border border-2 p-1 bg-blue-200">
          <Link href={`/login/loginadmin`}>Login as Admin </Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default Layout;
