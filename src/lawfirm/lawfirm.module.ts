import { Module } from '@nestjs/common';
import { LawfirmService } from './lawfirm.service';
import { LawfirmController } from './lawfirm.controller';

@Module({
  controllers: [LawfirmController],
  providers: [LawfirmService],
})
export class LawfirmModule {}
