import MainContent from "./MainContent";
import SideBar from "./sidebar";

export default function Home({}) {
  return(
    <div className="">
      <div className="flex gap-10">
      <SideBar/>
      <MainContent />
      </div>
    </div>
    
  )
}