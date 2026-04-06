import { Send } from "lucide-react";
import { useState } from "react";

export default function Iletisim() {
  const [formdata, setFormData] = useState({
    isim: "",
    email: "",
    konu: "",
    desc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
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
        className="w-200 m-10 h-100 rounded-3xl"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7155.68534247047!2d28.848478374284742!3d41.05598330889955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1774882171197!5m2!1str!2str"
      ></iframe>

      <p className="text-white mt-10 tracking-wide  text-xl font-semibold ml-10 ">
        İletişim Formu
      </p>

      <form className="text-white" onSubmit={handleSubmit}>
        <input
          type="text"
          name="isim"
          placeholder="İsim Soyisim"
          className="border border-gray-600 rounded-2xl ml-10 w-95 mt-5 h-12 focus:outline-none focus:ring-1 focus:ring-red-600 placeholder-gray-400 p-3"
          onChange={handleChange}
        />
        <input
          type="email"
          name="Email"
          placeholder="Email"
          className="border border-gray-600 rounded-2xl ml-6 w-95 mt-5 h-12 focus:outline-none focus:ring-1 focus:ring-red-600 placeholder-gray-400 p-3"
        />
        <input
          type="text"
          name="Konu"
          placeholder="Konu"
          className="border border-gray-600 rounded-2xl ml-10 w-197 mt-7 h-12 focus:outline-none focus:ring-1 focus:ring-red-600 placeholder-gray-400 p-3"
        />
        <textarea
          name="desc"
          placeholder="Açıkalama"
          className="border border-gray-600 rounded-2xl ml-10 w-197 mt-7 h-30 focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-400 p-3 resize-none"
        ></textarea>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 border border-zinc-600 cursor-pointer text-yellow-400 tracking-wide font-extralight ml-156 mt-7 w-50 h-12 rounded-xl hover:bg-yellow-500 hover:text-black transition"
        >
          {" "}
          <Send className="w-4 h-4 transition group-hover:translate-x-1 group-hov " />
          Gönder
        </button>
      </form>
    </div>
  );
}
