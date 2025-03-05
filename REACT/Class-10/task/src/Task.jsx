import React, { useState } from "react";
import Student from "./Student";

const studentsData = [
  {
    id: 1,
    name: "Sachin Tendulkar",
    img: "https://www.jagranimages.com/images/newimg/23042023/23_04_2023-sachin_world_cup_trophy_23393532.jpg",
    email: "sachin@gmail.com",
    about: "God of cricket",
    btn1: "Accept",
    btn2: "Reject",
  },
  {
    id: 2,
    name: "Virat Kohli",
    img: "https://www.aljazeera.com/wp-content/uploads/2023/03/33B24KW-highres.jpg?resize=1800%2C1800",
    email: "virat@gmail.com",
    about: "King...! Goat of Current cricket era.",
    btn1: "Accept",
    btn2: "Reject",
  },
  {
    id: 3,
    name: "Rohit Sharma",
    img: "https://www.greaterkashmir.com/wp-content/uploads/2024/06/Rohit-Sharma.jpg",
    email: "rohit@gmail.com",
    about: "Hitman...! Captain of the Indian cricket team.",
    btn1: "Accept",
    btn2: "Reject",
  },
  {
    id: 4,
    name: "Hardik Pandya",
    img: "https://static.cricbuzz.com/a/img/v1/i1/c592193/hardik-pandya-to-play-in-vijay-hazare-trophy-from-saturday.jpg?d=low&p=det",
    email: "hardik@gmail.com",
    about: "Clutch God..! Hated by everyone, Defeated by none.",
    btn1: "Accept",
    btn2: "Reject",
  },
];

const Task = () => {
  const [selectedStudentId, setSelectedStudentId] = useState(1);

  return (
    <div className="d-flex flex-column min-vh-100 container-fluid pb-5 pt-5 fs-1">
      <h1 className="text-center text-primary mb-4">Student Info</h1>

      <div className="d-flex justify-content-center gap-5 my-5">
        {studentsData.map((student) => (
          <button
            key={student.id}
            className={`shadow-lg btn btn-outline-warning fw-bold ${
              selectedStudentId === student.id ? "active" : ""
            }`}
            style={{ width: "200px" }}
            onClick={() => setSelectedStudentId(student.id)}
          >
            {`Student - ${student.id}`}
          </button>
        ))}
      </div>

      <div className="d-flex flex-wrap justify-content-center bg-light-subtle">
        {studentsData
          .filter((s) => s.id === selectedStudentId)
          .map((s) => (
            <Student
              key={s.id}
              name={s.name}
              photo={s.img}
              email={s.email}
              about={s.about}
              btn1={s.btn1}
              btn2={s.btn2}
            />
          ))}
      </div>
    </div>
  );
};

export default Task;
