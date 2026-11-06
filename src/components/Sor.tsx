import type { KonyvTipus } from "../adatok";
import { useTablazatContext } from "../contexts/TablazatContext";

interface SorProps {
    konyv: KonyvTipus,
    index: number,
}

export default function Sor({ konyv, index }: SorProps) {
    const {keszletTorol} = useTablazatContext();

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{konyv.cim}</td>
            <td>{konyv.szerzo}</td>
            <td>{konyv.kiadasEve}</td>
            <td>{konyv.ar}</td>
            <td>{konyv.db}</td>
            <td><button className="torol-gomb" onClick={() => {keszletTorol(konyv.id)}}>❌
</button></td>
        </tr>
    )
}