import { Module } from '@nestjs/common';
import { LawSuitService } from './law-suit.service';
import { LawSuitController } from './law-suit.controller';

@Module({
  controllers: [LawSuitController],
  providers: [LawSuitService]
})
export class LawSuitModule {}
