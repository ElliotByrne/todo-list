import React from "react";
import classNames from "classnames";
import "../App.css";

export const FormAddNew = ({ children, handleClose, postData }: any) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();

    postData(
      e.target.todo.value,
      e.target.completed.checked,
      e.target.userId.value
    );

    e.target.reset();
  };

  const classes = classNames({
    form: true,
  });

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="todo">What do you need to do?</label>
      <input type="text" name="todo" />
      <label htmlFor="completed">Completed</label>
      <input type="checkbox" name="completed" value="true" />
      <label htmlFor="userId">User ID</label>
      <input type="number" name="userId" value="5" />
      <div className="col col--gap col--row">
        <div className="col col--fill">
          <button className="c-link" type="submit">
            Add another
          </button>
        </div>
        <button className="c-link" type="submit" onClick={() => handleClose()}>
          Add and close
        </button>
      </div>
    </form>
  );
};
