
import Prftl from "./prftl";

export default function Portfolyo() {
  return (
    <div className="h-240 w-220 mt-15 rounded-4xl bg-[#1E1E1F] mb-15 ">
      <h2 className="text-white  px-10 pt-10  font-semibold text-3xl tracking-wide">
        Hakkımda
      </h2>
      <hr className="w-15 h-1.5 bg-yellow-500 rounded-xl ml-10 mt-5 " />

      <div className="flex gap-10 px-10 grid grid-cols-3 pt-10 border">
        <Prftl
          title="Proje 1"
          iimg={<img src="src\assests\tailwindcss.svg" />}
          linkk="https://www.google.com"
          descc={"asdasdasdasdasd"}
        />
        <Prftl
          title="Proje 2"
          iimg={<img src="src\assests\tailwindcss.svg" />}
          linkk={"https://www.facebook.com"}
        />
        <Prftl
          title="Proje 3"
          iimg={<img src="src\assests\tailwindcss.svg" />}
        />
        <Prftl
          title="Proje 4"
          iimg={<img src="src\assests\tailwindcss.svg" />}
        />
      </div>
    </div>
  );
}
