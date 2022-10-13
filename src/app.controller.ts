import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('send-sms')
  async sendSMS(@Body() body: { to: string; body: string; from?: string }) {
    return await this.appService.sendSMS(body.to, body.body, body.from);
  }

  @Post('view-history')
  async viewHistory(
    @Body() body: { from?: string; to?: string },
  ): Promise<any> {
    return await this.appService.viewHistory(body.from, body.to);
  }
}
