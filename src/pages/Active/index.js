import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonPage,
  IonCheckbox,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonGrid,
  IonCol,
  IonInput,
  IonRow,
} from "@ionic/react";
import { trashOutline } from "ionicons/icons";
const Completed = () => {
  const [tasks, setTasks] = useState([
    { title: "title1", isCompleted: true },
    { title: "title2", isCompleted: false },
    { title: "title3", isCompleted: true },
    { title: "title4", isCompleted: false },
    { title: "title5", isCompleted: true },
    { title: "title6", isCompleted: false },
  ]);
  // const [tasks, setTasks] = useState([])
  // useEffect(()=> {
  //   if("tasks" in localStorage){
  //     setTasks(JSON.parse(localStorage.getItem("tasks")))
  //   }
  // },[])

  const toggleIsCompleted = (i) => {
    const tmp = JSON.parse(JSON.stringify(tasks));
    tmp[i].isCompleted = !tmp[i].isCompleted;
    setTasks(tmp);
    // setTasks((prevState) => {
    //   prevState[i].isCompleted = !prevState[i].isCompleted;
    //   return [...prevState];
    // });
  };

  const newTask = { title: "", isCompleted: false };

  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonInput
                onIonChange={(e) => {
                  newTask.title = e.detail.value;
                }}
                placeholder="add task"
              />
            </IonCol>
            <IonCol>
              <IonButton
                onClick={() => {
                  if (newTask.title !== "") {
                    tasks.push(newTask);
                    setTasks(JSON.parse(JSON.stringify(tasks)));
                  }
                }}
              >
                add
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonList>
          {tasks.map(({ title, isCompleted }, i) => {
            if (!isCompleted) {
              return (
                <IonItem key={i} lines="full">
                  <IonLabel>{title}</IonLabel>
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
            } else {
              return null;
            }
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Completed;
