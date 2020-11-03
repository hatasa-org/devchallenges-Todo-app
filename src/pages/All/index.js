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
  const [tasks, setTasks] = useState([]);
  // const [newTask, setNewTask] = useState({ title: "", isCompleted: false });

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
    // const tmp = JSON.parse(JSON.stringify(tasks));
    // tmp[i].isCompleted = !tmp[i].isCompleted;
    // setTasks(tmp);
    setTasks((prevState) => {
      prevState[i].isCompleted = !prevState[i].isCompleted;
      localStorage.setItem("tasks", JSON.stringify([...prevState]));
      return [...prevState];
    });
  };

  return (
    <IonPage>
      <IonContent>
        <AddTask addNewTask={addNewTask} />
        {/* <IonGrid>
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
                  setTasks((prevState) => {
                    localStorage.setItem(
                      "tasks",
                      JSON.stringify([...prevState, newTask])
                    );
                    return [...prevState, newTask];
                  });
                }}
              >
                add
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid> */}
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
