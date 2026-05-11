import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/outline";
import Contact from "./contact";
import Lcon from "./icons";
import foto from "../assests/foto.jpeg";
import linkedinSvg from "../assests/linkedin.svg";
import githubSvg from "../assests/github.svg";

export default function SideBar() {
  return (
    // Telefonda full acilsin, buyuk ekranda eski kart boyutu + sticky devam etsin.
    <div className="mt-6 w-full max-w-full rounded-4xl border bg-[#1E1E1F] sm:mt-10 sm:max-w-[420px] md:mt-15 md:h-160 md:w-65 md:sticky md:top-15 md:ms-0">
      {/* Ic boslugu da kademeli: kucukte az, ekrani buyutunce normal seviyeye geliyor. */}
      <div className="m-6 sm:m-8 md:m-10">
        <div className="mx-auto w-50 rounded-4xl border border-white bg-zinc-800 h-50 md:mx-0">
          <img
            className="m-3 h-43 w-43 cursor-pointer rounded-4xl object-cover"
            src={foto}
            alt="fotos"
          />
        </div>

        <h1 className="text-white text-2xl mt-4 text-center ">
          Feridun Karakaş
        </h1>

        <div className="border bg-zinc-800 rounded-2xl text-center mt-4">
          <span className="text-white text-sm">Frontend Developer</span>
        </div>

        <hr className="border-gray-600 mt-4" />
        <div className="mt-8 space-y-6">
          <a className="flex" href="mailto:feridunkarakas@gm...">
            <Contact
              Icon={EnvelopeIcon}
              label="email"
              value="feridunkarakas@gm.."

            />
          </a>
          <a className="flex" href="tel:+90 552 292 1038"> <Contact Icon={PhoneIcon} label="Phone" value="+90 552 292 1038" /> </a>
          <Contact
            Icon={MapPinIcon}
            label="Location"
            value="İstanbul/Türkiye"
          />
          <div className=" flex justify-center gap-7 ">
            <Lcon
              icc="https://www.linkedin.com/in/feridunkarakas/"
              svg={linkedinSvg}
            />
            <Lcon
              icc="https://github.com/feridunkarakas"
              svg={githubSvg}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
