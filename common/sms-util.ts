import 'dotenv/config';
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const messagingServiceSid = process.env.MESSAGING_SERVICE_SID;
const senderNumber = process.env.TWILIO_PHONE_NUMBER;
import * as $ from 'twilio';
const client = new $.Twilio(accountSid, authToken);

export default class SMSUtil {
  sendsms = async (to: string, body: string, from?: string): Promise<any> => {
    console.log('Sending SMS to ' + to);
    const message = await client.messages.create({
      body: body,
      messagingServiceSid: messagingServiceSid,
      from: from || senderNumber,
      to: to,
    });
    console.log({ message });
    const {
      body: messageBody,
      from: _senderNumber,
      to: receiverNumber,
      status,
      dateCreated: sentDate,
    } = message;
    return {
      messageBody,
      _senderNumber,
      receiverNumber,
      status,
      sentDate,
    };
  };
}
