"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ArenLogo, PencilLogo } from "./Icons";

function NavBar() {
  const path = usePathname();

  return (
    <nav className="border-2 border-b-gray-400 bg-light-green shadow-lg shadow-amber-50">
      <div className="flex items-center justify-between">
        <Link href="/" className="group hover:text-blue-500">
          <div className="flex">
            <ArenLogo />
            <p className="md:text-3xl font-semibold">ArenApp</p>
          </div>
        </Link>
        <Link
          className={`inline-block font-semibold md:text-2xl md:hover:bg-dark-cream hover:rounded-lg my-2 p-2 ${path === "/register" ? "text-blue-500 underline decoration-2" : null}`}
          href="/register"
        >
          <div className="flex items-center">
            <PencilLogo path={path} />
            <p className="md:text-3xl font-semibold">Register</p>
          </div>
        </Link>
        <div>
          <Link
            className={`inline-block font-semibold md:text-lg md:hover:bg-dark-cream hover:rounded-lg mx-2 my-2 p-2 ${path === "/baby" ? "text-blue-500 underline decoration-2" : null}`}
            href="/baby"
          >
            Baby
          </Link>
          <Link
            className={`inline-block font-semibold md:text-lg md:hover:bg-dark-cream hover:rounded-lg mx-2 my-2 p-2 ${path === "/parents" ? "text-blue-500 underline decoration-2" : null}`}
            href="/parents"
          >
            Parents
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
