import "./styles.css";
import React, { useState } from "react";
import Languages from "./components/languages";
import Translate from "./components/translate";
import Field from "./components/field";

export default function App() {
  const [language, setLanguage] = useState("es");
  const [text, setText] = useState("");

  return (
    <div>
      <Field label="Enter English Words" onChange={setText} value={text} />
      <Languages langauge={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language} />
    </div>
  );
}
