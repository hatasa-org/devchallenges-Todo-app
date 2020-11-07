import React, { useState } from "react";
import { IonGrid, IonRow, IonCol, IonInput, IonButton } from "@ionic/react";

const AddTask = ({ addNewTask }) => {
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
