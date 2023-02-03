import { useState } from "react";

const InputComponent = ({
  editTaskId,
  setEditTaskId,
  taskList,
  setTaskList,
  text,
  setText,
}) => {
  const handleTextchange = (event) => {
    setText(event.target.value);
  };

  const changeTaskWithEnterKey = (event) => {
    if (event.key === "Enter" && !!event.target.value) {
      setTaskList((taskList) => [
        ...taskList,
        {
          id: taskList.slice(-1)[0] ? taskList.slice(-1)[0].id + 1 : 1,
          name: event.target.value,
        },
      ]);
      setText("");
    }
  };

  const changeTask = () => {
    if (!!text && editTaskId < 1) {
      setTaskList((taskList) => [
        ...taskList,
        {
          id: taskList.slice(-1)[0] ? taskList.slice(-1)[0].id + 1 : 1,
          name: text,
        },
      ]);
      setText("");
      return;
    }

    let index = taskList.findIndex((obj) => obj.id === editTaskId);
    if (index > -1) {
      taskList[index].name = text;
      setTaskList([...taskList]);
      setEditTaskId(-1);
      setText("");
    }
  };

  return (
    <div className="py-3 flex w-full">
      <div className="grow">
        <input
          type="text"
          id="text"
          value={text}
          onChange={handleTextchange}
          onKeyDown={changeTaskWithEnterKey}
          className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:outline-none  focus:ring-1 focus:ring-blue-500 focus:border-blue-500 p-2.5"
          placeholder="Task giriniz..."
        />
      </div>
      <div>
        <button
          onClick={changeTask}
          className={`${
            setEditTaskId ? "w-24" : "w-14"
          } flex-none px-2.5 py-2 ml-2 hover:bg-red-300 bg-red-400 rounded-md text-gray-100`}
        >
          {editTaskId > -1 ? "Güncelle" : "Ekle"}
        </button>
      </div>
    </div>
  );
};

export default InputComponent;
