import React from "react";
import DonwloadAds from "./DownloadAds";

function Download() {
  return (
    <div className="flex flex-col items-center justify-start px-[5rem] bg-[#020917] h-[48rem] pt-[18rem] mt-[-10rem] relative z-[0] rounded-b-[5rem]">
      {/* titd icon or path icon*/}
      <img src={require("../img/Path 318.png")} alt="" className="w-[5rem]" />
      {/* heading */}
      <div className="headline mt-7 flex flex-col items-center text-[2rem]">
        <span>Listen To The Best Music</span>
        <span>
          <b>App Now!</b>
        </span>
        <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[1rem] ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore porro
          nam sed praesentium!
        </span>
      </div>
      {/* download ads */}
      <div>
        <DonwloadAds />
      </div>
    </div>
  );
}
export default Download;
