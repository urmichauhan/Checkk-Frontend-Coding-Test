const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'dist/gh-pages/browser');

const csr = path.join(dir, 'index.csr.html');
const target = path.join(dir, 'index.html');

if (fs.existsSync(csr)) {
  fs.renameSync(csr, target);
  console.log('✔ index.csr.html renamed to index.html');
} else {
  console.log('❌ index.csr.html not found');
}
