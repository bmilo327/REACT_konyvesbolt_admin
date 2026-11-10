import React, { useState } from "react"
import { useTablazatContext, type UjKonyvTipus } from "../contexts/TablazatContext";

export function Urlap() {
    const {konyvHozzaadas} = useTablazatContext();
    const [cim, setCim] = useState<string>("");
    const [szerzo, setSzerzo] = useState<string>("");
    const [kiadasEve, setKiadasEve] = useState<number>(0);
    const [ar, setAr] = useState<number>(0);
    const [db, setDb] = useState<number>(0);

    function mentes(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const ujKonyv: UjKonyvTipus = {
            cim,
            szerzo,
            kiadasEve,
            ar,
            db
        }

        console.log(ujKonyv);

        konyvHozzaadas(ujKonyv);
        setCim("");
        setSzerzo("");
        setKiadasEve(0);
        setAr(0);
        setDb(0);
    }

    return (
        <section className="urlap">
            <h2>Új könyv hozzáadása</h2>
            <form onSubmit={mentes}>
                <div className="form-mezo">
                    <label htmlFor="cim">Könyv címe:</label>
                    <input type="text" id="cim" name="cim"
                        value={cim} onChange={(e)=>setCim(e.target.value)}
                        required
                    />
                </div>
                <div className="form-mezo">
                    <label htmlFor="szerzo">Szerző neve:</label>
                    <input type="text" id="szerzo" name="szerzo"
                        value={szerzo} onChange={(e)=>setSzerzo(e.target.value)}
                        required
                    />
                </div>
                <div className="form-mezo">
                    <label htmlFor="kiadasEve">Kiadás éve:</label>
                    <input type="text" id="kiadasEve" name="kiadasEve"
                        value={kiadasEve} onChange={(e)=>setKiadasEve(Number(e.target.value))}
                        required
                    />
                </div>
                <div className="form-mezo">
                    <label htmlFor="ar">Könyv ára:</label>
                    <input type="text" id="ar" name="ar"
                        value={ar} onChange={(e)=>setAr(Number(e.target.value))}
                        required
                    />
                </div>
                <div className="form-mezo">
                    <label htmlFor="db">Darabszám:</label>
                    <input type="text" id="db" name="db"
                        value={db} onChange={(e)=>setDb(Number(e.target.value))}
                        required
                    />
                </div>
                
                <div className="form-mezo gomb-mezo">
                    <input type="submit" value="Hozzáadás"/>
                </div>
            </form>
        </section>
    )
}