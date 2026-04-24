import Prftl from "./prftl";

export default function Hepsi() {
  return (
    <div>
      {/* Kart dizilimi: telefonda 1, tablette 2, buyuk ekranda 3. */}
      <div className="grid grid-cols-1 gap-8 px-10 pt-3 md:grid-cols-2 xl:grid-cols-3">
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
