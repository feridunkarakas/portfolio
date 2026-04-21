import Prftl from "./prftl";

export default function Hepsi() {
  return (
    <div>
      <div className="gap-10 px-10 grid grid-cols-3 pt-3 ">
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
