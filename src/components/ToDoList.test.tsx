import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { ToDoList } from "./ToDoList";

const stubTodos = [
  { id: 0, todo: "First item" },
  { id: 0, todo: "Second item" },
  { id: 0, todo: "Third item" },
  { id: 0, todo: "Fourth item" },
];

test("Should render without any todos, displaying error message instead", () => {
  render(<ToDoList />);
  const text = screen.getByText("No items on your todo list. Try adding one!");
  expect(text).toBeInTheDocument();
});

test("Should render todos", () => {
  render(<ToDoList />);
  const { text1, text2, text3, text4 } = {
    text1: screen.getByText("First item"),
    text2: screen.getByText("Second item"),
    text3: screen.getByText("Third item"),
    text4: screen.getByText("Fourth item"),
  };

  expect(text1).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
  expect(text3).toBeInTheDocument();
  expect(text4).toBeInTheDocument();
});

test("should remove an item from the list when the delete button is pressed", () => {
  render(<ToDoList />);
  const { text1 } = {
    text1: screen.getByText("First item"),
  };

  const deleteBtn = screen.getByLabelText("Delete todo - id 1");
  fireEvent.click(deleteBtn);

  expect(text1).not.toBeInTheDocument();
});

test("should check a todo as complete", () => {
  render(<ToDoList />);
  const { text1 } = {
    text1: screen.getByText("First item"),
  };

  const checkmark = screen.getByRole("checkbox");

  fireEvent.click(text1);

  expect(checkmark).toHaveAttribute("checked");
});
