const fs = require('fs');
require('colors');

const crearArchivoTabla = async (base, limite = 10, mostrar) => {
  try {
    const fileName = `tabla-${base}.txt`;
    let salida = '';
    let consola = '';

    for (let i = 1; i <= limite; i++) {
      // BASE x i = PRODUCTO
      consola += `${base.toString().brightGreen} ${'x'.brightRed} ${i.toString().brightGreen} ${'='.brightRed} ${(base * i).toString().white}\n`;
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    if (mostrar) {
      console.log('=====================');
      console.log(`     Tabla del: ${base}    `.rainbow.bgBlack);
      console.log('=====================\n');
      console.log(consola);
    }

    fs.writeFileSync(`./tablas/${fileName}`, salida);

    return fileName;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  crearArchivoTabla,
}