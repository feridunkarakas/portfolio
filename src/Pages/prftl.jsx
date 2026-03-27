export default function Prftl({ title, iimg, linkk, descc }) {
  return (
    <div>
      <a href={linkk} target="_blank">
        <div className=" border border-zinc-700 rounded-xl h-40 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#29314c]  ">
          {iimg}
        </div>
      </a>
      <h2 className="text-zinc-300 pt-2 text-l">{title}</h2>
      <p className="text-zinc-400">{descc}</p>
    </div>
  );
}
