import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇
let systemname: string = "SuperSystem";
let version: number = 1;
let nombreUsuario: string = "Carlos Quintero";

console.log( `---Bienvenido al ${systemname}
      versión ${version} 
    ${nombreUsuario}----`);

// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();
/* Profe sufri casi las dos horas por que me daba error me apoye de intenet y era incompatibildades 
en las versiones de TypeScript, node y del tsnode */