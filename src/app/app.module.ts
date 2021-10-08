import { Module } from '@nestjs/common';
import { LawFirmModule } from '../law-firm/law-firm.module';
import { LawSuitModule } from '../law-suit/law-suit.module';
import { ProfileModule } from '../profile/profile.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [LawSuitModule, UserModule, ProfileModule, LawFirmModule],
})
export class AppModule {}
