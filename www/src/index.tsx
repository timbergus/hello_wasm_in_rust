import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import init from "hello_wasm_in_rust";

import { App } from "./app/App";

const root = createRoot(document.getElementById("root") as HTMLElement);

const main = async () => {
  await init(); // Rust code is initialized here.
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
};

main();
