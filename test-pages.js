const https = require('http');

const pages = [
  '/',
  '/about',
  '/contact',
  '/pricing',
  '/team',
  '/blog',
  '/foundation',
  '/keystatic'
];

async function testPage(path) {
  return new Promise((resolve, reject) => {
    const req = https.get(`http://127.0.0.1:4322${path}`, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 200) {
          console.log(`✅ ${path} - OK`);
          resolve(true);
        } else {
          console.log(`❌ ${path} - ${res.statusCode}`);
          resolve(false);
        }
      });
    });
    
    req.on('error', (err) => {
      console.log(`❌ ${path} - ERROR: ${err.message}`);
      resolve(false);
    });
    
    req.setTimeout(5000, () => {
      console.log(`❌ ${path} - TIMEOUT`);
      req.destroy();
      resolve(false);
    });
  });
}

async function testAllPages() {
  console.log('Testing all pages...\n');
  
  for (const page of pages) {
    await testPage(page);
  }
  
  console.log('\nTesting complete!');
}

testAllPages();
