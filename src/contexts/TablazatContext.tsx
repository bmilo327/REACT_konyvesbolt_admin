import { createContext, useContext, useState, type ReactNode } from "react"
import { KONYVLISTA, type KonyvTipus } from "../adatok"

export type UjKonyvTipus = Omit<KonyvTipus, "id">;

type TablazatContextValue = {
    konyvLista : KonyvTipus[],
    keszletTorol: (index:number) => void,
    konyvHozzaadas: (konyv: UjKonyvTipus) => void
}

export const TablazatContext = createContext<TablazatContextValue | undefined>(undefined);

type TablazatProviderProps = {
    children: ReactNode
}

export function TablazatProvider({children}: TablazatProviderProps){
    const [konyvLista, setTablazatLista] = useState<KonyvTipus[]>(KONYVLISTA);
    
    function keszletTorol(id:number) {
        setTablazatLista(elozoLista => elozoLista.filter(konyv => konyv.id !== id))
    }

    function konyvHozzaadas(konyv: UjKonyvTipus){
        const ujId = Math.max(0, ...konyvLista.map(k => k.id)) + 1;
        const ujLista = [...konyvLista];
        ujLista.push({...konyv, id: ujId});
        setTablazatLista(ujLista);
    }
    
    return (
        <TablazatContext.Provider value={{keszletTorol, konyvLista, konyvHozzaadas}}>
            {children}
        </TablazatContext.Provider>
    )
}

export function useTablazatContext(){
    const context = useContext(TablazatContext);
    if (context === undefined) {
        throw new Error(
            "A useTablazatContext csak a TablazatProvider-en belül működik!"
        )
    }
    return context;
}