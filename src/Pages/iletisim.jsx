import { Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Toaster } from "sonner";
import { toast } from "sonner";

const EMAILJS_SERVICE_ID = "service_ga8qbn5";
const EMAILJS_TEMPLATE_ID = "template_hssj5he";
const EMAILJS_PUBLIC_KEY = "M7dFvqQnKlfTOfIrI";

export default function Iletisim() {
  const [formdata, setFormData] = useState({
    isim: "",
    email: "",
    konu: "",
    desc: "",
  });

  function reset() {
    setFormData({
      isim: "",
      email: "",
      konu: "",
      desc: "",
    });
  }

  const [load, setLoad] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formdata.isim || !formdata.email || !formdata.konu || !formdata.desc) {
      toast.error("Lütfen tüm alanları doldurun");
      return;
    }
    setLoad(true);

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          isim: formdata.isim,
          email: formdata.email,
          konu: formdata.konu,
          desc: formdata.desc,
        },
        EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        toast.success("Mesaj başarıyla gönderildi.");
        reset();
      })
      .catch(() => {
        toast.error("Mesaj gönderilemedi. Lütfen tekrar deneyin.");
      })
      .finally(() => {
        setLoad(false);
      });
  };

  return (
    <div>
      <div>
        <h2 className="px-10 pt-10 text-3xl font-semibold tracking-wide text-white">
          İletişim
        </h2>
        <hr className="ml-10 mt-5 h-1.5 w-15 rounded-xl bg-yellow-500" />
      </div>
      <iframe
        className="mx-10 mt-8 h-72 w-[calc(100%-5rem)] rounded-3xl md:h-96 xl:h-100 xl:w-200"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7155.68534247047!2d28.848478374284742!3d41.05598330889955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1774882171197!5m2!1str!2str"
        title="Harita"
      />

      <p className="ml-10 mt-10 text-xl font-semibold tracking-wide text-white">
        İletişim Formu
      </p>

      <form
        className="mx-10 grid w-[calc(100%-5rem)] grid-cols-1 text-white md:grid-cols-2 md:gap-x-6 xl:w-200"
        onSubmit={handleSubmit}
      >
        <input
          value={formdata.isim}
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
          className="mt-7 h-12 w-full rounded-2xl border border-gray-600 p-3 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-red-600 md:col-span-2"
          onChange={handleChange}
        />
        <textarea
          value={formdata.desc}
          name="desc"
          placeholder="Açıklama"
          className="mt-7 h-30 w-full resize-none rounded-2xl border border-gray-600 p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 md:col-span-2"
          onChange={handleChange}
        />

        <button
          disabled={load}
          type="submit"
          className="mt-7 flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-zinc-600 font-extralight tracking-wide text-yellow-400 transition hover:bg-yellow-500 hover:text-black disabled:opacity-50 md:col-span-2 md:w-50 md:justify-self-end"
        >
          <Send className="h-4 w-4" />
          {load ? "Gönderiliyor" : "Gönder"}
        </button>
      </form>
      <Toaster />
    </div>
  );
}
