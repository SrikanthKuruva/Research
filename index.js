import {car1, sampleClass} from './car.js';
import fs  from 'fs-extra';
import path from 'path';
import os from 'os';
import events from 'events'
import http from 'http'

console.log(car1);
console.log(sampleClass(5,9));
let folderPath = '/Users/srikanthkuruva/Documents/SFDX/scripts/nodejs';
if(fs.existsSync(folderPath)){
    //console.log(fs.readdirSync(folderPath));
}

fs.writeFileSync(`${folderPath}/sample.txt`,'some content');
fs.writeFileSync(`${folderPath}/sample.txt`,'some other content');
fs.appendFileSync(`${folderPath}/sample.txt`,'\nsome other additional content');

let door = new events();

console.log(Buffer.from('Hello!!!'));
