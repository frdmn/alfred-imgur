'use strict';
const os = require('os');
const path = require('path');
const alfy = require('alfy');
const dotenv = require('dotenv');
const imgur = require('imgur');
const clipboardy = require('clipboardy');

// Load config from ~/.alfred-imgur
dotenv.config({path: path.join(os.homedir(), '.alfred-imgur.conf')});

// Check for errors
if (alfy.input === 'errorNoSelection') {
	console.log(`Error: no file selected`);
} else if (alfy.input === 'errorFolder') {
	console.log(`Error: folder detected - please select a file`);
// eslint-disable-next-line no-negated-condition
} else if (!path.extname(alfy.input).match(/(jpg|png|gif|tiff)/)) {
	console.log(`Error: no valid image file extension detected`);
} else {
	// Set client id
	imgur.setClientId(process.env.APIKEY);
	// Upload file to Imgur
	imgur.uploadFile(alfy.input).then(function (json) {
		// Copy upload URL to clipboard and write to stdout
		clipboardy.writeSync(json.data.link);
		console.log(json.data.link);
	}).catch(function (err) {
		console.error(`Error: ${err.message}`);
	});
}
