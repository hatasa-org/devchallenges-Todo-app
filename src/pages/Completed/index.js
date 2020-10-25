import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCheckbox,
  IonList,
  IonItem,
  IonLabel,
  IonItemDivider,
  IonIcon,
  IonButton,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
} from "@ionic/react";
import { trashOutline } from "ionicons/icons";
const Completed = () => {
  const [tasks, setTasks] = useState([
    { title: "title1", isCompleted: true },
    { title: "title2", isCompleted: false },
    { title: "title3", isCompleted: true },
    { title: "title4", isCompleted: true },
    { title: "title5", isCompleted: true },
    { title: "title6", isCompleted: true },
  ]);
  // const [tasks, setTasks] = useState([])
  // useEffect(()=> {
  //   if("tasks" in localStorage){
  //     setTasks(JSON.parse(localStorage.getItem("tasks")))
  //   }
  // },[])

  const toggleIsCompleted = (i) => {
    console.log(i);
    const tmp = JSON.parse(JSON.stringify(tasks));
    tmp[i].isCompleted = !tmp[i].isCompleted;
    setTasks(tmp);
    // setTasks((prevState) => {
    //   prevState[i].isCompleted = !prevState[i].isCompleted;
    //   return [...prevState];
    // });
  };

  const deleteTask = (i) => {
    alert("a");
    const tmp = JSON.parse(JSON.stringify(tasks));
    tmp.splice(i, 1);
    setTasks(tmp);
  };

  return (
    <IonPage>
      <IonContent>
        <IonList>
          {tasks.map(({ title, isCompleted }, i) => {
            if (isCompleted) {
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
            } else {
              return null;
            }
          })}
        </IonList>
        {/* {tasks
          .filter((task) => task.isCompleted)
          .map(({ title, isCompleted }, i) => (
            <IonItem key={i}>
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
          ))} */}
      </IonContent>
    </IonPage>
  );
};

export default Completed;
