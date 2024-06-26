import React from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface OrderStatusProps {
  statusCounts: { [key: string]: number };
}

const OrderStatus: React.FC<OrderStatusProps> = ({ statusCounts }) => {
  const colors = ["#FFC632", "#ED3333", "#17BF6B"];

  const data = Object.entries(statusCounts).map(([status, value], index) => ({
    name: status,
    value,
    color: colors[index % colors.length],
  }));


  return (
    <div className="mt-80 font-poppins">
      <div className="flex flex-col w-[400px] m-auto h-[280px]  border-2  rounded-xl shadow-md ">
        <div className="pl-5 h-[30%]">
          <h2 className="font-bold pt-3">Order status</h2>
          <p>Total Earnings of the Month</p>
        </div>
        <div className="  flex h-[70%] items-center  justify-center pb-5  ">
          <ResponsiveContainer width="99%" height={300}>
            <PieChart>
              <Tooltip
                contentStyle={{ background: "white", borderRadius: "5px" }}
              />
              <Pie
                data={data}
                innerRadius={"60"}
                outerRadius={"80"}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((item) => (
                  <Cell key={item.name} fill={item.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-col items-start gap-3 mr-16">
            <span className="flex justify-center items-center">
              <span className=" bg-[#17BF6B] w-4 h-4 inline-block rounded-full " />

              <span className="pl-2">Delivered</span>
            </span>
            <span className="flex justify-center items-center">
              <span className=" bg-[#FFC632] w-4 h-4 inline-block rounded-full " />
              <span className="pl-2">Pending</span>
            </span>
            <span className="flex justify-center items-center">
              <span className=" bg-[#ED3333] w-4 h-4 inline-block rounded-full " />
              <span className="pl-2">cancelled</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;

