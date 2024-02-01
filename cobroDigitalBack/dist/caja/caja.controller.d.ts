import { CajaService } from './caja.service';
import { CajaDto } from './dto/caja.dto';
export declare class CajaController {
    private readonly cajaService;
    constructor(cajaService: CajaService);
    create(cajaDto: CajaDto): Promise<CajaDto>;
    findAll(): Promise<CajaDto[]>;
    findOne(id: string): Promise<CajaDto>;
    update(id: string, // Cambiado a string
    cajaDto: CajaDto): Promise<CajaDto>;
    remove(id: string): Promise<boolean>;
}
