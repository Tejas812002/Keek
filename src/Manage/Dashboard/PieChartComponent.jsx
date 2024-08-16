import React, { PureComponent, useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { GoDotFill } from "react-icons/go";

const data = [
  { name: "Snapchat", value: 700 },
  { name: "LinkIn", value: 250 },
  { name: "Instagram", value: 300 },
  { name: "Instagram", value: 250 },
  { name: "Instagram", value: 250 },
];
const COLORS = ["#F9D262", "#4C60E0", "#DEAAEF", "#CFF38D", "#EA8389"];

const PieChartComponent = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const onPieEnter = (data, index) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(-1); // For Resetting activeIndex when mouse leaves pie chart
  };

  const getMostUsedLabel = () => {
    let maxIndex = 0;
    for (let i = 1; i < data.length; i++) {
      if (data[i].value > data[maxIndex].value) {
        maxIndex = i;
      }
    }
    return ` ${data[maxIndex].name}`;
  };

  const renderCustomLabel = ({ cx, cy }) => {
    if (activeIndex === -1) {
      // Render default label or nothing if no segment is hovered
      const mostUsedName = getMostUsedLabel();
      return (
        <text
          x={cx}
          y={cy}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="16"
          fill="#4b5563"
        >
          <tspan x={cx} dominantBaseline="middle" fontSize="10" dy="-0.8em">
            Most Used
          </tspan>
          <tspan
            x={cx}
            dy="1.5em"
            fontSize="14"
            fontWeight="600"
            color="#18181B"
          >
            {mostUsedName}
          </tspan>
        </text>
      );
    }

    const { name, value } = data[activeIndex];

    return (
      <text
        x={cx}
        y={cy}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="14"
        fill="#333"
      >
        {`${name} (${value})`}
      </text>
    );
  };

  return (
    <>
     <div className="h-[471px] w-[284px] ">
     <div className="p-4 bg-white rounded-[14px]  h-[471px]  border-2  top-2 relative">
        <h1 className="text-gray-900  font-semibold text-base ">
          Audience Insights
        </h1>
        <PieChart
          width={200}
          height={200}
          style={{ top: "20px" ,left:"20px" }}
          onMouseLeave={onPieLeave}
        >
          <Pie
            data={data}
            cx={100}
            cy={90}
            innerRadius={60}
            outerRadius={95}
            fill="#8884d8"
            paddingAngle={4}
            dataKey="value"
            labelLine={false}
            label={renderCustomLabel}
            onMouseEnter={onPieEnter}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <div className="w-[238.86px] h-[104px] grid grid-cols-2  absolute top-[270px] gap-x-8 ">
          {data.map((entry, index) => (
            <div key={`legend-${index}`} className="flex items-center  ">
              <span style={{ color: COLORS[index % COLORS.length] }}>
                <GoDotFill size={25} />
              </span>
              <span className="text-gray-900 text-sm">{entry.name}</span>
            </div>
          ))}
        </div>
      </div>
     </div>
    </>
  );
};
export default PieChartComponent;
