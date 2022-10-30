import React, { useState } from "react";

export interface StudentInterface {
  name: string | number;
  age: number;
  isPassed: boolean;
  phone?: number;
  marks: number[];
  alert?: () => any;
}

const Student = ({ name, age, isPassed, phone, marks }: StudentInterface) => {
  const [newName, setNewName] = useState<string>("My name");

  const changeHanlder = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    console.log(e.target.name);
    setNewName(e.target.value);
  };
  const submitHandler = () => {};
  return (
    <div>
      <h4>Student name: {name}</h4>
      <h4>Age : {age}</h4>
      <h4>passed : {isPassed ? "Passed" : "Faild"}</h4>
      {phone && <h4>Phone number : {phone}</h4>}
      {marks.map((item) => (
        <div>{item}</div>
      ))}
      <form>
        <input onChange={changeHanlder} value={newName} name={"input"} />
        <button onClick={submitHandler}></button>
      </form>
    </div>
  );
};

export default Student;
