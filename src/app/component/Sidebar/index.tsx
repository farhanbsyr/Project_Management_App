"use client";
import { LockIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setshowPriority] = useState(true);

  const sideBarClassName = `fixed flex flex-col h-[100%] justify-between shadow-xl transition-all duration-500 h-full z-40 dark:bg-black overflow-y-auto bg-white w-64`;

  return (
    <div className={sideBarClassName}>
      <div className="flex h-full w-full flex-col justify-start">
        <div className="min-h[56px] z-50 flex w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            EDLIST
          </div>
        </div>

        {/* TEAM */}
        <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <div className="">
            <h3 className="text-md font-bold tracking-wide dark:text-gray-200">
              EDROH TEAM
            </h3>
            <div className="mt-1 flex items-center gap-2">
              <LockIcon className="mt-[0.1rem] h-3 w-3 text-gray-500 dark:text-gray-400" />
              <p className="text-xs text-gray-500">Privates</p>
            </div>
          </div>
        </div>
        {/* NAVBAR LINKS */}
      </div>
    </div>
  );
};

export default Sidebar;
