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
    hakkimda: { height: "h-250", width: "w-220" },
    cv: { height: "h-320", width: "w-220" },
    portfolyo: { height: "h-220", width: "w-220" },
    iletisim: { height: "h-250", width: "w-220" },
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
    activeLayout = { height: "h-220", width: "w-220" };
  }
  // Burada h-320 ve w-220 gibi classlari tek string haline getiriyorum.
  const activeContainerSize = `${activeLayout.height} ${activeLayout.width}`;

  return (
    <div
      className={`relative mt-15 mb-10 rounded-4xl bg-[#1E1E1F] ${activeContainerSize}`}
    >
      <NavBar active={active} setActive={setActive} />

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.2 }}
        >
          {content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
