import React from "react";
import CenterMenu from "./CenterMenu";

function Header() {
  const buttonStyle =
    "border-[2px] rounded-[10px] border-[#232a4e] px-[25px] py-[7px]";
  return (
    <div className=" ">
      {/* side menu */}
      <img />
      <CenterMenu />
      <div>{/* side menu */}</div>
    </div>
  );
}

export default Header;
