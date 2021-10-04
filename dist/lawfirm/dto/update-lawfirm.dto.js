"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLawfirmDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_lawfirm_dto_1 = require("./create-lawfirm.dto");
class UpdateLawfirmDto extends (0, mapped_types_1.PartialType)(create_lawfirm_dto_1.CreateLawfirmDto) {
}
exports.UpdateLawfirmDto = UpdateLawfirmDto;
//# sourceMappingURL=update-lawfirm.dto.js.map