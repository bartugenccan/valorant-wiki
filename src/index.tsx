import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";

// redux
import { Provider } from "react-redux";
import { store } from "./store/store";

// components
import Header from "./components/Header";
import Weapons from "./pages/Weapons";

// router
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weapons" element={<Weapons />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
