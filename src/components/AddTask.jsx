import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }

    onAdd({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form
      className="flex items-center flex-col md:mx-8 bg-gray-200 p-5"
      onSubmit={onSubmit}
    >
      <div className="flex flex-col my-3 w-full md:w-2/3">
        <label htmlFor="" className="text-xl">
          Task
        </label>
        <input
          className="border-2 border-black-500 p-3 mt-3"
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="flex flex-col my-3 w-full md:w-2/3">
        <label htmlFor="" className="text-xl">
          Day & Time
        </label>
        <input
          className="border-2 border-black-500 p-3 mt-3 cursor-pointer"
          type="date"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="flex flex-col my-3 w-full md:w-2/3 ">
        <label htmlFor="" className="text-xl">
          Set Reminder
        </label>
        <input
          type="checkbox"
          checked={reminder}
          className="mt-5 w-7 h-7 cursor-pointer checked:bg-gray-600 checked:border-transparent"
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input
        className="max-w-xl self-center px-10 py-4 mt-5 bg-gray-800 text-white font-semibold transition duration-400 ease-in-out cursor-pointer hover:bg-gray-100 hover:text-gray-800 border-2 hover:border-gray-800  rounded-sm "
        type="submit"
        value="Save Task"
      />
    </form>
  );
};

export default AddTask;
