"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawfirmService = void 0;
const common_1 = require("@nestjs/common");
const profile_entity_1 = require("../profile/entities/profile.entity");
const user_entity_1 = require("../user/entities/user.entity");
const lawfirm_entity_1 = require("./entities/lawfirm.entity");
let LawfirmService = class LawfirmService {
    create(createLawfirmDto) {
        const user = new user_entity_1.default(createLawfirmDto.user.name, createLawfirmDto.user.email, createLawfirmDto.user.phone, createLawfirmDto.user.password);
        const lawFirm = new lawfirm_entity_1.default(createLawfirmDto.name);
        const profiles = [
            new profile_entity_1.default('Secretary', lawFirm),
            new profile_entity_1.default('Intern', lawFirm),
        ];
        return { user, lawFirm, profiles };
    }
    findAll() {
        return `This action returns all lawfirm`;
    }
    findOne(id) {
        return `This action returns a #${id} lawfirm`;
    }
    update(id, updateLawfirmDto) {
        return `This action updates a #${id} lawfirm`;
    }
    remove(id) {
        return `This action removes a #${id} lawfirm`;
    }
};
LawfirmService = __decorate([
    (0, common_1.Injectable)()
], LawfirmService);
exports.LawfirmService = LawfirmService;
//# sourceMappingURL=lawfirm.service.js.map