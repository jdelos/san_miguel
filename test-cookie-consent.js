// Test script to verify cookie consent functionality
// Run this in browser console after page loads

console.log("🍪 Testing Cookie Consent Functionality");

// Check if banner exists
const banner = document.getElementById('cookie-consent-banner');
console.log("Banner element:", banner ? "✅ Found" : "❌ Not found");

// Check if modal exists
const modal = document.getElementById('cookie-preferences-modal');
console.log("Modal element:", modal ? "✅ Found" : "❌ Not found");

// Check if storage is clear (should show banner)
const cookieChoice = localStorage.getItem('hospital-cookie-consent');
console.log("Current cookie choice:", cookieChoice || "None (banner should be visible)");

// Check if banner is visible
const bannerVisible = banner && banner.classList.contains('show');
console.log("Banner visible:", bannerVisible ? "✅ Yes" : "❌ No");

// Check if global function exists
console.log("Global function exists:", typeof window.showCookiePreferences === 'function' ? "✅ Yes" : "❌ No");

// Test functions
console.log("\n🧪 Test Functions:");
console.log("To clear cookie consent: localStorage.removeItem('hospital-cookie-consent'); location.reload()");
console.log("To show preferences: window.showCookiePreferences()");
console.log("To check analytics consent: localStorage.getItem('hospital-cookie-consent')");

// Auto-clear for testing if needed
if (location.hash === '#test') {
  localStorage.removeItem('hospital-cookie-consent');
  location.reload();
}
