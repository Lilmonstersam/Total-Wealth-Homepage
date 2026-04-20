const fs = require('fs');
let code = fs.readFileSync('src/index.css', 'utf8');

code = code.replace(/--color-brand-gold: #c5a059;/, '--color-brand-primary: #CF2D2E;');

fs.writeFileSync('src/index.css', code);
console.log('CSS modified');

let appCode = fs.readFileSync('src/App.tsx', 'utf8');
appCode = appCode.replace(/brand-gold/g, 'brand-primary');
fs.writeFileSync('src/App.tsx', appCode);
console.log('App modified');
