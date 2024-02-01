"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CajaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const caja_entity_1 = require("./entities/caja.entity");
let CajaService = class CajaService {
    constructor(cajaRepository) {
        this.cajaRepository = cajaRepository;
    }
    async create(cajaDto) {
        try {
            // Verificar si ya existe una entrada en la caja para la fecha actual
            const existingEntry = await this.cajaRepository.findOne({
                where: { fecha: cajaDto.fecha },
            });
            if (existingEntry) {
                // Si ya existe una entrada para la fecha actual, lanzar una excepción NotFoundException
                throw new common_1.NotFoundException('Ya existe una entrada en la caja para la fecha actual.');
            }
            // Continuar con la creación normal si no hay una entrada existente
            const caja = this.cajaRepository.create(cajaDto);
            await this.cajaRepository.save(caja);
            return caja;
        }
        catch (error) {
            // Manejar cualquier otro error
            throw new Error(`Error al crear la entrada en la caja: ${error.message}`);
        }
    }
    async update(id, cajaDto) {
        try {
            const caja = await this.cajaRepository.findOne({ where: { id: id } });
            if (!caja) {
                throw new common_1.NotFoundException(`Caja con ID ${id} no encontrada`);
            }
            // Actualiza solo la propiedad 'caja'
            await this.cajaRepository
                .createQueryBuilder()
                .update(caja_entity_1.Caja)
                .set({ caja: cajaDto.caja })
                .where('id = :id', { id: id })
                .execute();
            // Cargar el caja actualizado para devolverlo
            const cajaActualizado = await this.cajaRepository.findOne({
                where: { id: id },
            });
            if (!cajaActualizado) {
                throw new common_1.NotFoundException(`Caja con ID ${id} no encontrado después de la actualización`);
            }
            return {
                id: cajaActualizado.id,
                fecha: cajaActualizado.fecha,
                caja: cajaActualizado.caja,
            };
        }
        catch (error) {
            throw new Error(`Error al actualizar la caja: ${error.message}`);
        }
    }
    async findAll() {
        return this.cajaRepository.find();
    }
    async findOne(id) {
        const caja = await this.cajaRepository.findOne({
            where: { id: id },
        });
        if (!caja) {
            throw new common_1.NotFoundException(`caja con ID ${id} no encontrado`);
        }
        return caja;
    }
    async remove(id) {
        const caja = await this.cajaRepository.findOne({
            where: { id: id },
        });
        if (!caja) {
            throw new common_1.NotFoundException(`caja con ID ${id} no encontrado`);
        }
        await this.cajaRepository.remove(caja);
        return true;
    }
};
exports.CajaService = CajaService;
exports.CajaService = CajaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(caja_entity_1.Caja)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CajaService);
