import { FunctionComponent } from "react";
import "../css/tailwind.css";

const About: FunctionComponent<{}> = () => {
    return (
        <div
            className="w-auto flex flex-col justify-center items-center"
            id="about"
        >
            <div className="w-[90%] md:w-[60%] h-[90%] bg-white/5 border-white/20 border-2 rounded-2xl flex flex-col justify-start items-center">
                <div className="absolute background-loq-avatar w-[90%] md:w-[60%] h-[25rem] md:h-[40rem] bg-no-repeat bg-right bg-contain mt-1 md:mt-5"></div>
                <span className="font-poppins font-semibold text-6xl text-white mt-8">
                    About
                </span>
                <div className="w-[90%] mt-5">
                    <span className="font-poppins text-white">
                        Born & raised in South Africa. I'm a full-stack software
                        engineer with a Bachelor's Degree in Software
                        Engineering.
                    </span>
                    <span className="hidden md:flex font-poppins text-white">
                        I have a strong passion for developing software and
                        modifying video games. Whilst gaining knowledge from
                        completing my Bachelor's Degree, I have also self-taught
                        myself various programming languages, systems and
                        frameworks. I'm a strong team worker and have worked in
                        various teams in the past. I'm able to work under
                        pressure, meet deadlines and always willing to
                        communicate.
                    </span>
                </div>
                <div className="bg-white/20 w-[95%] h-[1px] mt-5 mb-5 md:hidden"></div>
                <div className="md:hidden w-[90%]">
                    <span className="font-poppins text-white">
                        I have a strong passion for developing software and
                        modifying video games. Whilst gaining knowledge from
                        completing my Bachelor's Degree, I have also self-taught
                        myself various programming languages, systems and
                        frameworks. I'm a strong team worker and have worked in
                        various teams in the past. I'm able to work under
                        pressure, meet deadlines and always willing to
                        communicate.
                    </span>
                </div>
                <div className="bg-white/20 w-[95%] h-[1px] mt-5 mb-5"></div>
                <div className="w-[90%] flex flex-row justify-between items-start flex-wrap">
                    <span className="font-poppins text-white">
                        The following are programming languages, systems and
                        frameworks that I am comfortable with:
                    </span>
                    <div className="flex flex-row justify-start items-start md:w-[70%]">
                        <ul className="font-poppins text-white list-disc ml-5">
                            <li>C#</li>
                            <li>TypeScript</li>
                            <li>JavaScript</li>
                            <li>Lua</li>
                            <li>Python</li>
                            <li>C++</li>
                            <li>React</li>
                            <li>React Native</li>
                        </ul>
                        <ul className="font-poppins text-white list-disc ml-10">
                            <li>Electron</li>
                            <li>SQL</li>
                            <li>NoSQL (MongoDB)</li>
                            <li>Tailwind CSS</li>
                            <li>.NET Frameworks</li>
                            <li>NodeJS</li>
                            <li>NextJS</li>
                            <li>Spring</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-white/20 w-[95%] h-[1px] mt-5 mb-5"></div>
                <div className="w-[90%] flex flex-row justify-start items-center flex-wrap">
                    <div className="background-foxxo-adventures bg-no-repeat bg-cover w-[9rem] h-[8rem] md:w-[14rem] md:h-[10rem] border-white/20 border-2 rounded-xl"></div>
                    <div className="w-[9rem] h-[8rem] md:w-[12rem] flex flex-col justify-center pl-2">
                        <span className="font-poppins text-white">
                            As a hobby, I have created a few video games using
                            the Unity engine.
                        </span>
                    </div>
                    <div className="w-[100%] flex flex-col justify-center mt-5">
                        <span className="font-poppins text-white">
                            For example, I created a 2D pixel art platformer
                            video game for mobile called "Foxxo Adventures".
                            Developing video games allows me to put my creative
                            side of my brain to use. Developing gameplay
                            features, whilst drawing or modelling the art for
                            the video game.
                        </span>
                    </div>
                </div>
                <div className="bg-white/20 w-[95%] h-[1px] mt-5 mb-5"></div>
                <div className="w-[90%] flex flex-row justify-between items-start flex-wrap">
                    <span className="font-poppins text-white">
                        Another hobby of mine is modifying video games, in
                        particular Grand Theft Auto V, utilizing FiveM. Read
                        more about my work with FiveM down below.
                    </span>
                </div>
                <div className="bg-white/20 w-[95%] h-[1px] mt-5 mb-5"></div>
                <div className="w-[90%] mb-5 flex flex-col justify-between items-start flex-wrap">
                    <span className="font-poppins text-white">
                        In the past, I have worked and programmed for:
                    </span>
                    <div className="flex flex-row justify-start items-start md:w-[70%]">
                        <ul className="font-poppins text-white list-disc ml-5">
                            <li>NoPixel</li>
                            <li>MrBeast Gaming</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
