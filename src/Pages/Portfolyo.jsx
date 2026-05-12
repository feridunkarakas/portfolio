import Prftl from "./prftl";
import numletIcon from "../assests/numlet.png";
import convertlyIcon from "../assests/convertly.svg";

export default function Portfolyo() {
  return (
    <div>
      <h2 className="text-white px-10 pt-10 font-semibold text-3xl tracking-wide">
        Projeler
      </h2>
      <hr className="w-15 h-1.5 bg-yellow-500 rounded-xl ml-10 mt-5" />

      {/* Kart dizilimi: telefonda 1, tablette 2, buyuk ekranda 3. */}
      <div className="grid grid-cols-1 gap-8 px-10 pt-8 md:grid-cols-2 xl:grid-cols-3">
        <Prftl
          title="Numlet"
          iimg={
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-900 via-[#1a2547] to-slate-950">
              <div className="h-24 w-24 overflow-hidden rounded-[22%] shadow-xl shadow-black/40">
                <img
                  src={numletIcon}
                  alt="Numlet"
                  className="h-full w-full scale-110 object-cover"
                />
              </div>
            </div>
          }
          descc="Oyun mekanikleri ve kullanıcı deneyimi üzerine yaptığım derinlemesine araştırmalarla, yapay zeka destekli olarak hayata geçirdiğim, mağazalarda yayında olan sayı bulmaca oyunu."
          playStoreLink="https://play.google.com/store/apps/details?id=com.numbermatchpuzzle.app&pcampaignid=web_share"
          appStoreLink="https://apps.apple.com/tr/app/numlet-number-logic-puzzle/id6760181329?l=tr"
        />
        <Prftl
          title="Convertly"
          linkk="https://convertly-4vdwc2pgy-feridun-karakas-projects.vercel.app"
          iimg={
            <div className="flex h-full w-full items-center justify-center bg-[#020617]">
               <div className="flex h-32 w-full items-center justify-center px-6">
                <img 
                  src={convertlyIcon} 
                  className="h-full w-full object-contain" 
                  alt="Convertly"
                />
              </div>
            </div>
          }
          descc="Fikri ve teknik araştırmaları bana ait olan, yapay zeka destekli olarak geliştirdiğim modern ve hızlı bir dosya dönüştürme platformu."
        />
      </div>
    </div>
  );
}
