const { crearArchivoTabla } = require('./helpers/multiplicar.js');
const argv = require('./config/yargs.js');
require('colors');

console.clear();

crearArchivoTabla(argv.b, argv.l, argv.m).then((fileName) => {
  console.log(`${fileName} ha sido creado exitosamente!`.cyan);
}).catch((err)=> {
  console.log(err);
});

