"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProcessDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_process_dto_1 = require("./create-process.dto");
class UpdateProcessDto extends (0, mapped_types_1.PartialType)(create_process_dto_1.CreateProcessDto) {
}
exports.UpdateProcessDto = UpdateProcessDto;
//# sourceMappingURL=update-process.dto.js.map