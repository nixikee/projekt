import { AgreementSpecCharacteristicValue } from "./argeement-spec-characteristic-value";

export interface AgreementSpecCharacteristic {
    configurable?: boolean,                     //Ha igaz, a boolean mutatja, hogy a jellemző konfigurálható.
    description?: String,                       //Egy elbeszélés az megmagyarázza részletesen, ami a jellemző.
    name?: String,                              //A jellemzőnek a neve, amit részleteznek.
    specCharacteristicValue?: AgreementSpecCharacteristicValue[],   //A megállapodási leírásjellemző-értékek egy listája
    validFor?: Number,                          //Az az időszak, amiért a részletes leírásjellemző érvényes.
    valueType?: String                          //Az érték fajtája, amit a jellemző magára vehet, mint például számszerű, szöveg és így tovább.
}