import type { KonyvTipus } from "../adatok";
import { useTablazatContext } from "../contexts/TablazatContext";
import Sor from "./Sor";

export default function Tablazat() {
    const {konyvLista} = useTablazatContext();
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Cím</th>
                    <th>Szerző</th>
                    <th>Kiadás éve</th>
                    <th>Ár (Ft)</th>
                    <th>Darabszám</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {konyvLista.map((e,i) => {
                    return (<Sor konyv={e} index={i} key={i}/>)
                })}
            </tbody>
        </table>
    )
}