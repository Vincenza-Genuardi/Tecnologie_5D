export class Animale{
    public cani: Cane[];
    public gatti: Gatto[];
    public conigli: Coniglio[];
    public pesci: Pesce[];

    constructor(cani: Cane[], gatti: Gatto[], conigli: Coniglio[], pesci: Pesce[]) {
      this.cani = cani;
      this.gatti = gatti;
      this.conigli = conigli;
      this.pesci = pesci;
    }
}

export class Cane{
    public nome: string;
    public descrizione: string;
    public anni_vita: number;
    public amichevole_con_bambini: boolean;
    public dimensioni_medie: string;
    public costo_mantenimento_mensile: number;
    public costo_acquisto: number;
    public immagine: string;
    

    constructor(nome:string, descrizione:string, anni_vita:number, amichevole_con_bambini:boolean, dimensioni_medie:string, costo_mantenimento_mensile:number, costo_acquisto:number, immagine:string ) {
      this.nome = nome;
      this.descrizione = descrizione;
      this.anni_vita = anni_vita;
      this.amichevole_con_bambini = amichevole_con_bambini;
      this.dimensioni_medie = dimensioni_medie;
      this.costo_mantenimento_mensile = costo_mantenimento_mensile;
      this.costo_acquisto = costo_acquisto;
      this.immagine = immagine;
    }
}

export class Gatto{
    public nome: string;
    public descrizione: string;
    public anni_vita: number;
    public amichevole_con_bambini: boolean;
    public dimensioni_medie: string;
    public costo_mantenimento_mensile: number;
    public costo_acquisto: number;
    public immagine: string;
    

    constructor(nome:string, descrizione:string, anni_vita:number, amichevole_con_bambini:boolean, dimensioni_medie:string, costo_mantenimento_mensile:number, costo_acquisto:number, immagine:string ) {
      this.nome = nome;
      this.descrizione = descrizione;
      this.anni_vita = anni_vita;
      this.amichevole_con_bambini = amichevole_con_bambini;
      this.dimensioni_medie = dimensioni_medie;
      this.costo_mantenimento_mensile = costo_mantenimento_mensile;
      this.costo_acquisto = costo_acquisto;
      this.immagine = immagine;
    }
}
export class Coniglio{
    public nome: string;
    public descrizione: string;
    public anni_vita: number;
    public amichevole_con_bambini: boolean;
    public dimensioni_medie: string;
    public costo_mantenimento_mensile: number;
    public costo_acquisto: number;
    public immagine: string;
    

    constructor(nome:string, descrizione:string, anni_vita:number, amichevole_con_bambini:boolean, dimensioni_medie:string, costo_mantenimento_mensile:number, costo_acquisto:number, immagine:string ) {
      this.nome = nome;
      this.descrizione = descrizione;
      this.anni_vita = anni_vita;
      this.amichevole_con_bambini = amichevole_con_bambini;
      this.dimensioni_medie = dimensioni_medie;
      this.costo_mantenimento_mensile = costo_mantenimento_mensile;
      this.costo_acquisto = costo_acquisto;
      this.immagine = immagine;
    }
}

export class Pesce{
    public nome: string;
    public descrizione: string;
    public anni_vita: number;
    public amichevole_con_bambini: boolean;
    public dimensioni_medie: string;
    public costo_mantenimento_mensile: number;
    public costo_acquisto: number;
    public immagine: string;
    

    constructor(nome:string, descrizione:string, anni_vita:number, amichevole_con_bambini:boolean, dimensioni_medie:string, costo_mantenimento_mensile:number, costo_acquisto:number, immagine:string ) {
      this.nome = nome;
      this.descrizione = descrizione;
      this.anni_vita = anni_vita;
      this.amichevole_con_bambini = amichevole_con_bambini;
      this.dimensioni_medie = dimensioni_medie;
      this.costo_mantenimento_mensile = costo_mantenimento_mensile;
      this.costo_acquisto = costo_acquisto;
      this.immagine = immagine;
    }
}
