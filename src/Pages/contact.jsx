export default function Contact({Icon, label, value}) {
    return(    <div className="flex items-center gap-4 min-w-0">
      <div className="bg-zinc-800 p-3 rounded-xl border border-zinc-700 shadow-sm flex-shrink-0">
        <Icon className="w-5 h-5 text-yellow-500" />
      </div>
      <div className="flex flex-col min-w-0 overflow-hidden">
        <label className="text-zinc-400 text-[10px] uppercase tracking-wider">{label}</label>
        <span className="text-zinc-200 text-[13px] font-medium cursor-pointer break-all" title={value}>{value}</span>
      </div>
    </div>
    )
}