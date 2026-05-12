import { useState } from "react";
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
  const [isMobileStoresOpen, setIsMobileStoresOpen] = useState(false);

  const handleCardClick = () => {
    if (!hasStores || window.matchMedia("(min-width: 768px)").matches) {
      return;
    }
    setIsMobileStoresOpen((prev) => !prev);
  };

  const cardInner = (
    <div
      onClick={handleCardClick}
      className="relative h-44 overflow-hidden rounded-2xl border border-zinc-700/50 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-yellow-400/30 group-hover:shadow-xl group-hover:shadow-black/40"
    >
      {iimg}
      {hasStores && (
        <div
          className={`absolute inset-0 flex items-center justify-center gap-2 rounded-xl bg-black/70 transition-opacity duration-300 ${isMobileStoresOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
            } md:pointer-events-none md:opacity-0 md:group-hover:pointer-events-auto md:group-hover:opacity-100`}
        >
          {appStoreLink && (
            <a
              href={appStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
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
              onClick={(e) => e.stopPropagation()}
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
      <div className="mb-3">
        <h2 className="text-xl font-bold tracking-tight text-white transition-colors duration-200 group-hover:text-yellow-400">
          {title}
        </h2>
      </div>
      
      {linkk ? (
        <a href={linkk} target="_blank" rel="noopener noreferrer">
          {cardInner}
        </a>
      ) : (
        cardInner
      )}

      {descc && (
        <p className="mt-3 text-sm leading-relaxed text-zinc-300">
          {descc}
        </p>
      )}
    </div>
  );
}
