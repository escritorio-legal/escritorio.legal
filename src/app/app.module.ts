import { Module } from '@nestjs/common';
import { PermissionModule } from 'src/permission/permission.module';
import { AuthModule } from '../auth/auth.module';
import { LawFirmModule } from '../law-firm/law-firm.module';
import { LawSuitModule } from '../law-suit/law-suit.module';
import { ProfileModule } from '../profile/profile.module';
import { AppController } from './app.controller';

@Module({
  imports: [LawSuitModule, ProfileModule, LawFirmModule, AuthModule, PermissionModule],
  controllers: [AppController],
})
export class AppModule {}
