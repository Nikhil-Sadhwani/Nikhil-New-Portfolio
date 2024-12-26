import { Request, Response } from 'express';
import { EmailService } from '../services/emailService';
import { ContactFormData } from '../types/contact';

export class ContactController {
  private emailService: EmailService;

  constructor() {
    this.emailService = new EmailService();
  }

  handleContact = async (req: Request, res: Response): Promise<void> => {
    try {
      const contactData: ContactFormData = req.body;

      // Basic validation
      if (!contactData.name || !contactData.email || !contactData.message) {
        res.status(400).json({
          success: false,
          message: 'Please provide all required fields'
        });
        return;
      }

      // Send email
      const emailSent = await this.emailService.sendContactEmail(contactData);

      if (emailSent) {
        res.status(200).json({
          success: true,
          message: 'Message sent successfully!'
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to send message. Please try again later.'
      });
    }
  };
}
