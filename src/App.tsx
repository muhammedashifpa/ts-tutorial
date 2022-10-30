import React from "react";
import "./App.css";
import { StudentInterface } from "./components/Student";
import Students from "./components/Students";

function App() {
  return (
    <div className="App">
      <Students data={DATA} />
    </div>
  );
}

export default App;

const DATA: StudentInterface[] = [
  {
    name: "Ashif",
    age: 21,
    isPassed: false,
    marks: [12.2, 42654, 5653, 53],
    phone: 2534234523,
  },
  { name: "Mejo", age: 21, isPassed: true, marks: [143.2, 4624, 5563, 53] },
  { name: "Shiju", age: 21, isPassed: true, marks: [12.2, 424, 53, 5653] },
];
