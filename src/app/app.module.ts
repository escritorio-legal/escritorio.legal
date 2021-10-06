import { Module } from '@nestjs/common';
import { LawFirmModule } from 'src/law-firm/law-firm.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [LawFirmModule, UserModule],
})
export class AppModule {}
