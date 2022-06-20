type Point = {
  x: number;
  y: number;
};

type PlotAxisParams = {
  context: CanvasRenderingContext2D;
  width: number;
  height: number;
};

export const plotXAxis = ({ context, width, height }: PlotAxisParams) => {
  context.strokeStyle = "#000";

  context.beginPath();
  context.moveTo(0, height / 2);
  context.lineTo(width, height / 2);
  context.stroke();
  context.closePath();
};

export const plotYAxis = ({ context, width, height }: PlotAxisParams) => {
  context.strokeStyle = "#000";

  context.beginPath();
  context.moveTo(width / 2, 0);
  context.lineTo(width / 2, height);
  context.stroke();
  context.closePath();
};

type PlotDataParams = {
  context: CanvasRenderingContext2D;
  data: Point[];
  height: number;
  offsetX?: number;
  offsetY?: number;
};

export const plotData = ({
  context,
  data,
  height,
  offsetX = 0,
  offsetY = 0,
}: PlotDataParams) => {
  const scale = 60;
  context.strokeStyle = "#00F";
  context.beginPath();
  for (let i = 0; i < data.length - 1; i++) {
    // Subtracting the y position form the height sets the origin to the bottom left.
    context.moveTo(scale * data[i].x + offsetX, height - data[i].y - offsetY);
    context.lineTo(
      scale * data[i + 1].x + offsetX,
      height - data[i + 1].y - offsetY
    );
  }
  context.stroke();
};

type GetSineWaveParams = {
  amplitude: number;
  frequency: number;
  samples?: number;
  samplingRate?: number;
};

export const getSineWave = ({
  amplitude,
  frequency,
  samples = 4,
}: GetSineWaveParams): Point[] => {
  const points = [];

  const length = 2 * Math.PI;

  for (let i = 0; i <= length; i += length / samples) {
    const x = i;
    const y = amplitude * Math.sin(x * frequency);
    points.push({ x, y });
  }

  return points;
};
