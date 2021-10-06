import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LawSuitService } from './law-suit.service';
import { CreateLawSuitDto } from './dto/create-law-suit.dto';
import { UpdateLawSuitDto } from './dto/update-law-suit.dto';

@Controller('law-suit')
export class LawSuitController {
  constructor(private readonly lawSuitService: LawSuitService) {}

  @Post()
  create(@Body() createLawSuitDto: CreateLawSuitDto) {
    return this.lawSuitService.create(createLawSuitDto);
  }

  @Get()
  findAll() {
    return this.lawSuitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lawSuitService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLawSuitDto: UpdateLawSuitDto) {
    return this.lawSuitService.update(+id, updateLawSuitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lawSuitService.remove(+id);
  }
}
