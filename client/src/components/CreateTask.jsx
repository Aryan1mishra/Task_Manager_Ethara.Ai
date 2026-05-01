import axios from "axios";
import Button from "./Button";

const CreateTask = () => {
  const createTask = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8800/api/task",
        {
          title: "Test Task",
          description: "Test",
          team: [], 
          stage: "todo",
          priority: "medium",
        },
        { withCredentials: true }
      );

      console.log(res.data);
      alert("Task Created");
    } catch (err) {
      console.log(err);
      alert("Error");
    }
  };

  return (
    <Button
      label="Create Test Task"
      className="bg-green-600 text-white"
      onClick={createTask}
    />
  );
};

export default CreateTask;