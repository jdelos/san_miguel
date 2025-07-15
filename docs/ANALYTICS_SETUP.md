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
- **Bilingual**: Spanish and English support
- **Categorized Cookies**: Separate categories for necessary and analytics cookies
- **Customizable**: Styled to match Hospital San Miguel branding
- **Persistent**: Remembers user preferences

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

The cookie consent modal uses CSS custom properties that can be customized in `src/components/CookieConsent.astro`:

```css
:root {
  --cc-bg: #fff;
  --cc-text: #2d3748;
  --cc-btn-primary-bg: #EE2D2E; /* Hospital red */
  --cc-btn-primary-hover-bg: #D11B1C;
  /* ... other colors */
}
```

### Modifying Text

The cookie consent text can be modified in the `language.translations` section of `src/components/CookieConsent.astro`.

### Adding More Cookie Categories

To add more cookie categories (e.g., marketing cookies), modify the `categories` section in the cookie consent configuration.

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

1. **Check Browser**: Some ad blockers might block cookie consent scripts
2. **Clear Storage**: Clear cookies and local storage, then reload
3. **Check Console**: Look for JavaScript errors

### Custom Styling Not Working

1. **CSS Import**: Make sure the vanilla-cookieconsent CSS is imported
2. **Specificity**: You might need to increase CSS specificity
3. **Check Variables**: Verify CSS custom properties are defined correctly

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
2. Review the vanilla-cookieconsent documentation
3. Verify your Google Analytics configuration
4. Contact the development team if needed
