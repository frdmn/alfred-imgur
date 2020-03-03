'use strict';
const os = require('os');
const path = require('path');
const alfy = require('alfy');
const dotenv = require('dotenv');
const imgur = require('imgur');
const clipboardy = require('clipboardy');

// Load config from ~/.alfred.ldap
dotenv.config({path: path.join(os.homedir(), '.alfred-imgur.conf')});

if (alfy.input === 'errorNoSelection') {
	console.log('Error: no file selected');
} else if (alfy.input === 'errorFolder') {
	console.log('Error: folder detected - please select a file');
} else {
	imgur.setClientId(process.env.APIKEY);
	imgur.uploadFile(alfy.input).then(function (json) {
		clipboardy.writeSync(json.data.link);
		console.log(json.data.link);
	}).catch(function (err) {
		console.error(err.message);
	});
}
