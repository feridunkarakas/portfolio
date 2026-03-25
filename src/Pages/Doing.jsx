export default function Doing({ title, desc, icons }) {
  return (
<div className="bg-[#1E1E1F] border border-zinc-600 rounded-2xl flex gap-4 p-6 items-center">      <div className="text-yellow-400  ">{icons}</div>
      <div>
        <h3 className="text-white text-lg font-semibold ">{title}</h3>
        <p className="text-zinc-400 text-s mt-2">{desc}</p>
      </div>
    </div>
  );
}
