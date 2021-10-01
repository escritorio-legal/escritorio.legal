import { PartialType } from '@nestjs/mapped-types';
import { CreateLawfirmDto } from './create-lawfirm.dto';

export class UpdateLawfirmDto extends PartialType(CreateLawfirmDto) {}
