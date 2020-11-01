import React, { useState } from "react";
import { IonGrid, IonRow, IonCol, IonInput, IonButton } from "@ionic/react";

const AddTask = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")));

  localStorage.setItem("tasks", JSON.stringify(tasks));
  console.log(localStorage.getItem("tasks"));

  const [newTask, set_newTask] = useState({ title: "", isCompleted: false });

  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonInput
            type="text"
            value={newTask.title}
            onIonChange={(e) => {
              set_newTask({ ...newTask, title: e.target.value });
            }}
            placeholder="add task"
          />
        </IonCol>
        <IonCol>
          <IonButton
            onClick={() => {
              setTasks((tasks) => [...tasks, newTask]);
              // localStorage.setItem("tasks", [...tasks, newTask]);
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
