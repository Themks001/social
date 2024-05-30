import React from "react";
import { useCookies } from "react-cookie";
import {
  Home,
  Users,
  Video,
  Mail,
  Heart,
  ShoppingCart,
  ArrowRight,
  TrendingUp,
  ArrowLeft
} from "lucide-react";
import SidebarItem from "../component/SidebarItems.tsx";
const sidebar = () => {
  const [cookie, setCookies] = useCookies(["access_token"]);
  const logoutFun=()=>{
   setCookies("access_token", "");
   window.localStorage.removeItem("userID")
  }
  return (
    <div className="absolute sm:sticky top-0 w-56 text-[#d3d3d3] flex flex-col -left-56 bg-gray-950 pb-8 h-full">
      <div className=" relative h-full">
        <SidebarItem title="Home" path="/" Icon={Home}></SidebarItem>
        <SidebarItem title="Follow" path="/follow" Icon={Users}></SidebarItem>
        <SidebarItem title="Reel" path="/reel" Icon={Video}></SidebarItem>
        <SidebarItem title="Messages" path="/message" Icon={Mail}></SidebarItem>
        <SidebarItem title="Favourite" path="/fav" Icon={Heart}></SidebarItem>
        <SidebarItem
          title="trending"
          path="/trending"
          Icon={TrendingUp}
        ></SidebarItem>
        <SidebarItem
          title="Market place"
          path="/shop"
          Icon={ShoppingCart}
        ></SidebarItem>
        <div className="absolute w-full bottom-0">
          {cookie.access_token ? (
            <SidebarItem title="logout" path="/" onClick={logoutFun} Icon={ArrowLeft}></SidebarItem>
          ) : (
            <SidebarItem
              title="Login"
              path="/auth/login"
              Icon={ArrowRight}
            ></SidebarItem>
          )}
        </div>
      </div>
    </div>
  );
};

export default sidebar;
