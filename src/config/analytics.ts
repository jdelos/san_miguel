// Analytics configuration
export const analyticsConfig = {
  // Replace with your actual Google Analytics 4 measurement ID
  // Get this from your Google Analytics dashboard
  googleAnalyticsId: "G-XXXXXXXXXX", // Example: "G-1234567890"
  
  // Enable/disable analytics in development
  enableInDevelopment: false,
  
  // Cookie consent settings
  cookieConsent: {
    // Default consent state for analytics
    defaultAnalyticsConsent: 'denied',
    
    // Cookie expiration time in days
    cookieExpirationDays: 365,
    
    // Privacy policy and terms URLs
    privacyPolicyUrl: '/privacy',
    termsOfUseUrl: '/terms',
  }
};

// Helper function to check if analytics should be enabled
export function shouldEnableAnalytics(): boolean {
  if (import.meta.env.DEV) {
    return analyticsConfig.enableInDevelopment;
  }
  return true;
}

// Helper function to get GA ID
export function getGoogleAnalyticsId(): string {
  return analyticsConfig.googleAnalyticsId;
}
