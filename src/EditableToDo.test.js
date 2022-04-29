import React from "react";
import { fireEvent, render } from "@testing-library/react";
import EditableTodo from "./EditableTodo";

const testTodo = [
  {
    id: 1,
    title: "Code!",
    description: "Write some code",
    priority: 2,
  }
];


function update() {
  return "test";
}
function remove() {
  return "test";
}

it("renders without crashing", function () {
  render(
    <EditableTodo
      todo={testTodo}
      update={update}
      remove={remove}
    />);
});

it("snapshot", function () {
  const { container } = render(
    <EditableTodo
      todo={testTodo}
      update={update}
      remove={remove}
    />);
  expect(container).toMatchSnapshot();
});

it("tests that edit hides btns when clicked", function () {
  const { container } = render(
    <EditableTodo
      todo={testTodo}
      update={update}
      remove={remove}
    />);
  fireEvent.click(container.querySelector(".EditableTodo-toggle"))
  expect(container.querySelector(".EditableTodo-toggle")).not.toBeInTheDocument();
  expect(container.querySelector(".EditableTodo-delBtn")).not.toBeInTheDocument();
});


it("renders todo with edit & remove buttons", function () {
  const result = render(
    <EditableTodo
      todo={testTodo}
      update={update}
      remove={remove}
    />);
  expect(result.queryByText("Edit")).toBeInTheDocument();
  expect(result.queryByText("Del")).toBeInTheDocument();
});

it("does not render non-top todo", function () {
  const result = render(
    <EditableTodo
      todo={testTodo}
      update={update}
      remove={remove}
    />);
  expect(result.queryByText("Go to ved")).not.toBeInTheDocument();
});

