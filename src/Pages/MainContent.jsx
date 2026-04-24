import NavBar from "./Navbar";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import Hakkimda from "./hakkimda";
import Portfolyo from "./Portfolyo";
import Iletisim from "./iletisim";
import Cv from "./Cv";

export default function MainContent({ active, setActive }) {
  let content;
  const pageLayout = {
    // Her sayfanin panel boyutunu burada ayri ayri tutuyorum.
    // Neden boyle yaptim? Cunku her sayfanin icerik uzunlugu farkli:
    // CV daha uzun, Portfolyo daha kisa gibi.
    // Sonradan bir sayfayi uzatip kisaltmak icin sadece bu alani degistirmem yeterli.
    // Buraya xl koydum ki desktopta eski olculer ayni kalsin.
    hakkimda: { size: "xl:h-250 xl:w-220" },
    // CV uzun olabiliyor. O yuzden min-h + h-auto dedim.
    // Mantik: icerik uzarsa kutu da uzuyor, icerde scroll cikmiyor.
    cv: { size: "xl:min-h-320 xl:h-auto xl:w-220" },
    portfolyo: { size: "xl:h-220 xl:w-220" },
    iletisim: { size: "xl:h-250 xl:w-220" },
  };

  if (active === "hakkimda") {
    content = <Hakkimda />;
  } else if (active === "portfolyo") {
    content = <Portfolyo />;
  } else if (active === "iletisim") {
    content = <Iletisim />;
  } else if (active === "cv") {
    content = <Cv />;
  }

  let activeLayout;
  if (pageLayout[active]) {
    // active degeri pageLayout icinde varsa o sayfanin boyutunu kullaniyorum.
    activeLayout = pageLayout[active];
  } else {
    // Guvenlik icin default verdim.
    // Yanlis bir active degeri gelirse ekran patlamasin diye yedek boyut kullaniyorum.
    activeLayout = { size: "xl:h-220 xl:w-220" };
  }
  // Burada h-320 ve w-220 gibi classlari tek string haline getiriyorum.
  const activeContainerSize = activeLayout.size;

  return (
    <div
      // w-full + max-w-full = kucuk ekranda saga tasmasin.
      // overflow-hidden = ilk acilista ziplayan scroll bari gizliyor.
      className={`relative mt-6 mb-10 w-full max-w-full overflow-hidden rounded-4xl bg-[#1E1E1F] sm:mt-10 lg:mt-15 ${activeContainerSize}`}
    >
      <NavBar active={active} setActive={setActive} />

      {/* initial={false} verdim.
          Sebep: ilk acilista animasyon yuzunden bir anlik kayma/scroll oluyordu. */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          // Mobilde navbar ustte biniyor, o yuzden icerigi asagi ittirdim.
          // xl'de buna gerek kalmiyor, pt'yi sifirliyorum.
          className="pt-18 sm:pt-20 xl:pt-0"
          key={active}
          // Sadece opacity biraktim.
          // y ile animasyon yapinca scroll bar bir gorunup bir kayboluyordu.
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
