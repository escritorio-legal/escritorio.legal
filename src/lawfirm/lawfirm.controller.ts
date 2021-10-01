import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LawfirmService } from './lawfirm.service';
import { CreateLawfirmDto } from './dto/create-lawfirm.dto';
import { UpdateLawfirmDto } from './dto/update-lawfirm.dto';

@Controller('lawfirm')
export class LawfirmController {
  constructor(private readonly lawfirmService: LawfirmService) {}

  @Post()
  create(@Body() createLawfirmDto: CreateLawfirmDto) {
    return this.lawfirmService.create(createLawfirmDto);
  }

  @Get()
  findAll() {
    return this.lawfirmService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lawfirmService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLawfirmDto: UpdateLawfirmDto) {
    return this.lawfirmService.update(+id, updateLawfirmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lawfirmService.remove(+id);
  }
}
