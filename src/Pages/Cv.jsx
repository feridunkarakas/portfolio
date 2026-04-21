import { BookOpen, BriefcaseBusiness } from "lucide-react";

export default function Cv() {
  return (
    <section className="pb-7 text-zinc-200">
      <h2 className="text-white  px-10 pt-10  font-semibold text-3xl tracking-wide">
        Özgeçmiş
      </h2>{" "}
      <hr className="w-15 h-1 border-0 bg-yellow-500 rounded-xl ml-10 mt-5 " />
      {/* Bu sayfayi bilerek duz yazdim.
         Neden? Yeni baslangic seviyesinde map/ternary kullanmadan daha rahat takip ediliyor. */}
      <div className="mt-6 max-w-3xl pr-2">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-700/70 bg-zinc-900/70 shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
            <BookOpen className="h-4 w-4 text-yellow-400" />
          </div>
          <h3 className="text-[1.35rem] font-semibold text-white">Eğitim</h3>
        </div>

        <div className="relative pl-10">
          {/* Soldaki cizgi timeline hissi veriyor.
             Egitim ve deneyimi tarih sirasinda daha duzenli gostermek icin kullandim. */}
          <div className="absolute bottom-0 left-5 top-0 w-px bg-zinc-700/70" />
          <article className="relative px-2 py-1.5">
            {/* Sari nokta bu kaydin timeline uzerindeki konumu */}
            <span className="absolute -left-[24px] top-3 block h-2.5 w-2.5 rounded-full border border-zinc-900 bg-yellow-400 shadow-[0_0_0_2px_rgba(250,204,21,0.1)]" />
            <h4 className="text-[1.05rem] font-semibold leading-6 text-white">
              Kütahya Dumlupınar Üniversitesi
            </h4>
            <p className="mt-1 text-[0.94rem] leading-6 text-zinc-300">
              Dış Ticaret
            </p>
            <p className="mt-1 text-[1rem] font-medium text-yellow-400">
              2018 - 2020
            </p>
          </article>
        </div>
      </div>
      <div className="mt-8 max-w-3xl pr-2">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-700/70 bg-zinc-900/70 shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
            <BriefcaseBusiness className="h-4 w-4 text-yellow-400" />
          </div>
          <h3 className="text-[1.35rem] font-semibold text-white">Deneyim</h3>
        </div>

        <div className="relative pl-10 space-y-6">
          {/* Deneyim tarafinda tek bir timeline cizgisi kullaniyorum.
             Boylece tum is tecrubeleri tek akista okunuyor. */}
          <div className="absolute bottom-0 left-5 top-0 w-px bg-zinc-700/70" />

          <article className="relative px-2 py-1.5">
            <span className="absolute -left-[24px] top-3 block h-2.5 w-2.5 rounded-full border border-zinc-900 bg-yellow-400 shadow-[0_0_0_2px_rgba(250,204,21,0.1)]" />
            <h4 className="text-[1.02rem] font-semibold leading-6 text-white">
              Frontend & Backend Developer
            </h4>
            <p className="mt-1 text-[1rem] leading-6 text-zinc-100">Vicco</p>
            <p className="mt-1 text-[1rem] font-medium text-yellow-400">
              07.2025 - Günümüz
            </p>
            <p className="mt-1 text-[0.92rem] italic text-zinc-400">
              İstanbul, Türkiye
            </p>
            {/* Madde aciklamalarini p ile yazdim.
               Neden? ul/li de olurdu ama bu hali daha sade ve duz bir yapi veriyor. */}
            <p className="mt-2.5 text-[0.92rem] leading-6 text-zinc-300">
              • Tailwind CSS ile responsive portal arayüzleri geliştirildi;
              JavaScript, HTML ve CSS ile kullanıcı deneyimi iyileştirildi.
            </p>
            <p className="text-[0.92rem] leading-6 text-zinc-300">
              • PHP ve SQL ile backend süreçleri ve veri akışları kurgulanarak
              portalın uçtan uca işleyişi güçlendirildi.
            </p>
          </article>

          <article className="relative px-2 py-1.5">
            <span className="absolute -left-[24px] top-3 block h-2.5 w-2.5 rounded-full border border-zinc-900 bg-yellow-400 shadow-[0_0_0_2px_rgba(250,204,21,0.1)]" />
            <h4 className="text-[1.02rem] font-semibold leading-6 text-white">
              Kategori Uzmanı
            </h4>
            <p className="mt-1 text-[1rem] leading-6 text-zinc-100">
              Öztürk Holding
            </p>
            <p className="mt-1 text-[1rem] font-medium text-yellow-400">
              04.2024 - 10.2024
            </p>
            <p className="mt-1 text-[0.92rem] italic text-zinc-400">
              İstanbul, Türkiye
            </p>
            <p className="mt-2.5 text-[0.92rem] leading-6 text-zinc-300">
              • Pazaryeri kurulum ve kategori operasyonları uçtan uca planlanıp
              başarıyla yürütüldü.
            </p>
          </article>

          <article className="relative px-2 py-1.5">
            <span className="absolute -left-[24px] top-3 block h-2.5 w-2.5 rounded-full border border-zinc-900 bg-yellow-400 shadow-[0_0_0_2px_rgba(250,204,21,0.1)]" />
            <h4 className="text-[1.02rem] font-semibold leading-6 text-white">
              E-Ticaret Uzmanı
            </h4>
            <p className="mt-1 text-[1rem] leading-6 text-zinc-100">LAUF</p>
            <p className="mt-1 text-[1rem] font-medium text-yellow-400">
              09.2023 - 04.2024
            </p>
            <p className="mt-1 text-[0.92rem] italic text-zinc-400">
              İstanbul, Türkiye
            </p>
            <p className="mt-2.5 text-[0.92rem] leading-6 text-zinc-300">
              • Ürün konumlandırma ve operasyon takibi optimize edilerek satışta
              sürdürülebilir artış sağlandı.
            </p>
          </article>

          <article className="relative px-2 py-1.5">
            <span className="absolute -left-[24px] top-3 block h-2.5 w-2.5 rounded-full border border-zinc-900 bg-yellow-400 shadow-[0_0_0_2px_rgba(250,204,21,0.1)]" />
            <h4 className="text-[1.02rem] font-semibold leading-6 text-white">
              Firma Sahibi
            </h4>
            <p className="mt-1 text-[1rem] leading-6 text-zinc-100">
              Kendi Girişimi
            </p>
            <p className="mt-1 text-[1rem] font-medium text-yellow-400">
              04.2022 - 03.2024
            </p>
            <p className="mt-1 text-[0.92rem] italic text-zinc-400">
              İstanbul, Türkiye
            </p>
            <p className="mt-2.5 text-[0.92rem] leading-6 text-zinc-300">
              • Marka, tedarik ve dijital satış süreçleri tek elden yönetilerek
              iş geliştirme hedefleri gerçekleştirildi.
            </p>
          </article>

          <article className="relative px-2 py-1.5">
            <span className="absolute -left-[24px] top-3 block h-2.5 w-2.5 rounded-full border border-zinc-900 bg-yellow-400 shadow-[0_0_0_2px_rgba(250,204,21,0.1)]" />
            <h4 className="text-[1.02rem] font-semibold leading-6 text-white">
              E-Ticaret Operasyon Uzmanı
            </h4>
            <p className="mt-1 text-[1rem] leading-6 text-zinc-100">
              IMAGINARIUM
            </p>
            <p className="mt-1 text-[1rem] font-medium text-yellow-400">
              05.2021 - 06.2022
            </p>
            <p className="mt-1 text-[0.92rem] italic text-zinc-400">
              İstanbul, Türkiye
            </p>
            <p className="mt-2.5 text-[0.92rem] leading-6 text-zinc-300">
              • Sipariş, stok ve operasyon akışları koordine edilerek süreç
              verimliliği artırıldı.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
