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
import geminiSvg from "../assests/gemini-svg.svg";
import sqlIcon from "../assests/sql.svg";
export default function Hakkimda() {
  return (
    <div>
      <h2 className="text-white  px-10 pt-10  font-semibold text-3xl tracking-wide">
        Hakkımda
      </h2>

      <hr className="w-15 h-1.5 bg-yellow-500 rounded-xl ml-10 mt-5 " />
      <section className="px-10 pt-6">
        <p className="text-sm leading-7 tracking-wide text-gray-200">
          Uzun yıllar e-ticaret sektöründe operasyon yönetimi ve
          kategori uzmanlığı alanlarında profesyonel deneyim
          kazandım. Kariyerimde radikal bir dönüşüm yaparak
          tamamen yazılım geliştirme alanına odaklandım. Şu
          anda Vicco bünyesinde Frontend Developer olarak
          görev alıyor ve şirket içi yönetim portallarının
          geliştirilmesinde aktif rol alıyorum. Modern frontend
          ekosisteminde React ve güncel kütüphanelerle çözüm
          üretirken, teknik yetkinliklerimi mobil uygulama
          geliştirme alanına taşımayı hedefliyorum.
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
          desc="Professional development of applications for Android and ios."
          icons={<img src={iconApp} className="w-10 h-20" alt="" />}
        />
        <Doing
          title="Web Geliştirme "
          desc="Professional development of applications for Android and ios."
          icons={<img src={iconDev} className="w-15 h-20" alt="" />}
        />
        <Doing
          title="UI/UX Tasarım"
          desc="Professional development of applications for Android and ios."
          icons={<img src={design} className="w-15 h-20" alt="" />}
        />
        <Doing
          title="Backend Geliştirme"
          desc="Professional development of applications for Android and ios."
          icons={
            <img src={iconBackend} className="w-15 h-20" alt="" />
          }
        />
      </div>

      <h2 className="text-white px-10 pt-10  font-semibold text-2xl tracking-wide">
        Yetenekler
      </h2>
      <div className="scrollbar flex gap-12 overflow-x-auto px-10 pt-5 pb-15">
        <Skills
          iccons={
            <img
              src={tailwindcss}
              className="h-16 w-24 object-contain"
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
              className="h-24 w-20 object-contain"
            />
          }
          tittle="HTML"
        />
        <Skills
          iccons={
            <img
              src={cssIcon}
              className="h-24 w-20 object-contain"
            />
          }
          tittle="CSS"
        />
        <Skills
          iccons={
            <img
              src={geminiSvg}
              className="h-20 w-20 object-contain"
            />
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
      </div>
    </div>
  );
}
