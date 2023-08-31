import Navbar from "./components/navbar";
import "./css/tailwind.css";
import "./css/backgrounds.css";
import "./css/scrollbar.css";
import Home from "./components/home";
import About from "./components/about";
import Fivem from "./components/fivem";
import Contact from "./components/contact";

const Site = () => {
    return (
        <div
            className={`background-homesmooth bg-loq-dark-blue bg-no-repeat bg-contain w-auto h-auto`}
        >
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

export default Site;
