const app = require('node-server-screenshot');
app.fromHTML("<html><body>Hello world!</body></html>", '/app/icons/dist/icons.png', function(){
    console.log('added an image');
    //an image of google.com has been saved at ./test.png
});

module.exports = app;