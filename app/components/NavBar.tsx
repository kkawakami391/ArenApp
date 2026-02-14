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
            {/* <svg */}
            {/*   className={`text-black md:size-8 ${path === "/register" ? "text-blue-500" : null}`} */}
            {/*   aria-hidden="true" */}
            {/*   xmlns="http://www.w3.org/2000/svg" */}
            {/*   width="24" */}
            {/*   height="24" */}
            {/*   fill="currentColor" */}
            {/*   viewBox="0 0 24 24" */}
            {/* > */}
            {/*   <path */}
            {/*     fillRule="evenodd" */}
            {/*     d="M14 4.182A4.136 4.136 0 0 1 16.9 3c1.087 0 2.13.425 2.899 1.182A4.01 4.01 0 0 1 21 7.037c0 1.068-.43 2.092-1.194 2.849L18.5 11.214l-5.8-5.71 1.287-1.31.012-.012Zm-2.717 2.763L6.186 12.13l2.175 2.141 5.063-5.218-2.141-2.108Zm-6.25 6.886-1.98 5.849a.992.992 0 0 0 .245 1.026 1.03 1.03 0 0 0 1.043.242L10.282 19l-5.25-5.168Zm6.954 4.01 5.096-5.186-2.218-2.183-5.063 5.218 2.185 2.15Z" */}
            {/*     clipRule="evenodd" */}
            {/*   /> */}
            {/* </svg> */}
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
