import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/outline";
import Contact from "./contact";
import Lcon from "./icons";

export default function SideBar() {
  return (
    <div className="ms-100 mt-15 border  w-65 h-160 bg-[#1E1E1F] rounded-4xl sticky top-15">
      <div className="m-10 ">
        <div className="border bg-zinc-800  w-50 h-50 border-white rounded-4xl ">
          <img
            className="flex justify-center rounded-4xl w-30 h-30 m-9 cursor-pointer"
             alt="fotos"
          />
        </div>

        <h1 className="text-white text-2xl mt-4 text-center ">
          Feridun Karakaş
        </h1>

        <div className="border bg-zinc-800 rounded-2xl text-center mt-4">
          <span className="text-white text-sm">Full Stack Developer</span>
        </div>

        <hr className="border-gray-600 mt-4" />
        <div className="mt-8 space-y-6">
          <Contact
            Icon={EnvelopeIcon}
            label="email"
            value="feridunkarakas@gm.."
          />
          <Contact Icon={PhoneIcon} label="Phone" value="+90 552 292 1038" />
          <Contact
            Icon={MapPinIcon}
            label="Location"
            value="İstanbul/Türkiye"
          />
          <div className=" flex justify-center gap-7 ">
            <Lcon
              icc="https://www.linkedin.com/in/feridunkarakas/"
              svg="src\assests\linkedin.svg"
            />
            <Lcon
              icc="https://github.com/feridunkarakas"
              svg="src\assests\github.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
