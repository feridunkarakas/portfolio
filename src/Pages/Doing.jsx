export default function Doing({ title, desc, icons }) {
  return (
    <div className="bg-[#1E1E1F] border border-zinc-700/50 rounded-2xl flex gap-4 p-6 items-center h-full transition-all duration-300 hover:border-zinc-500/50 shadow-lg shadow-black/10">
      <div className="text-yellow-400 flex-shrink-0">{icons}</div>
      <div>
        <h3 className="text-white text-lg font-semibold leading-tight">{title}</h3>
        <p className="text-zinc-400 text-sm mt-2 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
