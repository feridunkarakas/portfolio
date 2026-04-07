import { useState } from "react";
import MainContent from "./MainContent";
import SideBar from "./sidebar";


export default function Home() {
  const [active, setActive] = useState("hakkimda");

  return (
    <div>
      <div className="flex gap-5">
        <SideBar />
        <MainContent active={active} setActive={setActive} />
      </div>
    </div>
  );
}
