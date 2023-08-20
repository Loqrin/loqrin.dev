import { useState } from "react";
import Navbar from "./components/navbar";
import "./css/tailwind.css";
import Home from "./components/home";

const Site = () => {
    const [navbarRef] = useState<NavbarRef>({});

    return (
        <div className="bg-homesmooth bg-no-repeat bg-cover w-screen h-screen">
            <Navbar pNavbarRef={navbarRef} />
            <Home />
        </div>
    );
};

export default Site;
