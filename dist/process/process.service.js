"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessService = void 0;
const common_1 = require("@nestjs/common");
let ProcessService = class ProcessService {
    create(createProcessDto) {
        return 'This action adds a new process';
    }
    findAll() {
        return `This action returns all process`;
    }
    findOne(id) {
        return `This action returns a #${id} process`;
    }
    update(id, updateProcessDto) {
        return `This action updates a #${id} process`;
    }
    remove(id) {
        return `This action removes a #${id} process`;
    }
};
ProcessService = __decorate([
    (0, common_1.Injectable)()
], ProcessService);
exports.ProcessService = ProcessService;
//# sourceMappingURL=process.service.js.map