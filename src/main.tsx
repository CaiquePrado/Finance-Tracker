import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { TrackerProvider } from "./contexts/TrackerContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TrackerProvider>
      <App />
    </TrackerProvider>
  </React.StrictMode>
);
