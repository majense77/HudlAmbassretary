var express = require('express');
var hipchat = require('node-hipchat');

var app = express();
var HC = new hipchat('075c106de837269ea0177388ba1c04');

var botName = 'PepperBotts';
var color = ['green', 'red', 'yellow', 'purple', 'grey', 'random'];
var room = ['Delivery', 'Interview', 'Other', 'dev-null', 'QA Interns United'];

app.get('/', function(request, response) {
    response.sendfile(__dirname + '/index.html');
});

app.get('/style.css', function(request, response) {
    response.sendfile(__dirname + '/style.css');
});

app.get('/name.js', function(request, response) {
    response.sendfile(__dirname + '/name.js');
});

app.get('/expand.js', function(request, response) {
    response.sendfile(__dirname + '/expand.js');
});

app.get('/hipchat.js', function(request, response) {
    response.sendfile(__dirname + '/hipchat.js');
});

app.get('/hudlAmbassador.png', function(request, response) {
    response.sendfile(__dirname + '/hudlAmbassador.png');
});

app.get('/favicon.ico', function(request, response) {
    response.sendfile(__dirname + '/favicon.ico');
});

app.get('/check.png', function(request, response) {
    response.sendfile(__dirname + '/check.png');
});

app.get('/check.png', function(request, response) {
    response.sendfile(__dirname + '/check.png');
});

app.get('/x.png', function(request, response) {
    response.sendfile(__dirname + '/x.png');
});

app.get('/test', function(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.end('First node.js example');
});

app.get('/yay', function(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.end('Different');
});

app.get('/api/people', function(request, response) {
    response.writeHead(200, {
        'Content-Type': 'application/json'
    });
    hipchatter.users(function(err, res) {
        if (err) {
            response.end("Failed");
            throw err;
        }
        console.log(res);
        response.end(JSON.stringify(res));
    });
});

app.get('/api/delivery', function(request, response) {
    response.writeHead(200, {
        'Content-Type': 'application/json'
    });
    var params = {
        'room': room[0], // Found in the JSON response from the call above
        'from': botName,
        'message': 'A delivery has arrived!',
        'color': color[3],
        'notify': '1'
    };
    HC.postMessage(params, function(data) {
        console.log(data);
    });
    response.end(JSON.stringify({
        something: request.params["name"]
    }));
});

app.get('/api/interview', function(request, response) {
    response.writeHead(200, {
        'Content-Type': 'application/json'
    });
    var params = {
        room: room[1], // Found in the JSON response from the call above
        from: botName,
        message: 'Your next interview candidate is here!',
        color: color[3],
        notify: '1'
    };
    HC.postMessage(params, function(data) {
        console.log(data);
    });
    response.end(JSON.stringify({
        something: request.params["name"]
    }));
});

app.post('/', function(request, response) {

});

app.get('/api/other/:name', function(request, response) {
    response.writeHead(200, {
        'Content-Type': 'application/json'
    });
    var otherMessage = request.params["name"] + ' is here to visit someone.';
    var params = {
        room: room[2], // Found in the JSON response from the call above
        from: botName,
        message: otherMessage,
        color: color[3],
        notify: '1'
    };
    console.log(params["message"]);
    HC.postMessage(params, function(data) {
        console.log(data);
    });
    response.end("");
});

app.post('/', function(request, response) {

});

app.listen(8123);

console.log('Server running at http://localhost:8123/');