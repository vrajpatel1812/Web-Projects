import { useContext } from "react";
import { FaTrash } from "react-icons/fa6";
import PropTypes from "prop-types";
import { TaskListProvider } from "../Store/TaskProvider";
import axios from "axios";

const Task = ({ taskItems }) => {
  const url = "http://localhost:5000/api/data";
  const { deleteTask, updateCheckTask } = useContext(TaskListProvider);

  const handleChecked = async () => {
    const updateData = {
      task: taskItems.task,
      isCheck: !taskItems.isCheck,
    };

    const response = await axios.put(`${url}/${taskItems._id}`, updateData);
    
    updateCheckTask(response.data.data);
  };

  const handleDelete = async () => {
    const response = await axios.delete(`${url}/${taskItems._id}`);
    deleteTask(response.data._id);
  };

  return (
    <li className="list-group-item task--container" style={{ display: "flex" }}>
      <div className="taskContainer--leftBox" onClick={handleChecked}>
        <input
          className="form-check-input checkBox--Container"
          type="checkbox"
          id="flexCheckDefault"
          checked={taskItems.isCheck}
          onChange={handleChecked}
        />
        <span className="task--content">{taskItems.task}</span>
      </div>
      <div className="taskContainer--rightBox">
        <FaTrash onClick={handleDelete} className="trash--container" />
      </div>
    </li>
  );
};

Task.propTypes = {
  taskItems: PropTypes.object,
};

export default Task;
