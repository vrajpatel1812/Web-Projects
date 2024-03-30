import Task from "./Task";
import { TaskListProvider } from "../Store/TaskProvider";
import { useContext } from "react";
import Loading from "./Loading.jsx";
import NoTask from "./NoTask.jsx";

const TaskList = () => {
  const { taskList, fetchData } = useContext(TaskListProvider);
  return (
    <ul className="list-group">
      {fetchData && <Loading></Loading>}
      {!fetchData && taskList.length === 0 ? (
        <NoTask></NoTask>
      ) : (
        taskList.map((task) => <Task key={task._id} taskItems={task} />)
      )}
    </ul>
  );
};

export default TaskList;
