var path = require('path')
var childProcess = require('child_process')
var phantomjs = require('phantomjs')
var binPath = phantomjs.path

var childArgs = [
  path.join(__dirname, 'phantomjs-script.js'),
  'some other argument (passed to phantomjs script)'
]

childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
  // handle results
})

app.use('/static', express.static(__dirname+'/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(request, response){
  response.sendFile(path.join(__dirname + '/views/index.html'));
});

server.listen(process.env.PORT || 3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;
