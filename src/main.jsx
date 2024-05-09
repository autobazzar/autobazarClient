import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { initRoot } from "./utils/themeProvider.js";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import Store, { persistor } from "./store/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { router } from "./utils/routeProvider.js";
import { RouterProvider } from "react-router-dom";
const rootElement = document.getElementById("root");

initRoot(rootElement);
const root = ReactDOM.createRoot(rootElement);
root.render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_ID}>
    <Provider store={Store}>
      <PersistGate persistor={persistor} loading={null}>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </PersistGate>
    </Provider>
  </GoogleOAuthProvider>
);
