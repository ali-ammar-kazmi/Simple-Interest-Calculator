const http = require('http');
const {readFileSync} = require('fs');

const homehtml = readFileSync('./index.html');
const homecss = readFileSync('./index.css');
const homejs = readFileSync('./index.js');


const server =http.createServer((req, res)=>{
	const url = req.url;
	if (url==='/'){
		res.writeHead(200, {'content-type': 'text/html'});
		res.write(homehtml);
		res.end();
	}
	if (url==='/index.css'){
		res.writeHead(200, {'content-type': 'text/css'});
		res.write(homecss);
		res.end();
	}
	if (url==='/index.js'){
		res.writeHead(200, {'content-type': 'text/js'});
		res.write(homejs);
		res.end();
	}
});
server.listen(5000);
