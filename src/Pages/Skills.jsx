export default function Skills({ iccons, tittle }) {
  return (
    <div>
      <div className="h-40 w-40 rounded-4xl bg-[#232a42] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#29314c]">
        {iccons}
      </div>
      <h2 className="pt-3 text-center text-sm font-medium tracking-wide text-white">
        {tittle}
      </h2>
    </div>
  );
}
