"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function NavBar() {
  const path = usePathname();

  return (
    <nav className="border-2 border-b-gray-400 bg-cream shadow-lg shadow-amber-50">
      <div className="flex items-center justify-between">
        <Link href="/" className="group hover:text-blue-500">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-yellow-500 group-hover:text-blue-500 md:size-10 md:mx-2"
            >
              <path
                fillRule="evenodd"
                d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                clipRule="evenodd"
              />
            </svg>
            <p className="md:text-3xl font-semibold">ArenApp</p>
          </div>
        </Link>
        <Link
          className={`inline-block font-semibold md:text-2xl md:hover:bg-dark-cream hover:rounded-lg my-2 p-2 ${path === "/register" ? "text-blue-500 underline decoration-2" : null}`}
          href="/register"
        >
          <div className="flex items-center">
            <svg
              className={`text-black md:size-8 ${path === "/register" ? "text-blue-500" : null}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M14 4.182A4.136 4.136 0 0 1 16.9 3c1.087 0 2.13.425 2.899 1.182A4.01 4.01 0 0 1 21 7.037c0 1.068-.43 2.092-1.194 2.849L18.5 11.214l-5.8-5.71 1.287-1.31.012-.012Zm-2.717 2.763L6.186 12.13l2.175 2.141 5.063-5.218-2.141-2.108Zm-6.25 6.886-1.98 5.849a.992.992 0 0 0 .245 1.026 1.03 1.03 0 0 0 1.043.242L10.282 19l-5.25-5.168Zm6.954 4.01 5.096-5.186-2.218-2.183-5.063 5.218 2.185 2.15Z"
                clipRule="evenodd"
              />
            </svg>
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
