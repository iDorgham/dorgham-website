# Environment Variables for Dorgham.me

## Overview
This document outlines all environment variables used in the Dorgham.me website project. Currently, the project uses minimal environment variables, but this guide will help you understand and configure them properly.

## Current Environment Variables

### No Required Environment Variables
The website currently doesn't require any environment variables to function. All configuration is handled through:
- Static configuration files
- Formspree integration (configured in `src/config/formspree.ts`)
- Hardcoded values in components

## Optional Environment Variables

### 1. Google Analytics (Optional)
If you want to add Google Analytics tracking:

```bash
# Google Analytics Tracking ID
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Usage**: Add to your layout or specific pages for analytics tracking.

### 2. Contact Email (Optional)
If you want to use environment variables for contact information:

```bash
# Contact email addresses
NEXT_PUBLIC_CONTACT_EMAIL=bookings@dorgham.me
NEXT_PUBLIC_GENERAL_EMAIL=hello@dorgham.me
```

**Usage**: Replace hardcoded email addresses in components.

### 3. Social Media Links (Optional)
If you want to manage social media links through environment variables:

```bash
# Social media URLs
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/dorgham.music/
NEXT_PUBLIC_SOUNDCLOUD_URL=https://soundcloud.com/idorgham
NEXT_PUBLIC_YOUTUBE_URL=https://youtube.com/@yasserdorgham
NEXT_PUBLIC_FACEBOOK_URL=https://www.facebook.com/iDorgham
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/yasserdorgham
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/yasserdorgham
```

**Usage**: Update `src/components/SocialLinks.tsx` to use these variables.

## Environment Variable Setup

### Local Development

#### 1. Create Environment File
Create a `.env.local` file in your project root:

```bash
# .env.local
# Copy this file and add your values

# Google Analytics (Optional)
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Contact Emails (Optional)
# NEXT_PUBLIC_CONTACT_EMAIL=bookings@dorgham.me
# NEXT_PUBLIC_GENERAL_EMAIL=hello@dorgham.me

# Social Media Links (Optional)
# NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/dorgham.music/
# NEXT_PUBLIC_SOUNDCLOUD_URL=https://soundcloud.com/idorgham
# NEXT_PUBLIC_YOUTUBE_URL=https://youtube.com/@yasserdorgham
# NEXT_PUBLIC_FACEBOOK_URL=https://www.facebook.com/iDorgham
# NEXT_PUBLIC_TWITTER_URL=https://twitter.com/yasserdorgham
# NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/yasserdorgham
```

#### 2. Load Environment Variables
Environment variables are automatically loaded by Next.js. No additional configuration needed.

#### 3. Access in Code
```typescript
// Access environment variables in your components
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'bookings@dorgham.me';
const gaId = process.env.NEXT_PUBLIC_GA_ID;
```

### Vercel Deployment

#### 1. Add Environment Variables in Vercel
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add each variable with its value
4. Set the environment (Production, Preview, Development)

#### 2. Environment Variable Types
- **Production**: Used for dorgham.me domain
- **Preview**: Used for preview deployments
- **Development**: Used for local development

#### 3. Automatic Deployment
After adding environment variables:
1. Vercel will automatically trigger a new deployment
2. Your changes will be live on the next deployment
3. No manual intervention required

## Security Considerations

### Public vs Private Variables

#### Public Variables (NEXT_PUBLIC_*)
- **Visible to**: Browser and server
- **Use for**: Client-side configuration
- **Examples**: Analytics IDs, public URLs, API endpoints
- **Security**: Safe to expose publicly

#### Private Variables (without NEXT_PUBLIC_)
- **Visible to**: Server only
- **Use for**: Server-side secrets
- **Examples**: API keys, database credentials, private tokens
- **Security**: Never expose to client

### Best Practices

#### 1. Never Commit Secrets
```bash
# Add to .gitignore
.env.local
.env.production
.env.development
```

#### 2. Use Default Values
```typescript
// Always provide fallback values
const apiKey = process.env.API_KEY || 'default-value';
```

#### 3. Validate Environment Variables
```typescript
// Validate required variables
if (!process.env.REQUIRED_VAR) {
  throw new Error('REQUIRED_VAR is not defined');
}
```

## Common Use Cases

### 1. Analytics Configuration
```typescript
// In your layout or analytics component
const gaId = process.env.NEXT_PUBLIC_GA_ID;

if (gaId) {
  // Initialize Google Analytics
  gtag('config', gaId);
}
```

### 2. Contact Information
```typescript
// In your contact components
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'bookings@dorgham.me';
const generalEmail = process.env.NEXT_PUBLIC_GENERAL_EMAIL || 'hello@dorgham.me';
```

### 3. Social Media Links
```typescript
// In your social links component
const socialLinks = {
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/dorgham.music/',
  soundcloud: process.env.NEXT_PUBLIC_SOUNDCLOUD_URL || 'https://soundcloud.com/idorgham',
  // ... other links
};
```

## Troubleshooting

### Common Issues

#### Environment Variables Not Loading
1. **Check file name**: Must be `.env.local` for local development
2. **Restart development server**: `npm run dev`
3. **Check variable names**: Must start with `NEXT_PUBLIC_` for client-side access
4. **Verify syntax**: No spaces around `=` sign

#### Variables Not Available in Browser
1. **Check prefix**: Must use `NEXT_PUBLIC_` prefix
2. **Rebuild application**: Environment variables are embedded at build time
3. **Check deployment**: Variables must be set in Vercel dashboard

#### Build Failures
1. **Check for undefined variables**: Provide fallback values
2. **Validate syntax**: Check for typos in variable names
3. **Check quotes**: Use proper quote escaping

### Debugging Environment Variables

#### 1. Log Variables (Development Only)
```typescript
// Only in development
if (process.env.NODE_ENV === 'development') {
  console.log('Environment variables:', {
    gaId: process.env.NEXT_PUBLIC_GA_ID,
    contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  });
}
```

#### 2. Check Build Output
```bash
# Check if variables are included in build
npm run build
# Look for environment variable values in the output
```

## Future Considerations

### Potential Environment Variables

#### 1. API Endpoints
```bash
# If you add API endpoints later
NEXT_PUBLIC_API_URL=https://api.dorgham.me
NEXT_PUBLIC_API_VERSION=v1
```

#### 2. Feature Flags
```bash
# For enabling/disabling features
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_ENABLE_CHAT=false
```

#### 3. Third-party Services
```bash
# For additional services
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
NEXT_PUBLIC_SENTRY_DSN=https://...
```

## Environment Variable Checklist

### Before Deployment
- [ ] All required variables are set
- [ ] Default values are provided for optional variables
- [ ] No sensitive data in public variables
- [ ] Variables are set in Vercel dashboard
- [ ] Local development works with `.env.local`

### After Deployment
- [ ] Variables are accessible in production
- [ ] No console errors related to undefined variables
- [ ] All features work as expected
- [ ] Analytics and tracking work (if configured)

---

**Note**: This project currently works without any environment variables. The variables listed above are optional enhancements that can be added as needed.

**Last Updated**: October 2024  
**Version**: 1.0
