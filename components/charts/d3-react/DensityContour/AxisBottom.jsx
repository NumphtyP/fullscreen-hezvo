import { useMemo } from "react";
// tick length
const TICK_LENGTH = 10;
export const AxisBottom = ({ xScale, pixelsPerTick, height }) => {
  const range = xScale.range();
  const ticks = useMemo(() => {
    const width = range[1] - range[0];
    const numberOfTicksTarget = Math.floor(width / pixelsPerTick);
    return xScale.ticks(numberOfTicksTarget).map((value) => ({
      value,
      xOffset: xScale(value),
    }));
  }, [xScale]);
  return (
    <>
      {/* Ticks and labels */}
      {ticks.map(({ value, xOffset }) => (<g
         k
e         y={value} t
r         ansform={`translate(${xOffset}, 0)`} s
h         apeRendering={"crispEdges"}>

                  <line y1
=           {TICK_LENGTH} y2
           ={-height - TICK_LENGTH} st
           roke="#D2D7D3" st
           rokeWidth={0.5}/>

                    <text key
           ={value} sty
           le={{
              fontSize: "10px",
              textAnchor: "middle",
              transform: "translateY(20px)",
              fill: "#D2D7D3",
            }}>
  
                    {value}
          </text>
        </g>))}
   
       </>);
};

  