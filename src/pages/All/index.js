import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonPage,
  IonCheckbox,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";
import AddTask from "../../components/AddTask";

const All = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if ("tasks" in localStorage) {
      setTasks(JSON.parse(localStorage.getItem("tasks")));
    }
  }, []);

  const addNewTask = (newTask) => {
    setTasks((prevState) => {
      localStorage.setItem("tasks", JSON.stringify([...prevState, newTask]));
      return [...prevState, newTask];
    });
  };

  const toggleIsCompleted = (i) => {
    setTasks((prevState) => {
      const newState = [...prevState];
      newState[i].isCompleted = !newState[i].isCompleted;
      localStorage.setItem("tasks", JSON.stringify(newState));
      return newState;
    });
  };

  return (
    <IonPage>
      <IonContent>
        <AddTask addNewTask={addNewTask} />
        <IonList>
          {/* {JSON.parse(localStorage.getItem("tasks")).map(
            ({ title, isCompleted }, i) => { */}
          {tasks.map(({ title, isCompleted }, i) => {
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
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default All;
