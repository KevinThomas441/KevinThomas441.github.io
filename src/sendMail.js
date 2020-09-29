import sgMail from '@sendgrid/mail';

sgMail.setApiKey('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')
const msg = {
  to: 'test@example.com', // Change to your recipient
  from: 'test@example.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })