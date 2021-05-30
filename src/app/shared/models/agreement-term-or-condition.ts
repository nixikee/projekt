export interface AgreementTermOrCondition {
    description?: String,        //Szöveg, ami magyarázza a megállapodás időszakát vagy feltételét.
    id?: String,                 //Egyedülálló szám, amit referenciának jelöltek ki
    validFor?: Number           //Az idő, ami alatt a megállapodási időszak vagy feltétel alkalmazva van.
}