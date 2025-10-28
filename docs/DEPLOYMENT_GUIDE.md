# Deployment Guide for Dorgham.me

## Overview
This guide will help you deploy your website to Vercel and configure the dorgham.me domain. The website is built with Next.js and is ready for deployment.

## Prerequisites
- GitHub account with your website repository
- Domain name: dorgham.me (purchased and ready to configure)
- Vercel account (we'll create this in the guide)

## Part 1: Vercel Account Setup

### 1.1 Create Vercel Account
1. Go to **https://vercel.com**
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"** (recommended)
4. Authorize Vercel to access your GitHub account
5. Complete the signup process

### 1.2 Connect GitHub Repository
1. In your Vercel dashboard, click **"New Project"**
2. Find your repository: `DjDorgham/dorgham-website` (or your repository name)
3. Click **"Import"**
4. Vercel will automatically detect it's a Next.js project

## Part 2: Project Configuration

### 2.1 Build Settings
Vercel will automatically configure these settings for Next.js:
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### 2.2 Environment Variables
If you have any environment variables, add them in Vercel:
1. Go to **Project Settings** → **Environment Variables**
2. Add any required variables (currently none needed)

### 2.3 Domain Configuration
1. In your project dashboard, go to **Settings** → **Domains**
2. Click **"Add Domain"**
3. Enter `dorgham.me`
4. Click **"Add"**

## Part 3: Domain DNS Configuration

### 3.1 Get Vercel DNS Records
After adding the domain, Vercel will show you the required DNS records:
- **A Record**: Points to Vercel's IP address
- **CNAME Record**: For www subdomain

### 3.2 Configure DNS at Your Domain Registrar
1. Log into your domain registrar (where you bought dorgham.me)
2. Go to DNS management
3. Add the following records:

#### A Record
- **Type**: A
- **Name**: @ (or leave blank)
- **Value**: `76.76.19.61` (Vercel's IP - check Vercel dashboard for current IP)
- **TTL**: 3600 (or default)

#### CNAME Record
- **Type**: CNAME
- **Name**: www
- **Value**: `cname.vercel-dns.com`
- **TTL**: 3600 (or default)

### 3.3 Alternative: Use Vercel Nameservers
If your domain registrar supports it, you can use Vercel's nameservers:
1. In Vercel dashboard, go to **Domains** → **dorgham.me**
2. Click **"Use Vercel Nameservers"**
3. Update nameservers at your domain registrar:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`

## Part 4: SSL Certificate

### 4.1 Automatic SSL
Vercel automatically provides SSL certificates for all domains:
- **Certificate**: Let's Encrypt (free)
- **Auto-renewal**: Automatic
- **HTTPS**: Enabled by default

### 4.2 Verify SSL
1. Wait 5-10 minutes after DNS propagation
2. Visit `https://dorgham.me`
3. Check that the SSL certificate is valid
4. Verify the lock icon in your browser

## Part 5: Deployment Process

### 5.1 Initial Deployment
1. After connecting your repository, Vercel will automatically deploy
2. You'll get a preview URL like `https://dorgham-website-abc123.vercel.app`
3. Test the preview URL to ensure everything works

### 5.2 Production Deployment
1. Once DNS is configured and domain is verified
2. Your site will be live at `https://dorgham.me`
3. Vercel will automatically handle the domain connection

## Part 6: Post-Deployment Configuration

### 6.1 Redirect Configuration
Create a `vercel.json` file in your project root:

```json
{
  "redirects": [
    {
      "source": "/www.dorgham.me",
      "destination": "https://dorgham.me",
      "permanent": true
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### 6.2 Performance Optimization
Vercel automatically optimizes your Next.js app:
- **Image Optimization**: Automatic
- **Code Splitting**: Automatic
- **CDN**: Global edge network
- **Caching**: Automatic caching headers

## Part 7: Monitoring and Analytics

### 7.1 Vercel Analytics
1. Go to **Analytics** tab in your Vercel dashboard
2. Enable Vercel Analytics (optional)
3. Monitor performance metrics

### 7.2 Google Analytics Setup
1. Create Google Analytics account
2. Get your tracking ID
3. Add to your website (if not already configured)

## Part 8: Testing Your Deployment

### 8.1 Basic Functionality Tests
- [ ] Homepage loads correctly
- [ ] All pages are accessible
- [ ] Contact form works (after Formspree setup)
- [ ] Booking form works (after Formspree setup)
- [ ] All links work properly
- [ ] Images load correctly
- [ ] Mobile responsiveness works

### 8.2 Performance Tests
- [ ] Page load speed is acceptable
- [ ] Images are optimized
- [ ] No console errors
- [ ] SSL certificate is valid
- [ ] HTTPS redirects work

### 8.3 SEO Tests
- [ ] Meta tags are present
- [ ] Open Graph tags work
- [ ] Sitemap is accessible
- [ ] Robots.txt is accessible
- [ ] All pages are indexed

## Part 9: Maintenance and Updates

### 9.1 Automatic Deployments
- Every push to your main branch triggers a new deployment
- Preview deployments for pull requests
- Automatic rollback on deployment failures

### 9.2 Manual Deployments
1. Go to **Deployments** tab in Vercel dashboard
2. Click **"Redeploy"** for manual deployment
3. Use **"Promote to Production"** for preview deployments

### 9.3 Environment Management
- **Production**: `dorgham.me`
- **Preview**: Automatic for pull requests
- **Development**: Local development server

## Troubleshooting

### Common Issues

#### Domain Not Working
1. Check DNS propagation: https://dnschecker.org
2. Verify DNS records are correct
3. Wait up to 24 hours for full propagation
4. Check domain status in Vercel dashboard

#### SSL Certificate Issues
1. Wait 5-10 minutes after domain verification
2. Check certificate status in Vercel dashboard
3. Clear browser cache and try again
4. Contact Vercel support if issues persist

#### Build Failures
1. Check build logs in Vercel dashboard
2. Verify all dependencies are in package.json
3. Check for TypeScript errors
4. Ensure all imports are correct

#### Performance Issues
1. Check Vercel Analytics for insights
2. Optimize images and assets
3. Review bundle size
4. Consider upgrading Vercel plan if needed

### Getting Help
- **Vercel Documentation**: https://vercel.com/docs
- **Vercel Support**: Available in your dashboard
- **Community Forum**: https://github.com/vercel/vercel/discussions

## Security Best Practices

### 1. HTTPS Only
- Vercel automatically redirects HTTP to HTTPS
- SSL certificates are automatically managed
- HSTS headers are automatically set

### 2. Security Headers
The `vercel.json` configuration includes security headers:
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection

### 3. Environment Variables
- Never commit sensitive data to your repository
- Use Vercel's environment variable system
- Rotate keys regularly

## Cost Considerations

### Vercel Free Tier
- **Bandwidth**: 100GB per month
- **Build Minutes**: 6,000 per month
- **Functions**: 100GB-hours per month
- **Domains**: Unlimited custom domains

### Upgrading Plans
- **Pro Plan**: $20/month for higher limits
- **Team Plan**: $20/user/month for team features
- **Enterprise**: Custom pricing for large organizations

## Next Steps After Deployment

1. **Set up Formspree** (see Formspree Setup Guide)
2. **Configure Google Analytics** (if desired)
3. **Set up monitoring** and alerts
4. **Test all functionality** thoroughly
5. **Share your website** with the world!

---

**Need Help?**
If you encounter any issues during deployment, check the troubleshooting section above or contact Vercel support through your dashboard.

**Last Updated**: October 2024  
**Version**: 1.0
