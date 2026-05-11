import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";

export default function Prftl({
  title,
  iimg,
  linkk,
  descc,
  playStoreLink,
  appStoreLink,
}) {
  const hasStores = playStoreLink || appStoreLink;

  const cardInner = (
    <div className="relative border border-zinc-700 rounded-xl h-40 overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-hover:border-yellow-400/50 group-hover:shadow-lg group-hover:shadow-yellow-400/10">
      {iimg}
      {hasStores && (
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
          {appStoreLink && (
            <a
              href={appStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-white/10 hover:bg-yellow-400 hover:text-zinc-900 text-white px-2.5 py-1.5 rounded-md border border-white/20 backdrop-blur-sm transition-colors"
              aria-label="App Store"
            >
              <FaAppStoreIos size={14} />
              <span className="text-xs font-medium">App Store</span>
            </a>
          )}
          {playStoreLink && (
            <a
              href={playStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-white/10 hover:bg-yellow-400 hover:text-zinc-900 text-white px-2.5 py-1.5 rounded-md border border-white/20 backdrop-blur-sm transition-colors"
              aria-label="Google Play"
            >
              <FaGooglePlay size={14} />
              <span className="text-xs font-medium">Google Play</span>
            </a>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div className="group">
      <h2 className="mb-3 text-xl font-bold tracking-tight text-white transition-colors duration-200 group-hover:text-yellow-400">
        {title}
      </h2>
      {linkk ? (
        <a href={linkk} target="_blank" rel="noopener noreferrer">
          {cardInner}
        </a>
      ) : (
        cardInner
      )}
      {descc && (
        <p className="mt-3 text-sm leading-relaxed text-zinc-400">{descc}</p>
      )}
    </div>
  );
}
