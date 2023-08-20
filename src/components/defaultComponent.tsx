import { useState } from "react";
import "../css/defaultComponent.css";

const DefaultComponent = () => {
    const [header, setHeader] = useState("Default Component");

    return (
        <div>
            <p className="defaultComponent">{header}</p>
        </div>
    );
};

export default DefaultComponent;
