import React, { useRef, useState } from "react";

const Todo = () => {
  const [inputVal, setInputval] = useState("");
  const [result, setResult] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const inputRef = useRef(null);
  const handleResult = () => {
    if (inputVal.trim() !== "") {
      if (editIndex !== null) {
        const updateResult = result.map((item, index) =>
          index === editIndex ? inputVal : item
        );
        setResult(updateResult);
        setEditIndex(null);
      } else {
        setResult((prev) => [...prev, inputVal]);
      }
      setInputval("");
      inputRef.current.focus();
    }
  };
  const handleRemove = (id) => {
    setResult(result.filter((_, index) => index !== id));
    inputRef.current.focus();
  };

  const handleEdit = (id) => {
    setInputval(result[id]);
    setEditIndex(id);
    inputRef.current.focus();
  };
  console.log(result);
  return (
    <div className=" flex flex-col gap-5">
      <h1 className=" font-bold text-[30px] text-center"> Todo</h1>
      <div className="flex justify-center gap-3">
        <input
          ref={inputRef}
          type="text"
          className="border"
          value={inputVal}
          onChange={(e) => setInputval(e.target.value)}
        />
        <button className="rounded border-2 p-1" onClick={handleResult}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>
      <div className="flex justify-center">
        <ul className="flex flex-col gap-2">
          {result &&
            result.map((item, index) => {
              return (
                <div key={index} className="flex gap-2">
                  <li>{item}</li>
                  <button
                    onClick={() => handleRemove(index)}
                    className="border px-1 rounded"
                  >
                    x
                  </button>
                  <button
                    onClick={() => handleEdit(index)}
                    className="border px-1 rounded"
                  >
                    Edit
                  </button>
                </div>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
