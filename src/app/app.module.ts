import { Module } from '@nestjs/common';
import { LawfirmModule } from 'src/lawfirm/lawfirm.module';

@Module({
  imports: [LawfirmModule],
})
// eslint-disable-next-line prettier/prettier
export class AppModule { }
