import './App.css';
import TaskCard from './TaskCard';

function App() {

  const tasks = [
    {
      title: "Build the website with static content",
      dueDate: "10th April",
      assigneeName: "Rohit S",
    },
    {
      title: "Add a blog",
      dueDate: "22nd March",
      assigneeName: "Rohit M",
    },
    {
      title: "Design the mockup",
      dueDate: "10th April",
      completedAtDate: "10th April",
      assigneeName: "Rohit M",
    },
    {
      title: "Get the approval from principal",
      dueDate: "20th March",
      completedAtDate: "20th April",
      assigneeName: "Ajay S",
    }
  ];

  const pendingTasks = tasks.filter(task => !task.completedAtDate);
  const completedAtDateTasks = tasks.filter(task => task.completedAtDate);

  return (
    <div className="my-10 w-[800px] m-auto">
      <h1 className="text-3xl font-black">
        Smarter Tasks
      </h1>
      <span>
        <b>
          Project:
        </b>
        {" "}
        Graduation Final Year Project (Revamp College Website)
      </span>
      <div className="flex justify-center gap-5 mt-10">
        {[["Pending", pendingTasks], ["Completed", completedAtDateTasks]].map(([title, tasks]) => (
          <div className="flex-1 rounded-2xl border border-gray-200 bg-gray-100 p-4">
            <h2 className="text-2xl font-bold text-center mb-4">
              {title}
            </h2>
            <div className="flex items-stretch flex-col gap-3">
              {tasks.map(task => <TaskCard title={task.title} dueDate={task.dueDate} completedAtDate={task.completedAtDate} assigneeName={task.assigneeName} />)}
            </div>
            {title === "Pending" && (
              <button className="w-full bg-blue-100 border border-blue-500 text-blue-500 mt-4 rounded-lg p-2">
                + Add Task
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
