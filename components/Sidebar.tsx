"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import Image from "next/image";

interface SidebarProps {
  children: React.ReactNode;
}

const servers = ["Server 1", "Server 2", "Server 3"];
const serverImages = ["/favicon.ico"]; // Replace these with your actual image URLs

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col bg-grey-400 w-64 p-4">
        <div className="w-full bg-neutral-800">
          <h2 className="text-xl font-bold mb-4">Servers</h2>
          <ul>
            {servers.map((server, index) => (
              <li key={index} className="mb-2">
                <Image
                  src={serverImages[index]}
                  alt={server}
                  width={500}
                  height={300}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
