export interface AgreementAuthorization {
    date?: Date,                                     //DateTime, dátum a meghatalmazás állapotához
    signatureReprezentation?: String,                //az aláírás egy fizikai papíraláírás vagy egy digitális aláírás.
    state?: String                                   //string, A meghatalmazás aktuális státusza, pl jóváhagyott, visszautasított.
}