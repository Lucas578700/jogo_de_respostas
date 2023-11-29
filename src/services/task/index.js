import {  push, ref, remove, update } from "firebase/database";
import { db } from "../../firebase/firebaseConnection";

export const deleteTask = (index) => {
  const userRef = ref(db, `/tasks/${index}`);
  remove(userRef)
    .then(() => {
      console.log(`Usuário com chave ${index} removido com sucesso.`);
    })
    .catch((error) => {
      console.error(`Erro ao remover o usuário: ${error}`);
    });
};

export const addNewUTask = (task) => {
  push(ref(db, "/tasks"), {
    title: task.title,
    deadline: task.dateTime.toLocaleString(),
    finished: false,
  });
};

export const submitEditService = (newData, index) => {
  const userRef = ref(db, `/tasks/${index}`);
  update(userRef, newData)
    .then(() => {
      console.log(`Usuário com chave ${index} removido com sucesso.`);
    })
    .catch((error) => {
      console.error(`Erro ao remover o usuário: ${error}`);
    });
};

export const checkComplete = (index, item) => {
  const userRef = ref(db, `/tasks/${index}`);
  update(userRef, {
    finished: !item.finished,
  })
    .then(() => {
      console.log(`status ${index} alterado.`);
    })
    .catch((error) => {
      console.error(`Erro ao remover o usuário: ${error}`);
    });
};
