import "./App.css";
import { PopUser } from "./components/Popups/PopUser/PopUser";
import { Header } from "./components/Header/Header";
import { PopNewCard } from "./components/Popups/PopNewCard/PopNewCard";
import { PopBrowse } from "./components/Popups/PopBrowse/PopBrowse";
import { Main } from "./components/Main/Main";
import { useEffect, useState } from "react";
import { Tasks } from "../data/tasks";
import { Loader } from "./components/Loader/Loader";

function App() {
  const [tasks, setTasks] = useState(Tasks);

  function onAddTask() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDate = day + "." + month + "." + year;

    const newTask = {
      id: date.getTime(),
      topic: "Web Design",
      title: "Test",
      date: formattedDate,
      status: "Без статуса",
      color: "card__theme _orange",
      colorText: "_orange",
    };
    setTasks([...tasks, newTask]);
  }
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <div className="wrapper">
        <PopUser />
        <PopNewCard />

        <PopBrowse />

        <Header onAddTask={onAddTask} />
        {isLoading ? <Loader /> : <Main tasks={tasks} />}
      </div>
    </>
  );
}

export default App;
