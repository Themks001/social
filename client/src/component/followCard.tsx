import React from "react";
import Vite from "/vite.svg";
import { Instagram, Facebook, Github } from "lucide-react";
interface ProfileProps {
  name: string;
  enail: string;
  password: string;
}

const followCard = ({ name, email, password }: ProfileProps) => {
  return (
    <div className="grow border border-white rounded-xl">
      <div className="p-5 bg-gray-700 rounded-t-xl flex justify-center items-center">
        <img
          alt="ProfilePic"
          src={Vite}
          className="rounded-full object-cover h-32 w-32"
        />
      </div>
        <div className="text-center my-3 text-2xl">{name}</div>
      <div className="">
        <div className="flex justify-around p-5">
          <Instagram />
          <Facebook />
          <Github />
        </div>
        <div className="flex gap-2 pb-5 justify-between my-5 px-3">
          <button className="  px-3  bg-gray-900 py-3 py-1">
            Visit Profile
          </button>
          <button className="bg-gray-900 py-3">
            follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default followCard;
