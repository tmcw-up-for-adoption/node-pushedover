#!/usr/bin/env node

var push = require('pushover-notifications'),
    exec = require('child_process').exec,
    cfg = require('superenv')('pushedover');

var p = new push(cfg);

exec(process.argv[2], process.argv.slice(3), function(cmderr, stdout, stderr) {
    var msg = {
        message: 'out:' + stdout.substring(0, 10) + ' err: ' + stderr.substring(0, 10),
        title: err ? 'task errored' : 'task complete',
        sound: err ? 'falling' : 'magic',
        priority: 1
    };

    if (err) console.error(err);
    if (stdout) console.log(stdout);

    p.send(msg, function(err, result) {
        process.exit(cmderr ? 1 : 0);
    });
});
