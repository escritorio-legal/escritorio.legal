import { Module } from '@nestjs/common';
import { LawFirmModule } from 'src/law-firm/law-firm.module';
import { LawSuitModule } from 'src/law-suit/law-suit.module';
import { ProfileModule } from 'src/profile/profile.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [LawFirmModule, LawSuitModule, UserModule, ProfileModule],
})
export class AppModule {}
