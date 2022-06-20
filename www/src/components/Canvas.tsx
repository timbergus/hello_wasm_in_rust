import {
  CanvasHTMLAttributes,
  ChangeEvent,
  FC,
  useEffect,
  useRef,
  useState,
} from "react";

import { getSineWave, plotXAxis, plotData, plotYAxis } from "./utils";

export const Canvas: FC<CanvasHTMLAttributes<HTMLCanvasElement>> = (props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [frequency, setFrequency] = useState(1);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const context = canvas.getContext("2d");

    if (!context) return;

    context.clearRect(0, 0, canvas.width, canvas.height);

    plotXAxis({
      context,
      width: canvas.width,
      height: canvas.height,
    });

    plotYAxis({
      context,
      width: canvas.width,
      height: canvas.height,
    });

    plotData({
      context,
      data: getSineWave({
        amplitude: 200,
        frequency,
        samples: 1000,
      }),
      height: canvas.height,
      offsetX: canvas.width / 2,
      offsetY: canvas.height / 2,
    });
  }, [frequency]);

  const handleChangeFrequency = (event: ChangeEvent<HTMLInputElement>) => {
    setFrequency(Number(event.target.value));
  };

  return (
    <>
      <canvas ref={canvasRef} {...props} />
      <input
        type="range"
        name="Frequency"
        id="frequency"
        min={0.5}
        max={10}
        step={0.01}
        value={frequency}
        onChange={handleChangeFrequency}
      />
    </>
  );
};
