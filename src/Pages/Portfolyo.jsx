import Prftl from "./prftl";
import PortfolioTabs from "./PortfolioTabs";
import { useState } from "react";

export default function Portfolyo() {
  let contents;
  const [tab, setTab] = useState("portfolioTabs");

  if (tab === "portfolioTabs") {
    contents = <PortfolioTabs />;
  }
  return (
    <div>
       <h2 className="text-white  px-10 pt-10  font-semibold text-3xl tracking-wide">
        Projeler
      </h2>
         <hr className="w-15 h-1.5 bg-yellow-500 rounded-xl ml-10 mt-5 " />
      
      <div className="flex">
        <button className="bg-amber-300 text-black rounded-2xl mt-20 p-2 ml-5 ">
          Yapay Zeka Destekli{" "}
        </button>
        <button className="bg-amber-300 text-black rounded-2xl mt-20 p-2 ml-5 ">
          Yapay Zeka Desteksiz
        </button>
      </div>
      {contents}
      
    </div>
  );
}
