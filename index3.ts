import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = createInterface({ input, output });

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const tareas: Task[] = [];

let id = 1;

const saveToDB = (tarea: Task) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log(`Tarea guardada en la base de datos: ${tarea.title}`);
      resolve();
    }, 2000);
  });
};

const addTask = async (title: string) => {
  try {
    if (!title) {
      throw new Error("El título no puede estar vacío");
    }

    const tarea: Task = {
      id: id,
      title: title,
      completed: false,
    };

    await saveToDB(tarea);

    tareas.push(tarea);
    id++;

    console.log("Tarea agregada");
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error:", error.message);
    }
  }
};

const listTasks = () => {
  const tareasFormateadas = tareas.map((task) => {
    const { id, title, completed } = task;

    let estado = "pending";

    if (completed === true) {
      estado = "completed";
    }

    return `[${id}] ${title} - ${estado}`;
  });

  tareasFormateadas.forEach((tarea) => {
    console.log(tarea);
  });
};

const removeTask = () => {
  const tareaEliminada = tareas.pop();

  if (tareaEliminada) {
    console.log(`Tarea eliminada: ${tareaEliminada.title}`);
  } else {
    console.log("No hay tareas para eliminar");
  }
};

const markCompleted = (id: number) => {
  const tarea = tareas.find((task) => task.id === id);

  if (tarea) {
    tarea.completed = true;
    console.log("Tarea completada");
  } else {
    console.log("Tarea no encontrada");
  }
};

const filterPending = () => {
  return tareas.filter((task) => task.completed === false);
};

const filterCompleted = () => {
  return tareas.filter((task) => task.completed === true);
};

let opcion = "";

while (opcion !== "7") {
  console.log("===== GESTOR DE TAREAS =====");
  console.log("1. Agregar tarea");
  console.log("2. Eliminar última tarea");
  console.log("3. Listar tareas");
  console.log("4. Marcar tarea como completada");
  console.log("5. Ver tareas pendientes");
  console.log("6. Ver tareas completadas");
  console.log("7. Salir");

  opcion = await rl.question("Elige una opción: ");

  if (opcion === "1") {
    const title = await rl.question("Escribe una tarea: ");

    await addTask(title);
  } else if (opcion === "2") {
    removeTask();
  } else if (opcion === "3") {
    listTasks();
  } else if (opcion === "4") {
    const idTarea = await rl.question("Ingresa el ID: ");

    markCompleted(Number(idTarea));
  } else if (opcion === "5") {
    const pendientes = filterPending();

    pendientes.forEach((task) => {
      console.log(`[${task.id}] ${task.title} - pending`);
    });
  } else if (opcion === "6") {
    const completadas = filterCompleted();

    completadas.forEach((task) => {
      console.log(`[${task.id}] ${task.title} - completed`);
    });
  } else if (opcion === "7") {
    console.log("Programa terminado");
  } else {
    console.log("Opción incorrecta");
  }
}

rl.close();
