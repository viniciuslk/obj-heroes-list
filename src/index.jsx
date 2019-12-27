import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { setConfiguration } from "react-grid-system";

import App from "./App";

import { ObjGlobalStyle } from "styles";
import { ObjThemeProvider } from "theme/ThemeProvider";

setConfiguration({ gutterWidth: 10 });

const ObjApp = () => (
  <>
    <ObjThemeProvider>
      <ObjGlobalStyle />
      <App />
    </ObjThemeProvider>
  </>
);

ReactDOM.render(<ObjApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
