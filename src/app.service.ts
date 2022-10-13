import { Injectable } from '@nestjs/common';
import SMSUtil from 'common/sms-util';

@Injectable()
export class AppService {
  constructor(private readonly smsUtil: SMSUtil) {}

  async sendSMS(to: string, body: string, from?: string): Promise<any> {
    try {
      return await this.smsUtil.sendsms(to, body, from);
    } catch (error) {
      return error;
    }
  }
}
