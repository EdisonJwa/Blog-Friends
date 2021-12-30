const yaml = require('js-yaml');
const fs   = require('fs');

// Get document, or throw exception on error
try {
  const friends = yaml.load(fs.readFileSync('./src/links.yml', 'utf8'));
  try {
    fs.mkdirSync('./dist');
  } catch (e) {
    if (e.code !== 'EEXIST') throw e;
  }
  fs.writeFileSync('./dist/links.json', JSON.stringify(friends));
} catch (e) {
  console.log(e);
}