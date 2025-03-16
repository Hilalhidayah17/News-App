"use client";

import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleActivePath = (href: string): boolean => href === pathname;

  const router = useRouter();
  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setQuery(e.target.value);
  };
  const handleSearch = () => {
    redirect(`/search/${query}`);
  };

  return (
    <>
      <nav className="w-full bg-black text-white py-3">
        <ul className="flex  justify-between items-center px-6">
          <li className="w-28">
            <h1 className="font-EB-Gramond tracking-widest text-3xl ">
              <span className="text-pink-500">YN</span>ews
            </h1>
          </li>
          <li className=" flex relative md:w-full w-[200px] md:items-center md:justify-center">
            <div className="absolute right-6 md:top-3 md:left-71 flex justify-center items-center  hover:bg-gray-200 hover:rounded-full h-8 w-8 duration-200">
              <Search
                className=" text-gray-600 cursor-pointer "
                onClick={handleSearch}
              />
            </div>
            <div className="border-r h-[40px] absolute left-80 hidden md:block"></div>
            <input
              type="search"
              name="search"
              className="border border-gray-300 py-1 px-2 md:py-4 md:px-14 md:w-[500px] w-[170px] rounded-md md:ml-0 ml-7 "
              placeholder="Search for topics"
              onChange={handleQuery}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
          </li>
          <li className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </li>
          <li className="hidden md:flex"></li>
        </ul>
        <Separator className="my-2" />
        <ul
          className={`flex  w-full justify-between px-6 md:justify-center  md:flex-row items-center  md:space-y-0 md:space-x-6 text-lg font-serif font-medium text-center ${
            menuOpen ? "block" : "hidden md:flex"
          }`}
        >
          <Link href={"/"}>
            <li
              className={`cursor-pointer ${
                handleActivePath("/")
                  ? "underline underline-offset-2 decoration-pink-500"
                  : ""
              }`}
            >
              Home
            </li>
          </Link>
          <li className="border-r  h-[30px]"></li>

          <li
            onClick={() => router.push("/category/technology")}
            className={`cursor-pointer ${
              handleActivePath("/category/technology")
                ? "underline underline-offset-2 decoration-pink-500"
                : ""
            }`}
          >
            Tech
          </li>
          <li
            onClick={() => router.push("/category/politics")}
            className={`cursor-pointer ${
              handleActivePath("/category/politics")
                ? "underline underline-offset-2 decoration-pink-500"
                : ""
            }`}
          >
            Politics
          </li>
          <li
            onClick={() => router.push("/category/fashion")}
            className={`cursor-pointer ${
              handleActivePath("/category/fashion")
                ? "underline underline-offset-2 decoration-pink-500"
                : ""
            }`}
          >
            Fashion
          </li>
        </ul>
        <Separator className="my-2" />
      </nav>
    </>
  );
};

export default Navbar;
