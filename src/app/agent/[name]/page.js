import Header from "@/components/AppComponent/Navbar/Header";
import { SideNav } from "@/components/AppComponent/Navbar/SideNav";
import FirstSidebar from "@/components/AppComponent/Sidebar/FirstSidebar";
import MiddleBar from "@/components/AppComponent/Sidebar/MiddleBar";
import SecondSidebar from "@/components/AppComponent/Sidebar/SecondSidebar";
import React from "react";

const Page = async({params}) => {

  const { name } = await params; // Extract the 'name' parameter from the dynamic route

  const agentname = decodeURIComponent(name)

  return (
    <div>
      <Header name={agentname} />
    <div className="flex flex-col xl:flex-row">
      {/* Side Navigation */}
      <div>
        <SideNav />
      </div>

      {/* Main Content */}
      <div className="flex-1 grid grid-cols-1 xl:grid-cols-12 gap-3 h-screen">
        {/* First Sidebar */}
        <div className="xl:col-span-3 col-span-1 p-3 overflow-y-auto bg-white shadow-md">
          <FirstSidebar />
        </div>

        {/* Middle Content */}
        <div className="xl:col-span-6 col-span-1 p-3 overflow-y-auto bg-gray-50 shadow-md">
          <MiddleBar />
        </div>

        {/* Second Sidebar */}
        <div className="xl:col-span-3 col-span-1 p-3 overflow-y-auto bg-white shadow-md">
          <SecondSidebar />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Page;
