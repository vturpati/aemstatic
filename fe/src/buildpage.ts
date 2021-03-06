import 'core-js/es7/reflect';
import 'zone.js/dist/zone-node';

import * as fs from 'fs';
import * as path from 'path';
import { enableProdMode } from '@angular/core';
import { renderModule } from '@angular/platform-server';
const { FuseBox } = require('fuse-box');
import { AppServerModule } from './app/app-server.module';
import { C1, C2, C3 ,Div} from './app/c1-c3.component';
import {PageResquest} from './page';
enableProdMode();
var p = new PageResquest();
console.log(JSON.stringify(p.pagejson("http://localhost:4502/content/myHTL63/en/test")));
let name= JSON.stringify(p.pagejson("http://localhost:4502/content/myHTL63/en/test"));
let file = `
<html>
<head>
    <title>Hello, Angular!</title>
    <style>
        hidden { display: none; }
    </style>
</head>

<body>
    <app-root  props2='${name}' >Loading...</app-root>    
    <script src="vendor.js"></script>
    <script src="app.js"></script>
</body>

</html>
`;
console.log(file);
renderModule(AppServerModule, {
	document: file
}).then((result: string) => {
	var filePath = "dist/content/index.html";
	var dirname = path.dirname(filePath);
	//loadjs(dirname);
	ensureDirectoryExistence(filePath);
	fs.writeFile(filePath, result, function (err) {
		if (err) return console.log(err);
		console.log('sucess');
	  });
});



function ensureDirectoryExistence(filePath) {
	var dirname = path.dirname(filePath);
	if (fs.existsSync(dirname)) {
	  return true;
	}
	ensureDirectoryExistence(dirname);
	fs.mkdirSync(dirname);
  }