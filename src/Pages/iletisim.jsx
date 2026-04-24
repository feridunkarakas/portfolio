import { Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Toaster } from "sonner";
import { toast } from "sonner";

export default function Iletisim() {
  
  const [formdata, setFormData] = useState({
    isim: "",
    email: "",
    konu: "",
    desc: "",
  });

  function reset() {
    // * form state'ini başlangıç (boş) haline döndürür, böylece inputlar temizlenir
    setFormData({
      isim: "",
      email: "",
      konu: "",
      desc: "",
    });
  }

  const [load, setLoad] = useState(false); // * form gönderilirken loading durumunu kontrol eder (buton disabled + yazı değişir)

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //  * form gönder dedikten sonra sayfanın yenilemesi engelledik.
    if (!formdata.isim || !formdata.email || !formdata.konu || !formdata.desc) {
      //*  eğer formdata'daki isim dolu değil ise veya email...
      toast.error("Lütfen tüm alanları doldurun"); // error göster.

      return; // ! return fonksiyonun çalışmasını durdurur.
    }
    setLoad(true); //  * kod if bloğundan geçerse load state çalışır.

    emailjs
      .send(
        "service_ga8qbn5",
        "template_hssj5he",
        {
          isim: formdata.isim, // ! emailjs'e hangi verileri göndereceğimizi seçiyoruz.
          email: formdata.email,
          konu: formdata.konu,
          desc: formdata.desc,
        },
        "M7dFvqQnKlfTOfIrI",
      )
      .then((res) => {
        toast.success("Mesaj Başarıyla Gönderildi. ");
        setLoad(false); // ! gönderim tamamlandı, loading kapatılır ve buton tekrar aktif olur
        reset(); //* then başarılı bloğu olduğu için reset fonksiyonunu burada çağırdık. reset fonksiyonu input değerlerini sıfırlıyor.
      })
      .catch((err) => {
        console.log(err);
        setLoad(false); //!  veya gönderim hataya düştü, loading kapatılır ve buton tekrar aktif olur
        toast.error("Mesaj Gönderilemedi, Lütfen Tekrar Deneyin. ");
      });
  };

  return (
    <div>
      <div>
        <h2 className="text-white  px-10 pt-10  font-semibold text-3xl tracking-wide">
          İletişim
        </h2>
        <hr className="w-15 h-1.5 bg-yellow-500 rounded-xl ml-10 mt-5 " />
      </div>
      <iframe
        // Harita telefonda tasmiyor.
        // xl'de eski boyuta geri donuyor.
        className="mx-10 mt-8 h-72 w-[calc(100%-5rem)] rounded-3xl md:h-96 xl:h-100 xl:w-200"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7155.68534247047!2d28.848478374284742!3d41.05598330889955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1774882171197!5m2!1str!2str"
      ></iframe>

      <p className="text-white mt-10 tracking-wide  text-xl font-semibold ml-10 ">
        İletişim Formu
      </p>

      <form
        // Form mantigi basit: mobilde tek kolon, md'de iki kolon.
        className="grid grid-cols-1 mx-10 w-[calc(100%-5rem)] text-white md:grid-cols-2 md:gap-x-6 xl:w-200"
        onSubmit={handleSubmit}
      >
        <input
          value={formdata.isim} // ? controlled input: değer state'ten gelir, bu yüzden state sıfırlanınca input da sıfırlanır
          type="text"
          name="isim"
          placeholder="İsim Soyisim"
          className="mt-5 h-12 w-full rounded-2xl border border-gray-600 p-3 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-red-600"
          onChange={handleChange}
        />
        <input
          value={formdata.email}
          type="email"
          name="email"
          placeholder="Email"
          className="mt-5 h-12 w-full rounded-2xl border border-gray-600 p-3 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-red-600"
          onChange={handleChange}
        />
        <input
          value={formdata.konu}
          type="text"
          name="konu"
          placeholder="Konu"
          // Konu alani tek satirda genis dursun diye iki kolonu birden kapliyor.
          className="mt-7 h-12 w-full rounded-2xl border border-gray-600 p-3 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-red-600 md:col-span-2"
          onChange={handleChange}
        />
        <textarea
          value={formdata.desc}
          name="desc"
          placeholder="Açıkalama"
          // Aciklama da ayni: tam satir kaplasin.
          className="mt-7 h-30 w-full resize-none rounded-2xl border border-gray-600 p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 md:col-span-2"
          onChange={handleChange}
        ></textarea>

        <button
          disabled={load}
          type="submit"
          // Buton mobilde tam genislik.
          // md'de saga yaslanip masaustu gorunume yaklasiyor.
          className="mt-7 flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-zinc-600 text-yellow-400 tracking-wide font-extralight transition hover:bg-yellow-500 hover:text-black md:col-span-2 md:justify-self-end md:w-50"
        >
          {" "}
          <Send className="w- h-4 transition group-hover:translate-x-1 group-hov " />
          {load ? "Gönderiliyor" : "Gönder"}
        </button>
      </form>
      <Toaster />
    </div>
  );
}
