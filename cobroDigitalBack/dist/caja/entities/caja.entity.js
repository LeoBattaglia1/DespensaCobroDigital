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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caja = void 0;
const typeorm_1 = require("typeorm");
let Caja = class Caja {
    constructor(fecha, caja) {
        this.fecha = fecha;
        this.caja = caja;
    }
    // Getters
    getid() {
        return this.id;
    }
    getfecha() {
        return this.fecha;
    }
    getcaja() {
        return this.caja;
    }
    // Setters
    setid(id) {
        this.id = id;
    }
    setfecha(fecha) {
        this.fecha = fecha;
    }
    setcaja(caja) {
        this.caja = caja;
    }
};
exports.Caja = Caja;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Caja.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Caja.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Caja.prototype, "caja", void 0);
exports.Caja = Caja = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Date, Number])
], Caja);
