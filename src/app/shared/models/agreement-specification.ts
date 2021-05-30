import { AgreementSpecificationRelationship } from "./agreement-specification-relationship";
import { AgreementSpecCharacteristic } from "./argeement-spec-characteristic";
import { AttachmentRefOrValue } from "./attachment-ref-or-value";
import { CategoryRef } from "./category-ref";
import { RelatedParty } from "./related-party";
import { Valid } from "./valid";

export interface AgreementSpecification {
    //@type: String,
    attachment?: AttachmentRefOrValue[],                                 //kötelező?, A melléklet egy listája, pl egy dokumentum, egy videó, egy kép
    description?: String,                                               //Egy olyan elbeszélés, ami részletesen magyaráz, mi a megállapodási részletes leírás van.
    href?: String,                                                      //A megállapodási részletes leírás referenciája.
    id: string,                                                        //A megállapodási részletes leírás egyedülálló azonosítója.
    isBundle?: boolean,                                                 //Ha igaz, ez a megállapodási részletes leírás a másik megállapodási részletes leírások egy csoportosítása.
    lastUpdate?: Date,                                                  //DateTime, az utolsó frissítés dátuma és ideje.
    lifecycleStatus?: String,                                           //Jelzi az aktuális életpályastátuszt.
    name?: String,                                                      //A megállapodási részletes leírás neve.
    relatedParty?: RelatedParty[],                                      //A kapcsolódó ügyfelek egy listája
    serviceCategory?: CategoryRef,                                      //Egy kategóriareferencia
    specificationCharacteristic?: AgreementSpecCharacteristic[],        //A megállapodási leírásjellemzők egy listája
    specificationRelationship?: AgreementSpecificationRelationship[],   //A megállapodási részletes leíráskapcsolatok egy listája
    validFor?: Valid,                                                   //Az az időszak, amiért a megállapodási részletes leírás érvényes.
    version?: String                                                    //Megállapodási részletes leírásverzió.
}