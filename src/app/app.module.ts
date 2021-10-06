import { Module } from '@nestjs/common';
import { LawFirmModule } from 'src/law-firm/law-firm.module';
import { LawSuitModule } from 'src/law-suit/law-suit.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [LawFirmModule, LawSuitModule, UserModule],
})
export class AppModule {}
