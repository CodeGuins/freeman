import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, company, serviceInterest, message, recaptchaToken } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    if (!recaptchaToken) {
      return res.status(400).json({ error: 'reCAPTCHA token is missing' });
    }

    // Verify reCAPTCHA token with Google
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${recaptchaSecret}&response=${recaptchaToken}`,
    });

    const recaptchaData = await recaptchaResponse.json();

    // Check if reCAPTCHA verification was successful
    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      console.error('reCAPTCHA verification failed:', recaptchaData);
      return res.status(400).json({ 
        error: 'reCAPTCHA verification failed. Please try again.' 
      });
    }

    // Send email using Resend
    await resend.emails.send({
      from: 'Freeman Trucking <onboarding@resend.dev>',
      to: 'freemantruckingcontact@gmail.com',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Service Interest:</strong> ${serviceInterest || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">reCAPTCHA Score: ${recaptchaData.score}</p>
        <p style="color: #666; font-size: 12px;">Submitted: ${new Date().toISOString()}</p>
      `,
    });

    console.log('Contact form submission sent to email:', {
      name,
      email,
      phone,
      recaptchaScore: recaptchaData.score,
      timestamp: new Date().toISOString(),
    });

    return res.status(200).json({ 
      success: true, 
      message: 'Contact form submitted successfully' 
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    return res.status(500).json({ 
      error: 'An error occurred while processing your request' 
    });
  }
}
