import { useState } from "react";
import InputComponent from "./components/InputComponent";

function App() {
  const [taskList, setTaskList] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Mango" },
  ]);

  const [text, setText] = useState("");
  const [editTaskId, setEditTaskId] = useState(-1);

  const deleteTask = (i) => {
    let index = taskList.findIndex((obj) => obj.id === i);
    if (index > -1) {
      taskList.splice(index, 1);
      setTaskList([...taskList]);
      setText("");
      setEditTaskId(-1);
    }
  };

  const editTask = (id) => {
    // if (editTaskId) {
    //   setText("");
    //   setEditTaskId(-1);
    //   return;
    // }

    let index = taskList.findIndex((obj) => obj.id === id);
    if (index > -1) {
      setText(taskList[index].name);
      setEditTaskId(id);
    }
  };

  return (
    <div id="app" className="min-w-[400px] w-1/2 mx-auto mt-16">
      <div className="max-w-4xl bg-violet-500 p-4 rounded-lg shadow-lg ">
        <div className=" font-medium text-3xl text-center">
          <p className="py-2 text-yellow-200">Todo List</p>
        </div>
        <InputComponent
          editTaskId={editTaskId}
          setEditTaskId={setEditTaskId}
          text={text}
          setText={setText}
          taskList={taskList}
          setTaskList={setTaskList}
        />
        {taskList.map((task, index) => (
          <div
            key={index}
            className="p-1 m-1 border border-violet-500 bg-violet-200 hover:bg-violet-100 rounded-md"
          >
            <div key={task.id} className="p-1">
              <div className="flex justify-between items-center">
                <div> {task.name}</div>
                <div className="flex ">
                  <div
                    onClick={() => editTask(task.id)}
                    className="bg-green-100 hover:bg-green-200 px-2 py-1 mx-1 rounded-md cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </div>
                  <div
                    onClick={() => deleteTask(task.id)}
                    className="bg-red-100 hover:bg-red-200 px-2 py-1 mx-1 rounded-md cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-red-500 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
