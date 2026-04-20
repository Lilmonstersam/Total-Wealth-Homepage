import https from 'https';
https.get('https://totalwealth.com.au/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const matches = data.match(/color:\s*#[a-fA-F0-9]{3,6}/g);
    const bgMatches = data.match(/background-color:\s*#[a-fA-F0-9]{3,6}/g);
    const fonts = data.match(/font-family:[^;\"\}]+/g);
    console.log("Colors:", [...new Set(matches)]);
    console.log("Backgrounds:", [...new Set(bgMatches)]);
    console.log("Fonts:", [...new Set(fonts)]);
  });
}).on('error', err => {
  console.log('Error: ', err.message);
});
