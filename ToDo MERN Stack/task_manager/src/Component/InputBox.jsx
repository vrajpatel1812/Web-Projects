import { useContext, useRef } from "react";
import { TaskListProvider } from "../Store/TaskProvider";
import axios from "axios";

const url = "http://localhost:5000/api/data";

const InputBox = () => {
  let task = useRef(null);
  const { createTask } = useContext(TaskListProvider);

  const handleSubmit = async () => {
    const taskName = task.current.value;
    if (taskName.length === 0) {
      return;
    }

    const data = {
      task: taskName,
      isCheck: false,
    };

    const response = await axios.post(url, data);
    createTask(response.data);
    task.current.value = "";
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Add Task..."
        ref={task}
      />
      <button type="button" className="btn btn-success" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default InputBox;
