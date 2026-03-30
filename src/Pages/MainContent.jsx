import NavBar from "./Navbar";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import Hakkimda from "./hakkimda";
import Portfolyo from "./Portfolyo";
import Iletisim from "./iletisim";
import Cv from "./Cv";

export default function MainContent({ active, setActive }) {
  let content;

  if (active === "hakkimda") {
    content = <Hakkimda />;
  } else if (active === "portfolyo") {
    content = <Portfolyo />;
  } else if (active === "iletisim") {
    content = <Iletisim />;
  } else if (active ==="cv")
    content = <Cv/>
  return (
    <div className="relative h-240 w-220 mt-15 rounded-4xl bg-[#1E1E1F] mb-15">
      <NavBar active={active} setActive={setActive} />

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 50}}
          animate={{ opacity: 1, y:0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.2 }}
        >
          {content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
