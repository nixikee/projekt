export interface AgreementSpecCharacteristicValue {
    default?: boolean,               //Jelzi, hogy az érték egy jellemző alapértelmezett értéke.
    unitOfMeasure?: String,          //A rendelkezés egysége a jellemzőnek, mint például a percekért, gigabytesek (GB) és így tovább.
    validFor?: Number,               //Az időnek az időszaka, amiért egy érték alkalmazható.
    value?: any,                     //Egy olyan különálló érték, amit a jellemző felvehet.
    valueFrom?: String,              //Az az alsó tartományérték, amit egy jellemző felvehet.
    valueTo?: String,                //Az a felső tartományérték, amit egy jellemző felvehet.
    valueType?: String               //Az érték fajtája, amit a jellemző magára vehet, mint például számszerű, szöveg és így tovább.
}