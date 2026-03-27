export default function NavBar() {
  return (
    <div className=" bg-zinc-800  h-15 w-140 rounded-xl  absolute top-15 right-0  flex items-center justify-center gap-18 rounded-b-4xl  text-zinc-200  text-l">
      <span className="hover:text-zinc-400 cursor-pointer">Hakkımda</span>
      <span className="hover:text-zinc-400 cursor-pointer">Özgeçmiş</span>
      <span className="hover:text-zinc-400 cursor-pointer">Projeler</span>
      <span className="hover:text-zinc-400 cursor-pointer">İletişim</span>
    </div>
  );
}
