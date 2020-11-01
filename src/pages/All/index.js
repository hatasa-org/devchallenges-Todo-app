import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonPage,
  IonCheckbox,
  IonList,
  IonItem,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonButton,
} from "@ionic/react";
import AddTask from "../../components/AddTask";

const All = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")));

  if ("tasks" in localStorage) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } else {
    const defaultTask = [];
    setTasks((tasks) => defaultTask);
    localStorage.setItem("tasks", JSON.stringify(defaultTask));
  }

  const [newTask, set_newTask] = useState({ title: "", isCompleted: false });

  const toggleIsCompleted = (i) => {
    const tmp = JSON.parse(JSON.stringify(tasks));
    tmp[i].isCompleted = !tmp[i].isCompleted;
    setTasks(tmp);
    // setTasks((prevState) => {
    //   prevState[i].isCompleted = !prevState[i].isCompleted;
    //   return [...prevState];
    // });
  };

  return (
    <IonPage>
      <IonContent>
        {/* <AddTask /> */}
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
                }}
              >
                add
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonList>
          {JSON.parse(localStorage.getItem("tasks")).map(
            ({ title, isCompleted }, i) => {
              // {tasks.map(({ title, isCompleted }, i) => {
              return (
                <IonItem key={i} lines="full">
                  {isCompleted ? (
                    <IonLabel style={{ textDecorationLine: "line-through" }}>
                      {title}
                    </IonLabel>
                  ) : (
                    <IonLabel>{title}</IonLabel>
                  )}
                  <IonCheckbox
                    slot="start"
                    value={title}
                    checked={isCompleted}
                    onIonChange={() => {
                      toggleIsCompleted(i);
                    }}
                  />
                </IonItem>
              );
            }
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default All;
