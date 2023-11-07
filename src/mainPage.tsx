import { FunctionComponent } from "react";
import "./css/tailwind.css";
import Navbar from "./components/navbar";
import About from "./components/about";
import Contact from "./components/contact";
import Fivem from "./components/fivem";
import Home from "./components/home";

const MainPage: FunctionComponent<{}> = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Fivem />
            <Contact />

            <div className="w-auto flex justify-center items-center mt-10 pb-10">
                <span className="font-poppins font-thin text-xl text-white ">
                    Made with ❤️ by Loqrin
                </span>
            </div>
        </div>
    );
};

export default MainPage;
