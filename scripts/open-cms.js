#!/usr/bin/env node

import { exec } from 'child_process';
import { platform } from 'os';

const baseUrl = 'http://localhost:4321';
const cmsUrl = `${baseUrl}/keystatic`;

// Function to open URL in default browser
function openUrl(url) {
  const command = platform() === 'win32' ? 'start' : 
                 platform() === 'darwin' ? 'open' : 'xdg-open';
  
  exec(`${command} "${url}"`, (error) => {
    if (error) {
      console.log(`Please open: ${url}`);
    }
  });
}

console.log('🚀 Opening Keystatic CMS...');
console.log(`📝 CMS: ${cmsUrl}`);
console.log(`🌐 Site: ${baseUrl}`);
console.log('');

// Open CMS in browser
setTimeout(() => openUrl(cmsUrl), 1000);

// Also provide direct links
console.log('Direct links:');
console.log(`CMS:  ${cmsUrl}`);
console.log(`Site: ${baseUrl}`);
