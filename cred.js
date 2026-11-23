const fs = require('fs');
const fileName = 'data.txt';

// 1. CREATE
fs.writeFileSync(fileName, 'Hello, this is the initial content.\n');
console.log('1. File created successfully.');

// 2. READ
const content = fs.readFileSync(fileName, 'utf-8');
console.log('2. File Content:\n' + content);

// 3. UPDATE
fs.appendFileSync(fileName, 'This line was appended during update.\n');
const updatedContent = fs.readFileSync(fileName, 'utf-8');
console.log('3. Updated Content:\n' + updatedContent);

// 4. DELETE
fs.unlinkSync(fileName);
console.log('4. File deleted successfully.');