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
          title="Vicco Portal"
          linkk="https://portal-iota-bay-64.vercel.app/login.php"
          iimg={
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-zinc-900 via-[#1a1f2e] to-zinc-950 px-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-400/40 bg-yellow-400/10 text-lg font-bold tracking-tight text-yellow-400">
                V
              </div>
              <span className="text-xs font-medium tracking-wide text-zinc-400">
                v-connect
              </span>
            </div>
          }
          descc="Tamamen yapay zeka destekli geliştirdiğim Vicco çalışan portalı; şirket içi kullanıcıların giriş yapıp günlük iş akışlarını yönettiği kurumsal web platformu."
        />
        <Prftl
          title="Convertly"
          linkk="https://convertly-fawn-eight.vercel.app/"
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
        <Prftl
          title="Hava Durumu"
          linkk="https://weather-app-livid-two-74.vercel.app/"
          iimg={
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600">
              <div className="relative">
                <div className="h-16 w-16 rounded-full bg-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.6)]" />
                <div className="absolute -bottom-2 -right-4 h-12 w-20 rounded-full bg-white/90 blur-[1px]" />
                <div className="absolute -bottom-4 -left-2 h-10 w-16 rounded-full bg-white/80 blur-[1px]" />
              </div>
            </div>
          }
          descc="Kullanıcıların diledikleri şehirdeki anlık hava durumu verilerine hızlıca ulaşmasını sağlayan, React ve API entegrasyonu ile geliştirdiğim modern bir web uygulaması."
        />
      </div>
    </div>
  );
}
