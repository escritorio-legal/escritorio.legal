import { PartialType } from '@nestjs/mapped-types';
import { CreateLawSuitDto } from './create-law-suit.dto';

export class UpdateLawSuitDto extends PartialType(CreateLawSuitDto) {}
