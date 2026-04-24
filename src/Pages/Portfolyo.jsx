import Prftl from "./prftl";
import Hepsi from "./Hepsi";
import { useState } from "react";
import YpDestek from "./YpDestek";
import YpDesteksiz from "./YpDesteksiz";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

export default function Portfolyo() {
  let contents;
  const [tab, setTab] = useState("Hepsi");

  if (tab === "Hepsi") {
    contents = <Hepsi />;
  } else if (tab === "YpDestek") {
    contents = <YpDestek />;
  } else if (tab === "YpDesteksiz") {
    contents = <YpDesteksiz />;
  }

  return (
    <div>
      <h2 className="text-white  px-10 pt-10  font-semibold text-3xl tracking-wide">
        Projeler
      </h2>
      <hr className="w-15 h-1.5 bg-yellow-500 rounded-xl ml-10 mt-5 " />

      {/* Tab isimleri dar ekranda kirilmasin diye saga kaydirma actim.
          nowrap sayesinde yazi satira bolunmuyor. */}
      <div className="scrollbar ml-10 mr-10 mt-8 mb-5 flex gap-4 overflow-x-auto sm:ml-11 sm:gap-5">
        <span
          onClick={() => setTab("Hepsi")}
          className={
            tab === "Hepsi"
              ? "text-yellow-400 cursor-pointer whitespace-nowrap"
              : "text-zinc-200 hover:text-zinc-400 cursor-pointer whitespace-nowrap"
          }
        >
          Hepsi
        </span>
        <span
          onClick={() => setTab("YpDestek")}
          className={
            tab === "YpDestek"
              ? "text-yellow-400 cursor-pointer whitespace-nowrap"
              : "text-zinc-200 hover:text-zinc-400 cursor-pointer whitespace-nowrap"
          }
        >
          Yapay Zeka Destekli{" "}
        </span>
        <span
          onClick={() => setTab("YpDesteksiz")}
          className={
            tab === "YpDesteksiz"
              ? "text-yellow-400 cursor-pointer whitespace-nowrap"
              : "text-zinc-200 hover:text-zinc-400 cursor-pointer whitespace-nowrap"
          }
        >
          Yapay Zeka Desteksiz
        </span>
      </div>
         {/* Ilk acilista bir anda ziplamasin diye initial false. */}
         <AnimatePresence mode="wait" initial={false}>
           <motion.div
             key={tab}
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             transition={{ duration: 0.2 }}
           >
             {contents}
           </motion.div>
         </AnimatePresence>
    </div>
  );
}
