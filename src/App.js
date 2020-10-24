import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import All from "./pages/All";
import Active from "./pages/Active";
import Completed from "./pages/Completed";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/all" component={All} exact={true} />
          <Route path="/active" component={Active} exact={true} />
          <Route path="/completed" component={Completed} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/all" />} />
        </IonRouterOutlet>
        <IonTabBar slot="top">
          <IonTabButton tab="all" href="/all">
            <IonLabel>All</IonLabel>
          </IonTabButton>
          <IonTabButton tab="active" href="/active">
            <IonLabel>Active</IonLabel>
          </IonTabButton>
          <IonTabButton tab="completed" href="/completed">
            <IonLabel>Completed</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
