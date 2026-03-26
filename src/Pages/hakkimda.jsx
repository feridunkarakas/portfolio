import Doing from "./Doing";
import NavBar from "./navbar";

import Skills from "./Skills";

export default function Hakkimda() {
  return (
    <div className="h-240 w-220 mt-15 rounded-4xl bg-[#1E1E1F] mb-15 ">
      <h2 className="text-white  px-10 pt-10  font-semibold text-3xl tracking-wide">
        Hakkımda
      </h2>
      <NavBar />

      <hr className="w-15 h-1.5 bg-yellow-500 rounded-xl ml-10 mt-5 " />
      <section className="px-10 pt-5 ">
        <span className="text-gray-200 tracking-wide text-sm">
          Yazılıma yaklaşık 1 yıl önce başladım ve kendimi full-stack geliştirme
          alanında ilerletmeye odaklıyorum. Şu anda Vicco’da Frontend Developer
          olarak çalışıyor, React, HTML, CSS, JavaScript ve Tailwind ile modern
          ve kullanıcı odaklı arayüzler geliştiriyorum. Aynı zamanda SQL
          öğrenerek backend tarafında da kendimi geliştirmeye devam
          ediyorum.{" "}
        </span>
        <hr />
      </section>
      <div className="px-10 pt-5 ">
        <span className="text-gray-200 tracking-wide text-sm">
          Kendini sürekli geliştirmeye çalışan, öğrenmeye açık ve daha iyisini
          hedefleyen bir geliştirici olarak projelere değer katmayı
          amaçlıyorum.{" "}
        </span>
      </div>

      <h2 className="text-white  px-10 pt-10  font-semibold text-2xl tracking-wide">
        Neler Yapıyorum{" "}
      </h2>

      <div className="pt-4 px-10 grid grid-cols-2 gap-5">
        <Doing
          title="Mobile Apps"
          desc="Professional development of applications for Android and ios."
          icons={<img src="src\assests\icon-app.svg" className="w-10 h-20" />}
        />
        <Doing
          title="Web development "
          desc="Professional development of applications for Android and ios."
          icons={<img src="src\assests\icon-dev.svg" className="w-15 h-20" />}
        />
        <Doing
          title="UI/UX Design"
          desc="Professional development of applications for Android and ios."
          icons={<img src="src\assests\design.svg" className="w-15 h-20" />}
        />
        <Doing
          title="Mobile Apps"
          desc="Professional development of applications for Android and ios."
          icons={
            <img src="src\assests\icon-backend.svg" className="w-15 h-20" />
          }
        />
      </div>

      <h2 className="text-white  px-10 pt-10  font-semibold text-2xl tracking-wide">
        Yetenekler
      </h2>
      <div className="scrollbar flex gap-12 overflow-x-auto px-10 pt-5 pb-6">
        <Skills
          iccons={
            <img
              src="src\assests\tailwindcss.svg"
              className="h-16 w-24 object-contain"
            />
          }
          tittle="Tailwindcss"
        />
        <Skills
          iccons={
            <img
              src="src\assests\react.svg"
              className="h-20 w-20 object-contain"
            />
          }
          tittle="React"
        />
        <Skills
          iccons={
            <img
              src="src\assests\html.svg"
              className="h-24 w-20 object-contain"
            />
          }
          tittle="HTML"
        />
        <Skills
          iccons={
            <img
              src="src\assests\css.svg"
              className="h-24 w-20 object-contain"
            />
          }
          tittle="CSS"
        />
        <Skills
          iccons={
            <img
              src="src\assests\gemini-svg.svg"
              className="h-20 w-20 object-contain"
            />
          }
          tittle="JavaScript"
        />
      </div>
    </div>
  );
}
