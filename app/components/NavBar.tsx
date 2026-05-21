"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ArenLogo, PencilLogo } from "./Icons";
import { useSession, signOut } from "next-auth/react";


function NavBar() {
  const path = usePathname();
  const { data: session } = useSession();

  if (session)
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
            className={`inline-block font-semibold md:text-2xl md:hover:bg-dark-cream hover:rounded-lg my-2 p-2 ${path === "/register" ? "text-blue-500 underline decoration-2" : ""}`}
            href="/register"
          >
            <div className="flex items-center">
              <PencilLogo path={path} />
              <p className="md:text-3xl font-semibold">Register</p>
            </div>
          </Link>
          <div>
            <Link
              className={`inline-block font-semibold md:text-lg md:hover:bg-dark-cream hover:rounded-lg mx-2 my-2 p-2 ${path === "/baby" ? "text-blue-500 underline decoration-2" : ""}`}
              href="/baby"
            >
              Baby
            </Link>
            <Link
              className={`inline-block font-semibold md:text-lg md:hover:bg-dark-cream hover:rounded-lg mx-2 my-2 p-2 ${path === "/parents" ? "text-blue-500 underline decoration-2" : ""}`}
              href="/parents"
            >
              Parents
            </Link>
            <button
              className="inline-block font-semibold md:text-lg md:hover:bg-dark-cream hover:rounded-lg mx-2 my-2 p-2"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              Sign out
            </button>
          </div>
        </div>
      </nav>
    );

  return (
    <nav className="border-2 border-b-gray-400 bg-light-green shadow-lg shadow-amber-50">
      <div className="flex items-center justify-between">
        <Link href="/" className="group hover:text-blue-500">
          <div className="flex">
            <ArenLogo />
            <p className="md:text-3xl font-semibold">ArenApp</p>
          </div>
        </Link>
        <div>
          <Link
            className={`inline-block font-semibold md:text-lg md:hover:bg-dark-cream hover:rounded-lg mx-2 my-2 p-2 ${path === "/login" ? "text-blue-500 underline decoration-2" : ""}`}
            href="/login"
          >
            Sign in
          </Link>
          <Link
            className={`inline-block font-semibold md:text-lg bg-brown text-white hover:bg-opacity-90 rounded-lg mx-2 my-2 p-2 ${path === "/signup" ? "opacity-80" : ""}`}
            href="/signup"
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
