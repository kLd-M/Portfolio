# EmailJS Setup Instructions for Contact Form

Follow these steps to set up EmailJS for your contact form:

## 1. Create an EmailJS Account

1. Go to [EmailJS website](https://www.emailjs.com/) and sign up for a free account
2. The free plan allows 200 emails per month, which should be sufficient for a portfolio website

## 2. Create an Email Service

1. After signing in, go to the "Email Services" tab
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps to connect your email account
5. Give your service a name (e.g., "portfolio_contact")
6. Note down the **Service ID** - you'll need this later

## 3. Create an Email Template

1. Go to the "Email Templates" tab
2. Click "Create New Template"
3. Give your template a name (e.g., "contact_form")
4. Design your email template using the variables from your form:
   - `{{name}}` - Sender's name
   - `{{email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Message content
5. Example template:
   ```
   From: {{name}} ({{email}})
   Subject: {{subject}}
   
   Message:
   {{message}}
   ```
6. Save the template and note down the **Template ID**

## 4. Get Your User ID

1. Go to "Account" > "API Keys"
2. Copy your **Public Key** (this is your User ID)

## 5. Update Your Contact Component

1. Open `src/components/Contact.jsx`
2. Replace the placeholder values with your actual IDs:
   ```javascript
   const serviceId = 'YOUR_SERVICE_ID'; // Replace with your Service ID
   const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID
   const userId = 'YOUR_USER_ID'; // Replace with your User ID (Public Key)
   ```

## 6. Test Your Form

1. Run your application
2. Fill out the contact form and submit it
3. Check your email to see if you received the message
4. Check the browser console for any errors if the email wasn't sent

## 7. Additional Configuration (Optional)

### Add reCAPTCHA to Prevent Spam

1. Go to [Google reCAPTCHA](https://www.google.com/recaptcha/admin) and register your site
2. Install the reCAPTCHA package: `npm install react-google-recaptcha`
3. Integrate it with your form

### Customize Email Templates

1. You can create more sophisticated email templates with HTML and CSS
2. EmailJS supports conditional logic and loops in templates

## Troubleshooting

- If emails aren't being sent, check the browser console for error messages
- Verify that your service is connected properly in the EmailJS dashboard
- Make sure your form field names match the variables in your email template
- Check if your email service has any sending limits or restrictions

## Security Note

The EmailJS public key (User ID) is safe to include in your frontend code. However, be aware that anyone who views your source code can see this key. The free tier has rate limiting to prevent abuse.
