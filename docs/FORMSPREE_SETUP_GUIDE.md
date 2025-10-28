# Formspree Setup Guide for Dorgham.me

## Overview
This guide will help you set up Formspree for the Music Booking form on your website. Formspree is already integrated into the codebase - you just need to create an account and get your form ID.

## Step 1: Create Formspree Account

### 1.1 Sign Up
1. Go to **https://formspree.io**
2. Click **"Sign Up"** in the top right corner
3. Choose **"Sign up with Email"**
4. Enter your email address and create a password
5. Click **"Create Account"**

### 1.2 Verify Email
1. Check your email inbox for verification email from Formspree
2. Click the verification link in the email
3. You'll be redirected to your Formspree dashboard

## Step 2: Create Music Booking Form

### 2.1 Create New Form
1. In your Formspree dashboard, click **"New Form"**
2. You'll see a form creation wizard

### 2.2 Form Configuration
1. **Form Name**: Enter `Music Booking Form`
2. **Form Type**: Select `Contact Form` (default)
3. **Email**: Enter `bookings@dorgham.me` (or your preferred email)
4. Click **"Create Form"**

### 2.3 Get Your Form ID
1. After creating the form, you'll see a success page
2. **Copy the Form ID** - it will look like `xpzgkqwe` or `mzbjqkwe`
3. **Important**: Copy only the ID part, not the full endpoint URL

## Step 3: Update Website Configuration

### 3.1 Update Formspree Configuration
1. Open the file: `src/config/formspree.ts`
2. Find this line:
   ```typescript
   MUSIC_BOOKING: 'YOUR_MUSIC_BOOKING_FORM_ID',
   ```
3. Replace `YOUR_MUSIC_BOOKING_FORM_ID` with your actual form ID:
   ```typescript
   MUSIC_BOOKING: 'xpzgkqwe', // Replace with your actual form ID
   ```

### 3.2 Example Configuration
```typescript
export const FORMSPREE_IDS = {
  MUSIC_BOOKING: 'xpzgkqwe', // Your actual form ID here
} as const;
```

## Step 4: Form Field Mapping

### 4.1 Music Booking Form Fields
The form on your website sends these fields to Formspree:

**Event Information:**
- `eventType` - Type of event (dropdown)
- `eventDate` - Event date (date picker)
- `eventTime` - Event time (time picker)
- `venueName` - Venue name (text)
- `venueAddress` - Venue address (textarea)
- `expectedAttendance` - Expected attendance (number)

**Technical Requirements:**
- `budgetRange` - Budget range (dropdown)
- `technicalRequirements` - Technical requirements (textarea)

**Contact Information:**
- `contactName` - Contact person name (text)
- `contactEmail` - Contact email (email)
- `contactPhone` - Contact phone (tel)
- `additionalNotes` - Additional notes (textarea)

### 4.2 Formspree Field Configuration
1. In your Formspree dashboard, go to your form settings
2. Click **"Fields"** tab
3. Formspree will automatically detect the fields from your form submissions
4. You can customize field labels and validation rules here

## Step 5: Email Configuration

### 5.1 Email Settings
1. In your Formspree dashboard, go to **"Settings"**
2. Configure email settings:
   - **Reply-To**: Set to `contactEmail` field
   - **Subject**: Customize email subject line
   - **Email Template**: Customize the email template

### 5.2 Email Template Example
```
Subject: New Music Booking Inquiry - {{eventType}}

Event Details:
- Event Type: {{eventType}}
- Date: {{eventDate}}
- Time: {{eventTime}}
- Venue: {{venueName}}
- Location: {{venueAddress}}
- Expected Attendance: {{expectedAttendance}}

Technical Requirements:
- Budget Range: {{budgetRange}}
- Technical Requirements: {{technicalRequirements}}

Contact Information:
- Name: {{contactName}}
- Email: {{contactEmail}}
- Phone: {{contactPhone}}

Additional Notes:
{{additionalNotes}}
```

## Step 6: Testing Your Form

### 6.1 Test Form Submission
1. Go to your website's contact page: `https://dorgham.me/contact`
2. Fill out the Music Booking form with test data
3. Submit the form
4. Check your email for the form submission

### 6.2 Test Form on Book Page
1. Go to your website's book page: `https://dorgham.me/book`
2. Fill out the booking form with test data
3. Submit the form
4. Verify you receive the email

### 6.3 Check Formspree Dashboard
1. Go to your Formspree dashboard
2. Click on your form
3. Check the **"Submissions"** tab
4. Verify your test submissions appear

## Step 7: Spam Protection

### 7.1 Enable Spam Protection
1. In your Formspree dashboard, go to **"Settings"**
2. Enable **"Spam Protection"**
3. Configure spam filters as needed

### 7.2 Honeypot Protection
The form already includes honeypot protection in the code, which helps prevent spam submissions.

## Step 8: Form Customization

### 8.1 Success/Error Messages
The website already includes custom success and error messages:
- **Success**: "Thank you! Your booking inquiry has been sent successfully."
- **Error**: "Sorry, there was an error sending your message. Please try again."
- **Loading**: "Sending your message..."

### 8.2 Form Validation
The form includes client-side validation for:
- Required fields
- Email format validation
- Date validation
- Phone number format

## Troubleshooting

### Common Issues

#### Form Not Sending Emails
1. Check that your form ID is correct in `src/config/formspree.ts`
2. Verify your email address in Formspree settings
3. Check your spam folder
4. Ensure your Formspree account is verified

#### Form Submissions Not Appearing
1. Check Formspree dashboard for submissions
2. Verify form ID is correct
3. Check browser console for JavaScript errors
4. Ensure form fields match the expected format

#### Spam Submissions
1. Enable spam protection in Formspree settings
2. Check honeypot field is working
3. Consider adding CAPTCHA if needed

### Getting Help
- **Formspree Documentation**: https://formspree.io/help
- **Formspree Support**: Available in your dashboard
- **Community Forum**: https://formspree.io/community

## Next Steps

After setting up Formspree:
1. **Test thoroughly** - Submit test forms and verify emails
2. **Monitor submissions** - Check Formspree dashboard regularly
3. **Customize email templates** - Make them match your brand
4. **Set up email forwarding** - Forward bookings to your main email
5. **Configure notifications** - Set up email notifications for new submissions

## Security Notes

### Data Protection
- Formspree is GDPR compliant
- All form data is encrypted in transit
- Submissions are stored securely
- You can delete submissions from the dashboard

### Best Practices
- Use HTTPS for your website
- Keep your Formspree account secure
- Regularly check for spam submissions
- Monitor form performance and user feedback

---

**Need Help?**
If you encounter any issues during setup, check the troubleshooting section above or contact Formspree support through your dashboard.

**Last Updated**: October 2024  
**Version**: 1.0
