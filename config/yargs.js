const yargs = require('yargs');

// Configuro YARGS
const argv = yargs
  .options({
    b: {
      alias: 'base',
      type: 'number',
      demandOption: true,
      describe: 'Es la base de la tabla de multiplicar'
    },
    l: {
      alias: 'limite',
      type: 'number',
      demandOption: false,
      describe: 'Establece hasta que número se quiere multiplicar'
    },
    m: {
      alias: 'mostrar',
      type: 'boolean',
      default: false,
      demandOption: false,
      describe: 'Muestra la tabla en consola'
    }
  })
  .check((argv, options) => {
    if(isNaN(argv.b)) {
      throw 'La base debe ser un número';
    }

    if(argv.l != undefined && isNaN(argv.l)) {
      throw 'El límite debe ser un número';
    }

    return true;
  })
  .argv;

  module.exports = argv;
  