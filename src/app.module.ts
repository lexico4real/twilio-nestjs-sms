import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import SMSUtil from '../common/sms-util';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, SMSUtil],
})
export class AppModule {}
