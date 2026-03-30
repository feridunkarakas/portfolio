import { act } from "react";

export default function NavBar({ active, setActive }) {
  return (
    <div className=" bg-zinc-800  h-15 w-140 rounded-xl  absolute right-0  flex items-center justify-center gap-17 rounded-b-4xl  text-zinc-200  text-l">
      <span
        onClick={() => setActive("hakkimda")}
        className={
          active === "hakkimda"
            ? "text-yellow-400 cursor-pointer"
            : "text-zinc-200 hover:text-zinc-400 cursor-pointer"
        }
      >
        Hakkımda
      </span>
      <span
        onClick={() => setActive("cv")}
        className={
          active === "cv"
            ? "text-yellow-400 cursor-pointer"
            : "text-zinc-200 hover:text-zinc-400 cursor-pointer"
        }
      >
        Özgeçmiş
      </span>
      <span
        onClick={() => setActive("portfolyo")}
        className={
          active === "portfolyo"
            ? "text-yellow-400 cursor-pointer"
            : "text-zinc-200 hover:text-zinc-400 cursor-pointer"
        }
      >
        Projeler
      </span>

      <span
        onClick={() => setActive("iletisim")}
        className={
          active === "iletisim"
            ? "text-yellow-400 cursor-pointer"
            : "text-zinc-200 hover:text-zinc-400 cursor-pointer"
        }
      >
        İletişim
      </span>
    </div>
  );
}
