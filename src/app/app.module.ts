import { Module } from '@nestjs/common';
import { LawfirmModule } from 'src/lawfirm/lawfirm.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [LawfirmModule, UserModule],
})
// eslint-disable-next-line prettier/prettier
export class AppModule { }
