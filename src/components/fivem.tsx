import { FunctionComponent } from "react";
import "../css/tailwind.css";

const Fivem: FunctionComponent<{}> = () => {
    return (
        <div
            className="w-auto flex flex-col justify-center items-center mt-[10rem]"
            id="fivem"
        >
            <div className="w-[90%] md:w-[60%] h-[90%] bg-white/5 border-white/20 border-2 rounded-2xl flex flex-col justify-start items-center">
                <div className="absolute background-fivem-logo w-[90%] md:w-[60%] h-[25rem] md:h-[30rem] bg-no-repeat bg-right bg-contain mt-1 md:mt-5"></div>
                <span className="font-poppins font-semibold text-5xl md:text-6xl text-white mt-8">
                    FiveM Store
                </span>
                <div className="w-[90%] mt-5">
                    <span className="font-poppins text-white">
                        Looking to purchase scripts for your FiveM server?
                        <br /> Then head over to my tebex store!
                    </span>
                    <br />
                    <br />
                    <div className="flex justify-center items-center border-white/20 border-2 rounded-3xl w-[10rem] h-[3rem] hover:bg-white/5 transition-colors duration-[0.2s] backdrop-blur-[5px] cursor-pointer">
                        <a
                            className="text-white font-poppins"
                            href="https://store.loqrin.dev"
                        >
                            Tebex Store
                        </a>
                    </div>
                </div>
                <div className="bg-white/20 w-[95%] h-[1px] mt-5 mb-5"></div>
                <div className="w-[90%]">
                    <span className="font-poppins text-white">
                        All my scripts are performant, user friendly and
                        visually appealing. <br /> I take pride in producing
                        scripts at my best ability. <br /> Each script is
                        written in Lua, utilizing TypeScript and React for the
                        user interface. <br /> Also, each script is aimed to be
                        developed for standalone usage, custom framework usage,
                        QBCore framework usage and ESX framework usage.
                    </span>
                </div>
                <div className="bg-white/20 w-[95%] h-[1px] mt-5 mb-5"></div>
                <div className="w-[90%]">
                    <span className="font-poppins text-white">
                        Looking for support with my FiveM scripts? <br /> Then
                        feel free to join my Discord server where you can ask
                        for help!
                    </span>
                    <br />
                    <br />
                    <div className="flex justify-center items-center border-white/20 border-2 rounded-3xl w-[10rem] h-[3rem] hover:bg-white/5 transition-colors duration-[0.2s] backdrop-blur-[5px] cursor-pointer">
                        <a
                            className="text-white font-poppins"
                            href="https://discord.gg/9RbV95apCd"
                        >
                            Discord
                        </a>
                    </div>
                </div>
                <div className="bg-white/20 w-[95%] h-[1px] mt-5 mb-5"></div>
                <div className="w-[90%] mb-5">
                    <span className="font-poppins text-white">
                        I have 6+ years of experience with developing in FiveM.
                        I've created a few gamemodes, ran my own roleplay
                        community with another individual, worked for NoPixel
                        (the largest roleplaying community) and produced FiveM /
                        GTA V content for MrBeast Gaming. I enjoy exploring new
                        boundaries in FiveM, but also offering alternatives to
                        popular scripts. Notable scripts that I've created in
                        FiveM is a recreation of Need for Speed Heat's vehicle
                        customization, ability to go to space, creating my own
                        tool to do native audio (custom sounds / music directly
                        in FiveM / GTA V), and creating my own framework.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Fivem;
