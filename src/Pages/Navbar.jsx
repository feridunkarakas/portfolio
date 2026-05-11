export default function NavBar({ active, setActive }) {
  return (
    // Dar ekranda menu sigmazsa saga kayabilsin diye overflow-x-auto var.
    // xl:w-140 da desktoptaki eski navbar olcusunu koruyor.
    <div className="absolute right-0 z-10 flex h-15 w-full items-center justify-center gap-8 overflow-x-auto rounded-xl rounded-b-4xl bg-zinc-800 px-4 text-zinc-200 text-l sm:gap-10 xl:w-140 xl:gap-17 xl:px-0">
      <span
        onClick={() => setActive("hakkimda")}
        className={`${active === "hakkimda" ? "text-yellow-400" : "text-zinc-200 hover:text-zinc-400"} cursor-pointer whitespace-nowrap`}
      >
        Hakkımda
      </span>
      <span
        onClick={() => setActive("cv")}
        className={`${active === "cv" ? "text-yellow-400" : "text-zinc-200 hover:text-zinc-400"} cursor-pointer whitespace-nowrap`}
      >
        Özgeçmiş
      </span>
      <span
        onClick={() => setActive("portfolyo")}
        className={`${active === "portfolyo" ? "text-yellow-400" : "text-zinc-200 hover:text-zinc-400"} cursor-pointer whitespace-nowrap`}
      >
        Projeler
      </span>

      <span
        onClick={() => setActive("iletisim")}
        className={`${active === "iletisim" ? "text-yellow-400" : "text-zinc-200 hover:text-zinc-400"} cursor-pointer whitespace-nowrap`}
      >
        İletişim
      </span>
    </div>
  );
}
