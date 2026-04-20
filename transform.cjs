const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(/hover:bg-brand-gold-dark/g, 'hover:bg-brand-navy hover:text-white');

fs.writeFileSync('src/App.tsx', code);
console.log('Done');
