const child_process = require('child_process');

let nombre = null;
let ext = null;
let indicador = null;
let cantidad = null;

if (process.argv.length > 5) {

    nombre = process.argv[2];
    ext = process.argv[3];
    indicador = process.argv[4];
    cantidad = process.argv[5];
    
    child_process.exec(`node desafio.js ${nombre} ${ext} ${indicador} ${cantidad}`, (err, resp) => {

        console.log(resp);
    })
}
