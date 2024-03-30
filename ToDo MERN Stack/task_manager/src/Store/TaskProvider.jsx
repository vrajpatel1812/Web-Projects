import { createContext, useEffect, useReducer, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const url = "http://localhost:5000/api/data";

export const TaskListProvider = createContext({
  taskList: [],
  createTask: () => {},
  deleteTask: () => {},
  updateCheckTask: () => {},
  fetchData: false,
});

const taskListReducer = (currenList, action) => {
  let updateList = currenList;

  if (action.type === "CREATE_INTIAL_TASKS") {
    updateList = [...action.prototype.data];
  } else if (action.type === "CREATE_TASK") {
    updateList = [action.prototype.res, ...currenList];
  } else if (action.type === "DELETE_TASK") {
    updateList = currenList.filter((task) => task._id !== action.prototype.id);
  } else if (action.type === "UPDATECHECK_TASK") {
    updateList = currenList.filter(
      (task) => task._id !== action.prototype.res._id
    );
    updateList = [...updateList, action.prototype.res];
  }

  return updateList;
};

const TaskProvider = ({ children }) => {
  const [taskList, dispatchtaskList] = useReducer(taskListReducer, []);
  const [fetchData, setfetchData] = useState(true);

  const createTask = (res) => {
    dispatchtaskList({
      type: "CREATE_TASK",
      prototype: { res },
    });
  };

  const deleteTask = (id) => {
    dispatchtaskList({
      type: "DELETE_TASK",
      prototype: { id },
    });
  };

  const updateCheckTask = (res) => {
    dispatchtaskList({
      type: "UPDATECHECK_TASK",
      prototype: { res },
    });
  };

  const createInitialList = (data) => {
    dispatchtaskList({
      type: "CREATE_INTIAL_TASKS",
      prototype: { data },
    });
  };

  useEffect(() => {
    const getTask = async () => {
      try {
        const response = await axios.get(url);
        createInitialList(response.data);
        setfetchData(false);
      } catch (error) {
        console.log(error);
      }
    };

    getTask();
  }, []);

  return (
    <TaskListProvider.Provider
      value={{ taskList, createTask, fetchData, deleteTask, updateCheckTask }}
    >
      {children}
    </TaskListProvider.Provider>
  );
};

TaskProvider.propTypes = {
  children: PropTypes.object,
};

export default TaskProvider;
