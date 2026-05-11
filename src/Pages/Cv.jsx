import { BookOpen, BriefcaseBusiness, Download } from "lucide-react";

export default function Cv() {
  return (
    <section className="pb-7 text-zinc-200">
      <h2 className="text-white  px-10 pt-10  font-semibold text-3xl tracking-wide">
        Özgeçmiş
      </h2>{" "}
      <hr className="w-15 h-1 border-0 bg-yellow-500 rounded-xl ml-10 mt-5 " />
      <div className="mt-6 flex justify-end px-10">
        <a
          href="/Feridun%20Karaka%C5%9F%20-%20CV.pdf"
          download="Feridun-Karakas-CV.pdf"
          className="inline-flex items-center gap-2 rounded-xl border border-zinc-600 px-4 py-2 text-sm font-medium text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
        >
          <Download className="h-4 w-4" />
          CV İndir
        </a>
      </div>
      {/* Bu sayfayi bilerek duz yazdim.
         Neden? Yeni baslangic seviyesinde map/ternary kullanmadan daha rahat takip ediliyor. */}
      <div className="mt-4 grid max-w-6xl gap-8 pr-2 lg:grid-cols-2">
        <div>
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
                İstanbul Üniversitesi
              </h4>
              <p className="mt-1 text-[0.94rem] leading-6 text-zinc-300">
                Bilgisayar Programcılığı
              </p>
              <p className="mt-1 text-[1rem] font-medium text-yellow-400">
                2024 - Günümüz
              </p>
            </article>
            <article className="relative px-2 py-1.5">
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

        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-700/70 bg-zinc-900/70 shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
              <BookOpen className="h-4 w-4 text-yellow-400" />
            </div>
            <h3 className="text-[1.35rem] font-semibold text-white">
              Sertifikalar ve Kurslar
            </h3>
          </div>
          <div className="relative pl-10">
            <div className="absolute bottom-0 left-5 top-0 w-px bg-zinc-700/70" />
            <article className="relative px-2 py-1.5">
              <span className="absolute -left-[24px] top-3 block h-2.5 w-2.5 rounded-full border border-zinc-900 bg-yellow-400 shadow-[0_0_0_2px_rgba(250,204,21,0.1)]" />
              <h4 className="text-[1.02rem] font-semibold leading-6 text-white">
                 Full Stack Developer
              </h4>
              <p className="mt-1 text-[0.94rem] leading-6 text-zinc-300">Workintech</p>
            </article>
            <article className="relative px-2 py-1.5">
              <span className="absolute -left-[24px] top-3 block h-2.5 w-2.5 rounded-full border border-zinc-900 bg-yellow-400 shadow-[0_0_0_2px_rgba(250,204,21,0.1)]" />
              <h4 className="text-[1.02rem] font-semibold leading-6 text-white">
              Frontend Developer 
              </h4>
              <p className="mt-1 text-[0.94rem] leading-6 text-zinc-300">Workintech</p>
            </article>
            <article className="relative px-2 py-1.5">
              <span className="absolute -left-[24px] top-3 block h-2.5 w-2.5 rounded-full border border-zinc-900 bg-yellow-400 shadow-[0_0_0_2px_rgba(250,204,21,0.1)]" />
              <h4 className="text-[1.02rem] font-semibold leading-6 text-white">
                Girişimcilik
              </h4>
              <p className="mt-1 text-[0.94rem] leading-6 text-zinc-300">
                T.C. Ticaret Bakanlığı (2020)
              </p>
            </article>
            <article className="relative px-2 py-1.5">
              <span className="absolute -left-[24px] top-3 block h-2.5 w-2.5 rounded-full border border-zinc-900 bg-yellow-400 shadow-[0_0_0_2px_rgba(250,204,21,0.1)]" />
              <h4 className="text-[1.02rem] font-semibold leading-6 text-white">
                E-Ticaret
              </h4>
              <p className="mt-1 text-[0.94rem] leading-6 text-zinc-300">Ideasoft</p>
            </article>
          </div>
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
              Junior Frontend Developer
            </h4>
            <p className="mt-1 text-[1rem] leading-6 text-zinc-100">Vicco</p>
            <p className="mt-1 text-[1rem] font-medium text-yellow-400">
              Temmuz 2025 - Günümüz
            </p>
            <p className="mt-1 text-[0.92rem] italic text-zinc-400">
              İstanbul, Türkiye
            </p>
            {/* Madde aciklamalarini p ile yazdim.
               Neden? ul/li de olurdu ama bu hali daha sade ve duz bir yapi veriyor. */}
            <p className="mt-2.5 text-[0.92rem] leading-6 text-zinc-300">
              • PHP ve SQL mimarisi üzerinde çalışan kurumsal yönetim
              portallarının (ERP/Panel) uçtan uca geliştirilmesi ve bakımı.
            </p>
            <p className="text-[0.92rem] leading-6 text-zinc-300">
              • Şirket içi iş akışlarını otomatize etmek amacıyla AI modellerinin
              ve API&apos;larının mevcut sistemlere entegrasyonu.
            </p>
            <p className="text-[0.92rem] leading-6 text-zinc-300">
              • Karmaşık veri yapılarının SQL ile optimize edilmesi ve kullanıcı
              dostu HTML/CSS arayüzlerinin tasarlanması.
            </p>
            <p className="text-[0.92rem] leading-6 text-zinc-300">
              • Mevcut sistemlerin performans iyileştirmeleri ve yeni modül
              geliştirmeleri.
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
              Nisan 2024 - Ekim 2024
            </p>
            <p className="mt-1 text-[0.92rem] italic text-zinc-400">
              İstanbul, Türkiye
            </p>
            <p className="mt-2.5 text-[0.92rem] leading-6 text-zinc-300">
              • Holding bünyesindeki pazaryeri (marketplace) kurulum projesinde,
              sistemin sıfırdan yapılandırılması süreçlerinde aktif rol aldım.
            </p>
            <p className="text-[0.92rem] leading-6 text-zinc-300">
              • Pazaryeri hiyerarşisinin oluşturulması, ürün ağacı mimarisinin
              kurulması ve kategorizasyon standartlarının belirlenmesini yönettim.
            </p>
            <p className="text-[0.92rem] leading-6 text-zinc-300">
              • Sistemin operasyonel iş akışlarını dijital süreçlerle entegre
              ederek, satıcı ve ürün yönetim panellerinin kurgulanmasına katkı
              sağladım.
            </p>
          </article>

          <article className="relative px-2 py-1.5">
            <span className="absolute -left-[24px] top-3 block h-2.5 w-2.5 rounded-full border border-zinc-900 bg-yellow-400 shadow-[0_0_0_2px_rgba(250,204,21,0.1)]" />
            <h4 className="text-[1.02rem] font-semibold leading-6 text-white">
              E-Ticaret Uzmanı
            </h4>
            <p className="mt-1 text-[1rem] leading-6 text-zinc-100">LAUF</p>
            <p className="mt-1 text-[1rem] font-medium text-yellow-400">
              Eylül 2023 - Nisan 2024
            </p>
            <p className="mt-1 text-[0.92rem] italic text-zinc-400">
              İstanbul, Türkiye
            </p>
            <p className="mt-2.5 text-[0.92rem] leading-6 text-zinc-300">
              • Uluslararası pazaryeri platformlarında satış stratejileri
              geliştirerek toplam satış hacminde %97 oranında artış sağladım.
            </p>
            <p className="text-[0.92rem] leading-6 text-zinc-300">
              • Lojistik, stok takibi ve kampanya yönetimi süreçlerini uçtan uca
              koordine ederek operasyonel verimliliği artırdım.
            </p>
          </article>

          <article className="relative px-2 py-1.5">
            <span className="absolute -left-[24px] top-3 block h-2.5 w-2.5 rounded-full border border-zinc-900 bg-yellow-400 shadow-[0_0_0_2px_rgba(250,204,21,0.1)]" />
            <h4 className="text-[1.02rem] font-semibold leading-6 text-white">
              Firma Sahibi
            </h4>
            <p className="mt-1 text-[1rem] leading-6 text-zinc-100">
              E-Ticaret Girişimi
            </p>
            <p className="mt-1 text-[1rem] font-medium text-yellow-400">
              Nisan 2022 - Mart 2024
            </p>
            <p className="mt-1 text-[0.92rem] italic text-zinc-400">
              İstanbul, Türkiye
            </p>
            <p className="mt-2.5 text-[0.92rem] leading-6 text-zinc-300">
              • Bireysel girişimim dahilinde tedarik zinciri, dijital pazarlama
              ve finansal planlama süreçlerini kapsayan bağımsız bir e-ticaret
              operasyonu kurdum ve yönettim.
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
              Mayıs 2021 - Haziran 2022
            </p>
            <p className="mt-1 text-[0.92rem] italic text-zinc-400">
              İstanbul, Türkiye
            </p>
            <p className="mt-2.5 text-[0.92rem] leading-6 text-zinc-300">
              • Sipariş, stok ve operasyon akışlarını uçtan uca koordine ederek
              süreç verimliliğinin artmasına katkı sağladım.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
