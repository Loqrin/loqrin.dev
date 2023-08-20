import React from "react";
import ReactDOM from "react-dom/client";
import Site from "./site.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Site />
    </React.StrictMode>
);
