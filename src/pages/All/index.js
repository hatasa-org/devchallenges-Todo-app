import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonPage,
  IonCheckbox,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonButton,
} from "@ionic/react";
import { trashOutline } from "ionicons/icons";

const All = () => {
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

  const deleteTask = (i) => {
    const tmp = JSON.parse(JSON.stringify(tasks));
    tmp.splice(i, 1);
    setTasks(tmp);
  };

  const deleteAllTask = () => {
    const tmp = JSON.parse(JSON.stringify(tasks));
    const afterDelete = tmp.filter((task) => !task.isCompleted);
    setTasks(afterDelete);
  };

  return (
    <IonPage>
      <IonContent>
        <IonList>
          {tasks.map(({ title, isCompleted }, i) => {
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
                <IonButton
                  fill="clear"
                  onClick={() => {
                    deleteTask(i);
                  }}
                  color="medium"
                >
                  <IonIcon
                    slot="end"
                    icon={trashOutline}
                    style={{ margin: "auto 0" }}
                  />
                </IonButton>
              </IonItem>
            );
          })}
        </IonList>
        <IonButton
          type="button"
          className="ion-float-end"
          color="danger"
          onClick={() => deleteAllTask()}
        >
          <IonIcon
            icon={trashOutline}
            size="small"
            style={{ marginRight: "8px" }}
          />
          delete all
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default All;
