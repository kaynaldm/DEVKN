const fs = require('fs');

async function run() {
  const htmlRes = await fetch('https://yashahire.info/');
  const html = await htmlRes.text();
  const scriptRegex = /<script[^>]+src=[\"']([^\"']+)[\"']/g;
  let match;
  let allJs = '';
  while ((match = scriptRegex.exec(html)) !== null) {
    let src = match[1];
    if (src.startsWith('/')) src = 'https://yashahire.info' + src;
    console.log('Fetching', src);
    const jsRes = await fetch(src);
    const jsText = await jsRes.text();
    allJs += jsText + '\n';
  }
  
  if (allJs.includes('spline')) console.log('Spline found in JS!');
  
  const urls = allJs.match(/https:\/\/[^\"]+\.(splinecode|spline|glb|gltf|json)/gi);
  if (urls) {
    console.log('Found 3D URLs:', [...new Set(urls)]);
  } else {
    console.log('No 3D URLs found in any JS file.');
  }
}
run();
