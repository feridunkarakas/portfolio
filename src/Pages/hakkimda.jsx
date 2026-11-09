import Doing from "./Doing";

import Skills from "./Skills";
import iconApp from "../assests/icon-app.svg";
import iconDev from "../assests/icon-dev.svg";
import design from "../assests/design.svg";
import iconBackend from "../assests/icon-backend.svg";
import tailwindcss from "../assests/tailwindcss.svg";
import reactIcon from "../assests/react.svg";
import htmlIcon from "../assests/html.svg";
import cssIcon from "../assests/css.svg";
import { SiGit, SiJavascript, SiPhp } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import sqlIcon from "../assests/sql.svg";
export default function Hakkimda() {
  return (
    <div className="pb-10">
      <h2 className="text-white  px-10 pt-10  font-semibold text-3xl tracking-wide">
        Hakkımda
      </h2>

      <hr className="w-15 h-1.5 bg-yellow-500 rounded-xl ml-10 mt-5 " />
      <section className="px-10 pt-6">
        <p className="text-sm leading-7 tracking-wide text-gray-200">
          Yaklaşık 3,5 yıl e-ticaret operasyonu ve kategori yönetimi alanında
          çalıştıktan sonra yazılıma geçtim. Şu anda Vicco&apos;da Junior Frontend
          Developer olarak 400-500 kişinin kullandığı kurumsal yönetim portalını
          PHP ve SQL ile geliştiriyor, yapay zekâ API&apos;lerini iş akışlarına entegre ediyorum.
          Kişisel projelerimde React, Tailwind CSS ve React Native kullanıyorum;
          App Store ve Google Play&apos;de yayında bir mobil uygulamam var. İş
          tarafını bilmem, kullanıcının gerçek ihtiyacını anlayan çözümler
          üretmemi sağlıyor.
        </p>
        <hr className="mt-4 border-zinc-700" />
      </section>


      <h2 className="text-white  px-10 pt-10  font-semibold text-2xl tracking-wide">
        Neler Yapıyorum{" "}
      </h2>

      {/* Kisa hali: telefonda 1 kolon, buyuk ekranda 2 kolon. Daha duzgun gozukuyor. */}
      <div className="grid grid-cols-1 gap-5 px-10 pt-4 lg:grid-cols-2">
        <Doing
          title="Mobil Uygulamalar"
          desc="React Native ve Expo ile mobil uygulamalar geliştiriyor, App Store ve Google Play'de yayınlıyorum."
          icons={<img src={iconApp} className="w-12 h-12 object-contain" alt="" />}
        />
        <Doing
          title="Web Geliştirme "
          desc="React ve Tailwind CSS ile hızlı ve duyarlı web arayüzleri geliştiriyorum."
          icons={<img src={iconDev} className="w-12 h-12 object-contain" alt="" />}
        />
        <Doing
          title="UI/UX Tasarım"
          desc="Kullanıcı deneyimini merkeze alan, sade ve anlaşılır arayüz tasarımları üzerinde çalışıyorum."
          icons={<img src={design} className="w-12 h-12 object-contain" alt="" />}
        />
        <Doing
          title="Backend Geliştirme"
          desc="PHP ve SQL ile kurumsal yönetim panelleri geliştiriyor, API entegrasyonları kuruyorum."
          icons={
            <img src={iconBackend} className="w-12 h-12 object-contain" alt="" />
          }
        />
      </div>

      <h2 className="text-white px-10 pt-10  font-semibold text-2xl tracking-wide">
        Yetenekler
      </h2>
      <div className="skills-scroll -mx-2 flex gap-12 overflow-x-auto px-10 pt-5 pb-8">
        <Skills
          iccons={
            <img
              src={tailwindcss}
              className="h-20 w-20 object-contain"
            />
          }
          tittle="Tailwindcss"
        />
        <Skills
          iccons={
            <img
              src={reactIcon}
              className="h-20 w-20 object-contain"
            />
          }
          tittle="React"
        />
        <Skills
          iccons={
            <img
              src={htmlIcon}
              className="h-20 w-20 object-contain"
            />
          }
          tittle="HTML"
        />
        <Skills
          iccons={
            <img
              src={cssIcon}
              className="h-20 w-20 object-contain"
            />
          }
          tittle="CSS"
        />
        <Skills
          iccons={
            <SiJavascript className="h-16 w-16 rounded-md text-[#F7DF1E]" aria-hidden="true" />
          }
          tittle="JavaScript"
        />
        <Skills
          iccons={
            <img
              src={sqlIcon}
              className="h-20 w-20 object-contain"
            />
          }
          tittle="SQL"
        />
        <Skills
          iccons={<SiPhp className="h-20 w-20 text-[#8993BE]" aria-hidden="true" />}
          tittle="PHP"
        />
        <Skills
          iccons={<TbBrandReactNative className="h-20 w-20 text-[#61DAFB]" aria-hidden="true" />}
          tittle="React Native"
        />
        <Skills
          iccons={<SiGit className="h-16 w-16 text-[#F05032]" aria-hidden="true" />}
          tittle="Git"
        />
      </div>
    </div>
  );
}
