import { useState } from "react";
import MainContent from "./MainContent";
import SideBar from "./SideBar";


export default function Home() {
  const [active, setActive] = useState("hakkimda");

  return (
    <div>
      {/* Olay su: telefonda alt alta dursun, buyuk ekranda yan yana gecsin.
          justify-center da komple blogu ortaya cekiyor. */}
      <div className="flex flex-col items-start gap-5 md:flex-row md:items-start md:justify-center">
        <SideBar />
        <MainContent active={active} setActive={setActive} />
      </div>
    </div>
  );
}
