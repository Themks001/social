import React from "react";
import { Link } from "react-router-dom";
type ItemsProps = {
  Icon: string;
  title: string;
  path: string;
};
const SidebarItems = ({ Icon, title, path, ...props }: ItemsProps) => {
  return (
    <Link to={path} {...props} className="flex justify-between p-4">
      <span className="text-xl">{title}</span>
      <span className="text-[#5ccc5c]">{<Icon />}</span>
    </Link>
  );
};

export default SidebarItems;
