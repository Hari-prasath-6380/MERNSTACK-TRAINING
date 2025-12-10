const path = require('path');
const basename = path.basename('/DAY2/path_module.js');
console.log('Base name:', basename);  

const extension = path.extname('/DAY2/path_module.js');
console.log('Extension name:', extension);

const joinedPath = path.join('/DAY2', 'path_module.js');
console.log('Joined path:', joinedPath);