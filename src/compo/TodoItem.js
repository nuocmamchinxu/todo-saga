import React from "react";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/action";
import { useState } from "react";
const TodoItem = ({ todo }) => {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(todo.name);
  const dispatch = useDispatch();
  console.log("todo", todo);
  return (
    <div className="all">
      <div className="input">
        <div>#{Math.trunc(todo.id * 10)}</div>
        <div className="col-8">
          {edit ? (
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="from-control"
              value={name}
            />
          ) : (
            <h4>{todo.name}</h4>
          )}
        </div>
      </div>
      <Button
        onClick={() => {
          if (edit) {
            setName(todo.name);
            dispatch(
              updateTodo({
                ...todo,
                name: name,
              })
            );
          }
          setEdit(!edit);
        }}
        type="primary"
        className="mr-2"
      >
        Edit
      </Button>
      <Button
        type="primary"
        onClick={() => dispatch(deleteTodo({ id: todo.id }))}
        danger
      >
        Delete
      </Button>
    </div>
  );
};
export default TodoItem;
