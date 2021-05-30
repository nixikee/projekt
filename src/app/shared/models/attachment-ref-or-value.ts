import { Quantity } from "./quantity";

export interface AttachmentRefOrValue {
    //@referredType: String,       //A célpélda tényleges fajtája mikor egyértelműsítésért szűkölködött.
    description?: String,        //Egy elbeszélő szöveg, ami leírja a melléklet tartalmát.
    href?: String,               //URI ennek a mellékletnek.
    id?: String,                 //Egyedülálló azonosító ezért a különös mellékletért.
    url?: String,                //egy weblap cím
    name?: String,               //A melléklet neve.
    attachmentType?: String,     //Melléklettípus
    content?: String,            //A melléklet tényleges tartalma, ha beágyazott, kódolt base64.
    mimeType?: String,           //Mellékletpantomim-típus olyan videóért, képért és dokumentumért való kiterjesztésfájlként.
    size?: Quantity,             //A melléklet mérete.
    validFor?: Number            //Az időszak, amikor a melléklet érvényes.
}