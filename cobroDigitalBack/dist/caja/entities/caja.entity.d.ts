export declare class Caja {
    id: number;
    fecha: Date;
    caja: number;
    constructor(fecha: Date, caja: number);
    getid(): number;
    getfecha(): Date;
    getcaja(): number;
    setid(id: number): void;
    setfecha(fecha: Date): void;
    setcaja(caja: number): void;
}
