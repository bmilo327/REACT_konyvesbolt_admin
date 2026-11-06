export interface KonyvTipus {
    id: number,
    cim: string,
    szerzo: string,
    kiadasEve: number,
    ar: number,
    db: number
}

export const KONYVLISTA:KonyvTipus[] = [
    {
        id: 1,
        cim: "A Gyűrűk Ura",
        szerzo: "J.R.R. Tolkien",
        kiadasEve: 1954,
        ar: 5500,
        db: 6
    }, 
    {
        id: 2,
        cim: "Harry Potter és a Bölcsek Köve",
        szerzo: "J.K. Rowling",
        kiadasEve: 1997,
        ar: 7490,
        db: 4
    },
    {
        id: 3,
        cim: "A Szél neve",
        szerzo: "Patrick Rothfuss",
        kiadasEve: 2007,
        ar: 2390,
        db: 30
    },
    {
        id: 4,
        cim: "A Képzelet királya",
        szerzo: "George R.R. Martin",
        kiadasEve: 1996,
        ar: 3490,
        db: 17
    }
]