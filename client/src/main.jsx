import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
// import store from "../store.js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store.js";

const stripePromise = loadStripe(
  "pk_test_51PHncJSCtd9qJAmSlabouwOe3oJJM5dLBdUMFyhPq82wnhUOYToZtqR9xRQaalM00twwpRnpz2GhQseSgnFCwmZE00kjrI18zY"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Elements stripe={stripePromise}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Elements>
    </Provider>
  </React.StrictMode>
);
