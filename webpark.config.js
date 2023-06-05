const path = require('path');

module.exports={
entry:'/dist/main.js',
output:{
    filename: 'main.bundle.js',
    path: path.resolve(__dirname,'src'),
}
};
