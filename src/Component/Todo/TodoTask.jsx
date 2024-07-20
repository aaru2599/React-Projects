import React, { useCallback, useEffect, useState } from "react";

const TodoTasks = () => {
  const initialState = {
    title: "",
    description: "",
  };
  const [filter, setFilter] = useState("all");
  const [formData, setFOrmData] = useState(initialState);
  const [todos, setTodos] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFOrmData({ ...formData, [name]: value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.description) {
      setTodos([...todos, { ...formData, complete: false }]);
    }
    setFOrmData(initialState);
  };
  const handleTodoComplete = (id) => {
    const newTodos = [...todos];
    newTodos[id].complete = !newTodos[id].complete;
    setTodos(newTodos);
  };
  useEffect(() => {
    console.log(todos);
  }, [todos]);
  const filteredTodos = todos.filter((item) => {
    if (filter === "complete") return item.complete;
    if (filter === "incomplete") return !item.complete;
    return item;
  });
  return (
    <div>
      <div>TodoTask</div>
      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("incomplete")}>Incomplete</button>
        <button onClick={() => setFilter("complete")}>Complete</button>
      </div>
      <form onSubmit={handleFormSubmit}>
        Title:{" "}
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        Description:{" "}
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        {filteredTodos.map((todo, index) => {
          return (
            <div key={index}>
              <div>
                <div>Title:{todo.title}</div>
                <div>Description:{todo.description}</div>
              </div>
              <button onClick={() => handleTodoComplete(index)}>
                {todo.complete ? "Undo" : "Complete"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const TodoTask = React.memo(TodoTasks);

export default TodoTask;
