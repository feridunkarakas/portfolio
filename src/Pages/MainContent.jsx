import Doing from "./Doing";

export default function MainContent() {
  return (
    <div className="h-240 w-250 mt-15 rounded-4xl bg-[#1E1E1F] mb-15 ">
      <h2 className="text-white  px-10 pt-10  font-semibold text-3xl tracking-wide">
        About Me
      </h2>
      <hr className="w-10 h-2 bg-yellow-500 rounded-xl ml-10 mt-5 " />
      <section className="px-10 pt-10 ">
        <span className="text-gray-200 tracking-wide">
          test
        </span>
        <hr />
      </section>
      <div className="px-10 pt-5 ">
        <span className="text-gray-200 tracking-wide">
          test
        </span>
      </div>
      
        <h2 className="text-white  px-10 pt-10  font-semibold text-2xl tracking-wide">
          What i'm doing{" "}
        </h2>
      
      <div className="flex pt-10 px-10 grid grid-cols-2 gap-5">
      <Doing 
        title="Mobile Apps" 
        desc="Professional development of applications for Android and ios."
          icons={<img src="src\assests\icon-app.svg" className="w-10 h-20"  />}
      />
      <Doing
        title="Web development "
        desc="Professional development of applications for Android and ios."
          icons={<img src="src\assests\icon-dev.svg" className="w-15 h-20" />}
      />
      <Doing 
        title="UI/UX Design"
        desc="Professional development of applications for Android and ios."
        icons={<img src="src\assests\design.svg" className="w-15 h-20"/>}
      />
      <Doing
        title="Mobile Apps"
        desc="Professional development of applications for Android and ios."
           icons={<img src="src\assests\icon-backend.svg" className="w-15 h-20" />}
        
      />
      </div>
    </div>
  );
}
