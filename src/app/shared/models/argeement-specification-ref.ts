export interface AgreementSpecificationRef {
    //@referredType: String,       //A célpélda tényleges fajtája mikor egyértelműsítésért szűkölködött.
    href?: String,               //A kapcsolódó entitás referenciája.
    id?: String,                 //Egy kapcsolódó entitás egyedülálló azonosítója.
    name?: String,               //A megállapodási részletes leírás neve.
    description?: String         //Egy olyan elbeszélés, ami részletesen magyaráz, mi a megállapodási részletes leírás van.
}