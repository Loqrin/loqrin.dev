import { FunctionComponent } from "react";
import "../css/tailwind.css";
import { AiFillGithub } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Contact: FunctionComponent<{}> = () => {
    const HandleEmailClick = () => {
        window.location.href = "mailto:mail@loqrin.dev";
    };

    const HandleGitHubClick = () => {
        window.location.href = "https://github.com/loqrin";
    };

    const HandleDiscordClick = () => {
        window.location.href = "https://discord.gg/9RbV95apCd";
    };

    const HandleXClick = () => {
        window.location.href = "https://twitter.com/OfficialLoqrin";
    };

    return (
        <div
            className="w-auto flex flex-col justify-center items-center mt-[10rem]"
            id="contact"
        >
            <div className="w-[90%] md:w-[60%] h-[90%] bg-white/5 border-white/20 border-2 rounded-2xl flex flex-col justify-start items-center">
                <span className="font-poppins font-semibold text-5xl md:text-6xl text-white mt-8">
                    Contact
                </span>
                <div className="w-[90%] mt-5">
                    <span className="font-poppins text-white">
                        Looking to get in touch with me? <br />
                        Send me a message on either platforms below.
                    </span>
                    <div className="flex flex-row justify-center items-center mt-10 mb-10">
                        <MdEmail
                            className="text-white text-5xl mr-10 cursor-pointer rounded-lg transition-all duration-[0.4s] hover:bg-orange-600"
                            onClick={HandleEmailClick}
                        />
                        <AiFillGithub
                            className="text-white text-5xl mr-10 cursor-pointer rounded-lg transition-all duration-[0.4s] hover:bg-orange-600"
                            onClick={HandleGitHubClick}
                        />
                        <BsDiscord
                            className="text-white text-5xl mr-10 cursor-pointer rounded-lg transition-all duration-[0.4s] hover:bg-orange-600"
                            onClick={HandleDiscordClick}
                        />
                        <div
                            className="background-x-logo w-[2.7rem] h-[2.7rem] bg-no-repeat bg-center bg-contain cursor-pointer rounded-lg transition-all duration-[0.4s] hover:bg-orange-600"
                            onClick={HandleXClick}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
