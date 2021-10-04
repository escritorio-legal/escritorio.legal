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
exports.LawfirmController = void 0;
const common_1 = require("@nestjs/common");
const lawfirm_service_1 = require("./lawfirm.service");
const create_lawfirm_dto_1 = require("./dto/create-lawfirm.dto");
const update_lawfirm_dto_1 = require("./dto/update-lawfirm.dto");
let LawfirmController = class LawfirmController {
    constructor(lawfirmService) {
        this.lawfirmService = lawfirmService;
    }
    create(createLawfirmDto) {
        return this.lawfirmService.create(createLawfirmDto);
    }
    findAll() {
        return this.lawfirmService.findAll();
    }
    findOne(id) {
        return this.lawfirmService.findOne(+id);
    }
    update(id, updateLawfirmDto) {
        return this.lawfirmService.update(+id, updateLawfirmDto);
    }
    remove(id) {
        return this.lawfirmService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_lawfirm_dto_1.CreateLawfirmDto]),
    __metadata("design:returntype", void 0)
], LawfirmController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LawfirmController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LawfirmController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_lawfirm_dto_1.UpdateLawfirmDto]),
    __metadata("design:returntype", void 0)
], LawfirmController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LawfirmController.prototype, "remove", null);
LawfirmController = __decorate([
    (0, common_1.Controller)('lawfirm'),
    __metadata("design:paramtypes", [lawfirm_service_1.LawfirmService])
], LawfirmController);
exports.LawfirmController = LawfirmController;
//# sourceMappingURL=lawfirm.controller.js.map