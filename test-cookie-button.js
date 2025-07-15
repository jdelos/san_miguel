// Test script for cookie preferences button
// Run this in browser console to test

console.log("🧪 Testing Cookie Preferences Button");

// Check if button exists
const button = document.getElementById('cookie-settings-btn');
console.log("Button found:", button ? "✅ Yes" : "❌ No");

// Check if global function exists
console.log("Global function exists:", typeof window.showCookiePreferences === 'function' ? "✅ Yes" : "❌ No");

// Check if modal exists
const modal = document.getElementById('cookie-preferences-modal');
console.log("Modal exists:", modal ? "✅ Yes" : "❌ No");

// Test the button click
if (button) {
  console.log("🔘 Simulating button click...");
  button.click();
  setTimeout(() => {
    const isModalVisible = modal && !modal.classList.contains('hidden');
    console.log("Modal opened:", isModalVisible ? "✅ Yes" : "❌ No");
  }, 200);
} else {
  console.log("❌ Cannot test - button not found");
}

// Manual test function
console.log("\n🧪 Manual test:");
console.log("Run: window.showCookiePreferences()");
console.log("Or: document.getElementById('cookie-settings-btn').click()");
