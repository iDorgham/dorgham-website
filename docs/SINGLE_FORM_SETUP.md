# Dorgham.me - Single Music Booking Form Setup

## 🎯 **Simplified Setup - Only 1 Form Needed**

Your website now uses **only one Formspree form** - the Music Booking Form for DJ performance inquiries.

## 📋 **What You Need to Do:**

### **1. Create Formspree Account**
- Go to https://formspree.io
- Create a free account
- Create **1 form** called "Music Booking Form"

### **2. Get Your Form ID**
- Copy the form ID from your Formspree dashboard
- It will look like: `xpzgkqwe` or `mzbjqkwe`

### **3. Update Configuration**
Replace the placeholder in `src/config/formspree.ts`:

```typescript
export const FORMSPREE_IDS = {
  MUSIC_BOOKING: 'YOUR_ACTUAL_FORM_ID_HERE',
} as const;
```

## 🎵 **Music Booking Form Details**

### **Form Fields:**
- Event Type (dropdown)
- Event Date (date picker)
- Event Time (time picker)
- Venue Name (text)
- Venue Address (textarea)
- Expected Attendance (number)
- Budget Range (dropdown)
- Technical Requirements (textarea)
- Contact Name (text)
- Contact Email (email)
- Contact Phone (tel)
- Additional Notes (textarea)

### **Form Features:**
- ✅ Loading states during submission
- ✅ Success messages after submission
- ✅ Error handling for failed submissions
- ✅ Form validation
- ✅ Spam protection (automatic)
- ✅ Mobile responsive

## 📍 **Where the Form Appears:**

1. **Contact Page** (`/contact`) - Main Music Booking form
2. **Book Page** (`/book`) - Same form, different layout

## 🚀 **Ready for Production:**

Once you add your Formspree form ID:
- ✅ Forms will send real emails
- ✅ You'll receive booking inquiries
- ✅ Spam protection is active
- ✅ Professional user experience

## 📧 **Email Setup:**

Configure your Formspree form to send emails to:
- `bookings@dorgham.me` or
- `info@dorgham.me` or
- Your preferred email address

## 🎯 **Next Steps:**

1. **Create Formspree account** (5 minutes)
2. **Create 1 form** (2 minutes)
3. **Copy form ID** (1 minute)
4. **Update config file** (1 minute)
5. **Test the form** (2 minutes)

**Total time: ~10 minutes to make your website fully functional!**

---

**Status:** Ready for your Formspree form ID
**Last Updated:** October 24, 2025
