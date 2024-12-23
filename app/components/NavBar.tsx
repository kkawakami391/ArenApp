import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <nav className="bg-cream">
      <div>
        <Link href="/">HOME</Link>
        <Link href="/regist">REGIST</Link>
        <Link href="/about">ABOUT US</Link>
      </div>
    </nav>
  );
}

export default NavBar;
