
import Prftl from "./prftl";

export default function YpDestek() {
    
    return (
        <div className="grid grid-cols-1 gap-8 px-10 pt-3 md:grid-cols-2 xl:grid-cols-3">
            {/* Ayni mantik: telefon 1 kolon, md 2 kolon, xl 3 kolon. */}
            <Prftl
                title="Proje 4"
                iimg={<img src="src\assests\tailwindcss.svg" />}
            />

        </div>
    )
}