import { AgreementAuthorization } from "./agreement-authorization";
import { AgreementItem } from "./agreement-item";
import { AgreementRef } from "./agreement-ref";
import { AgreementSpecificationRef } from "./argeement-specification-ref";
import { Characteristic } from "./characteristic";
import { RelatedParty } from "./related-party";

export interface Agreement {
    //@type: String,
    agreementAuthorization?: AgreementAuthorization[],  //A megállapodási meghatalmazások egy listája.
    agreementItem?: AgreementItem[],                     //köt A megállapodási tételek egy listája
    agreementPeriod?: Number,                           //Az az időidőszak, ami alatt az Agreement hatályban van.
    agreementSpecification?: AgreementSpecificationRef, //Egy megállapodási részletes leírásreferencia
    agreementType?: String,
    associatedAgreement?: AgreementRef[],               //A megállapodási referenciák egy listája
    characteristic?: Characteristic[],                  //A jellemzők egy listája
    completionDate?: Date,                              //Dátum, aminél a megállapodást befejezik.
    description?: String,                               //Megmagyarázza a megállapodást és részleteket, pl a megállapodás miért zajlik.
    documentNumber?: String,                            //Integer, Egy hivatkozási szám, amit kijelöltek egy Agreementnek
    engagedParty?: RelatedParty[],                       //köt A kapcsolódó partik egy listája
    href?: String,                                      //Egyedülálló url, ami erőforrásként azonosítja a megállapodást.
    id: string,                                        //Egyedülálló azonosító a megállapodásnak.
    initialDate?: Date,                                 //DateTime, Dátum, aminél a megállapodást inicializálták.
    name?: String,                                      //Egy emberi-olvasható név a megállapodásnak.
    statementOfIntent?: String,                         //Egy áttekintés és az Agreement céljai.
    status?: String                                     //A megállapodás aktuális státusza. Tipikus értékek: eljárásban, jóváhagytak, visszautasítottak.
    version?: String,                                   //Azonosítja a megállapodás verzióját.
}