import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ObjHeader from "Components/Atoms/Header";
import ObjSplashScreen from "Components/Atoms/SplashScreen";
import ObjAppProvider from "./Context";

const ObjPageHome = React.lazy(() => import("Components/Pages/Home"));
const ObjPageDetails = React.lazy(() => import("Components/Pages/Details"));

function App() {
  return (
    <Suspense fallback={<ObjSplashScreen />}>
      <ObjAppProvider>
        <ObjHeader />
        <Router>
          <Switch>
            <Route path="/detalhes/:id?" component={ObjPageDetails} />
            <Route path="*" component={ObjPageHome} />
          </Switch>
        </Router>
      </ObjAppProvider>
    </Suspense>
  );
}

export default App;
