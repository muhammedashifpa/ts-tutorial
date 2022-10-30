import Student, { StudentInterface } from "./Student";

interface StudentsInterface {
  data: StudentInterface[];
}

const Students = ({ data }: StudentsInterface) => {
  return (
    <ul>
      {data.map((item) => {
        return (
          <Student
            name={item.name}
            age={item.age}
            isPassed={item.isPassed}
            phone={item.phone}
            marks={item.marks}
          />
        );
      })}
    </ul>
  );
};

export default Students;
