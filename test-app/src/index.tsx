import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { TimeCapsuleProvider } from "react-time-capsule";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <TimeCapsuleProvider>
  <App />
</TimeCapsuleProvider>
);
