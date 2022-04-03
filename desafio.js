
const fs = require('fs');
const https = require('https');

const url = 'https://mindicador.cl/api';
let nombre = null;
let ext = null;
let indicador = null;
let cantidad = null;

if (process.argv.length > 5) {

    nombre = process.argv[2];
    ext = process.argv[3];
    indicador = process.argv[4];
    cantidad = process.argv[5];

    https.get(url, (resp) => {

        resp.on('data', respuesta => {

            let json = JSON.parse(respuesta);

            let valor_total = (parseInt(cantidad) / parseInt(json[`${indicador}`].valor)).toFixed(2);

            fs.writeFile(`${nombre}.${ext}`,`
            A la fecha: ${json.fecha}
            Fue realizada cotización con los siguientes datos:
            Cantidad de pesos a convertir: ${cantidad} pesos
            Convertido a "${indicador}" da un total de:
            $ ${valor_total}`,
            'utf-8',
            (err) => {
        
                console.log(err);
            })

            fs.readFile(`${nombre}.${ext}`, 'utf-8', (err, data) => {
                console.log(err);
                console.log(data);
            })
        })
    })
    .on('error' , error => {
        console.log(error);
    })
}