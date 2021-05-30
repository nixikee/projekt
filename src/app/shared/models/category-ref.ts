export interface CategoryRef {
    //@referredType: String,   //A célpélda tényleges fajtája mikor egyértelműsítésért szűkölködött.
    href?: String,           //A kapcsolódó entitás referenciája.
    id?: String,             //Egy kapcsolódó entitás egyedülálló azonosítója.
    name?: String,           //A kapcsolódó entitás neve.
    version?: String         //Kategóriaverzió.
}