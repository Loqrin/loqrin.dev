import { FunctionComponent, useState } from "react";
import "../css/tailwind.css";
import { BsArrowReturnRight } from "react-icons/bs";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";

const Navbar: FunctionComponent<{}> = () => {
    const navbar: Navbar[] = [
        {
            label: "About",
        },
        {
            label: "FiveM Store",
        },
        {
            label: "Contact",
        },
        {
            label: "Discord",
        },
    ];
    const [sidebarActive, setSidebarActive] = useState(false);

    const HandleSidebarButton = () => {
        setSidebarActive(!sidebarActive);
    };

    const HandleNavbarClick = (pLabel: string) => {
        switch (pLabel) {
            case "About":
                const aboutElement = document.querySelector("#about");
                aboutElement?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });

                break;

            case "FiveM Store":
                const FivemElement = document.querySelector("#fivem");
                FivemElement?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });

                break;

            case "Contact":
                const ContactElement = document.querySelector("#contact");
                ContactElement?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });

                break;

            case "Discord":
                window.location.href = "https://discord.gg/9RbV95apCd";
                break;
        }
    };

    return (
        <div className="absolute md:fixed w-full h-80 md:h-20 md:bg-white/5 md:border-white/20 md:border-b-2 z-10 md:backdrop-blur-[5px]">
            {/* Sidebar for mobile */}
            <div
                className="md:hidden absolute right-10 top-10 flex justify-center items-center cursor-pointer w-16 h-16"
                onClick={HandleSidebarButton}
            >
                <HiOutlineMenuAlt1
                    className={`absolute text-white text-6xl transition-opacity duration-[0.3s] ${
                        sidebarActive ? "opacity-0" : "opacity-100"
                    }`}
                />
                <IoCloseOutline
                    className={`absolute text-white text-6xl transition-opacity duration-[0.3s] ${
                        sidebarActive ? "opacity-100" : "opacity-0"
                    }`}
                />
            </div>
            <div
                className={`md:hidden absolute flex flex-col justify-center items-end right-10 top-32 bg-white/5 rounded-2xl border-white/20 backdrop-blur-md border-2 w-60 h-40 transition-opacity duration-[0.3s] ${
                    sidebarActive ? "opacity-100" : "opacity-0"
                }`}
            >
                {navbar?.map((n) => {
                    return (
                        <div className="w-full">
                            <div
                                className="flex flex-row justify-end items-center mr-5 mb-1"
                                onClick={() => {
                                    HandleNavbarClick(n.label);
                                }}
                            >
                                <BsArrowReturnRight className="text-2xl text-white mr-3" />
                                <span className="text-2xl font-poppins text-white">
                                    {n.label}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Normal bar for others */}
            <div className="hidden md:flex flex-row justify-center items-center h-full">
                <div className="md:flex flex-row justify-evenly items-center w-[50rem] h-full">
                    {navbar?.map((n) => {
                        return (
                            <div
                                className="flex justify-center items-center border-white/20 border-2 rounded-3xl w-[10rem] h-[3rem] hover:bg-white/5 transition-colors duration-[0.2s] backdrop-blur-[5px] cursor-pointer"
                                onClick={() => {
                                    HandleNavbarClick(n.label);
                                }}
                            >
                                <span className="text-white font-poppins">
                                    {n.label}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
