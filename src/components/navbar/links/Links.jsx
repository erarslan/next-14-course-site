"use client";

import { useState } from "react";
import NavLink from "./navLink/navLink";
import Image from "next/image";
import { handleLogOut } from "@/lib/actions";

const links = [
  { title: "Homepage", path: "/" },
  { title: "About", path: "/about" },
  { title: "Blog", path: "/blog" },
  { title: "Contact", path: "/contact" },
];

const Links = ({ session }) => {
  const [isOpen, setOpen] = useState(false);
  const isAdmin = true;

  return (
    <div>
      <div className="flex gap-2 items-center max-md:hidden">
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <NavLink item={{ title: "Admin", path: "/admin" }} />
            )}
            <form action={handleLogOut}>
              <button className="bg-gray-600 rounded-lg p-3 font-bold">
                Log out
              </button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>

      <Image
        src="/menu.png"
        alt="hamburger logo"
        width="30"
        height="30"
        onClick={() => setOpen((prev) => !prev)}
        className="md:hidden cursor-pointer"
      />
      {isOpen && (
        <div className="hidden mobile-navbar">
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
