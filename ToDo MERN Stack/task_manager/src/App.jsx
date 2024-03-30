import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InputBox from "./Component/InputBox.jsx";
import TaskList from "./Component/TaskList.jsx";
import TaskProvider from "./Store/TaskProvider.jsx";

function App() {
  return (
    <TaskProvider>
      <div className="mainContainer">
        <InputBox />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
