import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = createInterface({ input, output });

const tareas: string[] = [];

let opcion = "";

while (opcion !== "4") {

    console.log("===== GESTOR DE TAREAS =====");
    console.log("1. Agregar tarea");
    console.log("2. Eliminar última tarea");
    console.log("3. Listar tareas");
    console.log("4. Salir");

    opcion = await rl.question("Elige una opción: ");

    if (opcion === "1") {

        const tarea = await rl.question("Escribe una tarea: ");

        tareas.push(tarea);

        console.log("Tarea agregada");

    } else if (opcion === "3") {

        for (let i = 0; i < tareas.length; i++) {

            console.log(`${i + 1}. ${tareas[i]}`);

        }

    }

}

console.log("Programa terminado");
/*  no entendi muy bien la clase de ayer, hice esto hasta aqui que mas o menos entendi cada funcion con ayuda de internet y el material*/