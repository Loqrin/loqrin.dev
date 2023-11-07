import "./css/tailwind.css";
import "./css/backgrounds.css";
import "./css/scrollbar.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./mainPage";
import LeToucanPage from "./leToucanPage";

const Site = () => {
    return (
        <Router>
            <div
                className={`background-homesmooth bg-loq-dark-blue bg-no-repeat bg-contain w-auto h-auto`}
            >
                <Routes>
                    <Route path="/" element={<MainPage />}></Route>
                    <Route path="/letoucan" element={<LeToucanPage />}></Route>
                    <Route path="*" element={<MainPage />}></Route>
                </Routes>
            </div>
        </Router>
    );
};

export default Site;
