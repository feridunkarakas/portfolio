
export default function Contact({Icon, label, value}) {
    return(<div className="flex items-center gap-4">
      <div className="bg-zinc-800 p-3 rounded-xl border border-zinc-700 shadow-sm">
        <Icon className="w-5 h-5 text-yellow-500" />
      </div>
      <div className="flex flex-col">
        <label className="text-zinc-400 text-[10px] uppercase tracking-wider">{label}</label>
        <span className="text-zinc-200 text-sm font-medium cursor-pointer">{value}</span>
      </div>
    </div>
    )
}