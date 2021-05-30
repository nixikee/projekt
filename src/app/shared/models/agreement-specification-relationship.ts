export interface AgreementSpecificationRelationship {
    //@referredType: String,           //A célpélda tényleges fajtája mikor egyértelműsítésért szűkölködött.
    href?: String,                   //A kapcsolódó entitás referenciája.
    id?: String,                     //Egy kapcsolódó entitás egyedülálló azonosítója.
    name?: String,                   //A kapcsolódó entitás neve.
    relationshipType?: String,       //Típus kapcsolat mint például, helyettesítés vagy függőség.
    validFor?: Number                //Az az időszak, amiért a kapcsolat érvényes.
}