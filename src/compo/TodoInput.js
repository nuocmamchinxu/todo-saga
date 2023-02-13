import React from "react";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/action";
import { Button, Input } from "antd";
const TodoInput = () => {
  const [name, setName] = useState("");
  let dispatch = useDispatch();
  const handleAddTodo = () => {
    dispatch(addTodo({ id: Math.random(), name }));
    setName("");
  };

  return (
    <>
      <div className="row m-2">
        <Input
          type="text"
          onChange={(event) => setName(event.target.value)}
          value={name}
          className="col-8"
        />
        <Button
          type="primary"
          onClick={handleAddTodo}
          size="medium"
          className="Add"
        >
          Add
        </Button>
      </div>
    </>
  );
};
export default TodoInput;
