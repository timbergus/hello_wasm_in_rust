import { FC } from "react";
import { add } from "hello_wasm_in_rust";

import { Canvas } from "../components/Canvas";

export const App: FC = () => {
  return (
    <>
      <div>Hello, WASM in Rust!</div>
      <div>{`The sum is ${add(40, 2)}.`}</div>
      <Canvas width={800} height={600} />
    </>
  );
};
