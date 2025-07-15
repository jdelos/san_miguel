# Google Analytics and Cookie Consent Setup

This document explains how to configure Google Analytics and cookie consent for the Hospital San Miguel website.

## Google Analytics Configuration

### Step 1: Get Your Google Analytics ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Create a new property for your website
4. Get your **Measurement ID** (it looks like `G-XXXXXXXXXX`)

### Step 2: Update the Configuration

Edit `src/config/analytics.ts` and replace the placeholder with your actual Google Analytics ID:

```typescript
export const analyticsConfig = {
  // Replace with your actual Google Analytics 4 measurement ID
  googleAnalyticsId: "G-YOUR-ACTUAL-ID", // Change this!
  
  // Enable/disable analytics in development
  enableInDevelopment: false,
  
  // Other settings...
};
```

### Step 3: Enable Analytics in Production

By default, analytics are disabled in development mode. They will automatically be enabled when you build for production.

To enable analytics in development for testing:

```typescript
export const analyticsConfig = {
  googleAnalyticsId: "G-YOUR-ACTUAL-ID",
  enableInDevelopment: true, // Set to true for testing
  // ...
};
```

## Cookie Consent Features

### What's Included

- **GDPR Compliant**: Asks for user consent before tracking
- **Spanish Language**: Fully translated interface
- **Categorized Cookies**: Separate categories for necessary and analytics cookies
- **Modern Design**: Clean, card-based design with Hospital San Miguel branding
- **Persistent**: Remembers user preferences in localStorage

### How It Works

1. **First Visit**: Users see a cookie consent banner
2. **Analytics Consent**: Google Analytics only tracks if user consents
3. **Preference Management**: Users can change their preferences anytime
4. **Automatic Cleanup**: Cookies are automatically cleared if consent is withdrawn

### Footer Integration

A "Configuración de Cookies" link is added to the footer that allows users to:
- View current cookie preferences
- Change their consent choices
- Learn more about cookie usage

## Privacy Pages

The following pages are automatically created and linked in the cookie consent:

- `/privacy` - Privacy Policy page
- `/terms` - Terms of Use page

These pages are fully translated to Spanish and include relevant information about:
- Data collection and usage
- Cookie policy
- User rights
- Contact information

## Customization

### Changing Colors

The cookie consent uses CSS classes that can be customized in `src/components/CookieConsent.astro`:

```css
.cookie-btn-primary {
  background: #EE2D2E; /* Hospital red */
  color: white;
}

.cookie-btn-primary:hover {
  background: #D11B1C;
}
```

### Modifying Text

The cookie consent text can be modified directly in the HTML section of `src/components/CookieConsent.astro`.

### Adding More Cookie Categories

To add more cookie categories, modify the HTML structure and JavaScript logic in `src/components/CookieConsent.astro`.

## Testing

### Development Testing

1. Enable analytics in development mode
2. Open browser developer tools
3. Check the Network tab for Google Analytics requests
4. Verify cookies are set only after consent

### Production Testing

1. Build and deploy the site
2. Visit the site and interact with the cookie consent
3. Verify Google Analytics is tracking correctly
4. Test the "Configuración de Cookies" link in the footer

## Troubleshooting

### Analytics Not Working

1. **Check the GA ID**: Make sure you're using the correct Google Analytics 4 ID
2. **Verify Consent**: Ensure you've accepted analytics cookies
3. **Check Console**: Look for any JavaScript errors in the browser console
4. **Test in Production**: Analytics might be disabled in development mode

### Cookie Consent Not Appearing

1. **Check Storage**: Clear localStorage with `localStorage.removeItem('hospital-cookie-consent')`
2. **Check Console**: Look for JavaScript errors
3. **Reload Page**: Banner should appear after clearing storage

### Custom Styling Not Working

1. **CSS Specificity**: Make sure your custom styles have higher specificity
2. **Check Classes**: Verify CSS class names match those in the component
3. **Browser Cache**: Clear browser cache and reload

## Legal Compliance

This setup provides:
- ✅ GDPR compliance (EU)
- ✅ Explicit consent for analytics
- ✅ Easy opt-out mechanism
- ✅ Clear privacy information
- ✅ Cookie categorization

Make sure to:
- Review and update the privacy policy for your specific use case
- Ensure all cookie usage is documented
- Regularly audit your analytics setup
- Keep the consent mechanism up to date

## Support

For issues or questions about this setup:
1. Check the browser console for errors
2. Test cookie consent with `localStorage.removeItem('hospital-cookie-consent')`
3. Verify your Google Analytics configuration
4. Review the component code in `src/components/CookieConsent.astro`
5. Contact the development team if needed
