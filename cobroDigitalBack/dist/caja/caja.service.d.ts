import { Repository } from 'typeorm';
import { CajaDto } from './dto/caja.dto';
import { Caja } from './entities/caja.entity';
export declare class CajaService {
    private readonly cajaRepository;
    constructor(cajaRepository: Repository<Caja>);
    create(cajaDto: CajaDto): Promise<CajaDto>;
    update(id: number, cajaDto: CajaDto): Promise<CajaDto>;
    findAll(): Promise<CajaDto[]>;
    findOne(id: number): Promise<CajaDto>;
    remove(id: number): Promise<boolean>;
}
