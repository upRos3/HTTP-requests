var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
          console.log('There was an error: ', err);
        })
       .on('response', function (response) {
          console.log('Downloading image...');
          console.log('Response Status: ', response.statusMessage);
          console.log('Content Type: ', response.headers['content-type']);
          console.log('Download complete!')

       })
       .pipe(fs.createWriteStream('./future.jpg'));
