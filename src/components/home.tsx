import { FunctionComponent } from "react";
import "../css/tailwind.css";

const Home: FunctionComponent<{}> = () => {
    return (
        <div className="w-screen h-[30rem] relative top-40 flex flex-col justify-center items-start md:top-[25%]">
            {/*Mobile*/}
            <div className="md:hidden flex flex-col ml-5">
                <span className="font-poppins font-semibold text-8xl text-white">
                    loqrin.
                </span>
                <span className="font-poppins font-semibold text-8xl text-white">
                    dev
                </span>
                <div className="w-[25rem] h-[1px] bg-white"></div>
                <span className="font-poppins text-white text-2xl">
                    Software Engineer
                </span>
                <span className="font-poppins italic text-white text-l">
                    Site in Development
                </span>
            </div>

            {/*Other*/}
            <div className="hidden md:flex flex-col justify-center items-center w-full">
                <span className="font-poppins font-semibold text-8xl text-white">
                    loqrin.dev
                </span>
                <div className="w-[40rem] h-[1px] bg-white mt-5 mb-1"></div>
                <span className="font-poppins text-white text-2xl">
                    Software Engineer
                </span>
                <span className="font-poppins italic text-white text-l">
                    Site in Development
                </span>
            </div>
        </div>
    );
};

export default Home;
