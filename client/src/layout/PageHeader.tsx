import React, { useState } from "react";
import  { useCookies } from "react-cookie";
import { useNavigate, Link } from "react-router-dom";
import { Menu, User, Search, Plus, Bell, ArrowLeft, Settings } from "lucide-react";
const PageHeader = () => {
  const navigate = useNavigate();
  const [cookie, setCookie] = useCookies(["access_token"])
  const [isShown, setisShown] = useState(false);
  return (
    <header className="bg-[rgb(0,0,32)] text-[#d3d3d3] z-30 sticky top-0 py-2">
      <nav className="sticky w-full top-0 px-3">
        <ul
          className={` ${
            isShown ? "hidden" : "flex"
          } justify-between my-2 items-center py-1`}
        >
          <li className="flex items-center text-[#5ccc2c] gap-2 list-none">
            <Menu />
          <Link className="flex text-[#5ccc5c]" to={cookie.access_token?"/profile":"/auth/login"}>
            <span className="flex gap-2 font-extrabold" onClick={() => navigate("/profile")}>
              <User /> user
            </span>
          </Link>
          </li>

          <li className="hidden sm:flex grow px-10 justify-center items-center list-none">
          <form className="grow max-w-[650px]  flex">
            <input
              type="search"
              placeholder="Enter your text"
              className="outline-0 text-xl bg-[#a0a0a0] text-black p-4 w-10/12 rounded-l-2xl grow"
            />
            <button type="submit" className="bg-[#348f34] text-black p-4 text-xl shrink-0 rounded-r-2xl">
              <Search></Search>
            </button>
          </form>
          </li>

          <li className="flex gap-4 list-none text-[#5ccc5c]">
            <span className="md:hidden" onClick={() => setisShown(true)}>
              <Search></Search>
            </span>
            <span className="">
              <Bell></Bell>
            </span>
            <span className="">
              <Settings/>
            </span>
            <a href="/create">
              <Plus />
            </a>
          </li>
        </ul>
        <form
          className={`${
            isShown ? "flex" : "hidden"
          } justify-around items-center gap-2 text-black`}
        >
          <span onClick={() => setisShown(false)}>
            <ArrowLeft />
          </span>
          <input
            type="text"
            placeholder="search..."
            className={`${
              isShown ? "block" : "hidden"
            }  w-[90%] text-black my-2 outline-0 bg-white p-1 rounded-xl text-white`}
          />
          <button type="submit">
          <Search></Search>
          </button>
        </form>
      </nav>
    </header>
  );
};

export default PageHeader;
