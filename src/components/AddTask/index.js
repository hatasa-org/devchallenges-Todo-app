import React, { useState } from "react";
import { IonGrid, IonRow, IonCol, IonInput, IonButton } from "@ionic/react";

const AddTask = ({ addNewTask }) => {
  // const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")));

  // if ("tasks" in localStorage) {
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // } else {
  //   const defaultTask = [];
  //   setTasks((tasks) => defaultTask);
  //   localStorage.setItem("tasks", JSON.stringify(defaultTask));
  // }

  const [newTask, setNewTask] = useState({ title: "", isCompleted: false });

  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonInput
            type="text"
            value={newTask.title}
            onIonChange={(e) => {
              setNewTask({ title: e.target.value, isCompleted: false });
            }}
            placeholder="add task"
          />
        </IonCol>
        <IonCol>
          <IonButton
            onClick={() => {
              addNewTask(newTask);
              // setTasks((prevState) => {
              //   localStorage.setItem(
              //     "tasks",
              //     JSON.stringify([...prevState, newTask])
              //   );
              //   return [...prevState, newTask];
            }}
          >
            add
          </IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default AddTask;
