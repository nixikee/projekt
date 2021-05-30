import { AgreementTermOrCondition } from "./agreement-term-or-condition";
import { ProductOfferingRef } from "./product-offering-ref";
import { ProductRef } from "./product-ref";

export interface AgreementItem {
    product?: ProductRef[],                         //A termékreferenciák egy listája
    productOffering?: ProductOfferingRef[],         //A termékkínálat-referenciák egy listája
    termOrCondition?: AgreementTermOrCondition[]    //A megállapodási időszak egy listája vagy a feltételek
}