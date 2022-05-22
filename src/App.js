import React from "react";

import Contacts from "./components/Contacts";
import Intro from "./components/Intro";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app__wrapper">
      <Contacts />
      <Intro />
      <Footer />
    </div>
  );
}
