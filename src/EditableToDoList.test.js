import React from "react";
import { fireEvent, render } from "@testing-library/react";
import EditableTodoList from "./EditableTodoList";

const initialTestTodos = [
  {
    id: 1,
    title: "Code!",
    description: "Write some code",
    priority: 2,
  },
  {
    id: 2,
    title: "Make dinner",
    description: "Cook something healthy",
    priority: 1,
  },
  {
    id: 3,
    title: "Go to bed",
    description: "In bed by 11:15",
    priority: 3,
  },
];

it("renders without crashing", function () {
  render(<EditableTodoList todos={initialTestTodos}/>);
});

it("snapshot", function () {
  const { container } = render(<EditableTodoList todos={initialTestTodos} />);
  expect(container).toMatchSnapshot();
});


it("snapshot", function () {
  const result = render(<EditableTodoList todos={initialTestTodos} />);
  expect(result.queryByText("Code!")).toBeInTheDocument()
  expect(result.queryByText("Make dinner")).toBeInTheDocument()
  expect(result.queryByText("Go to bed")).toBeInTheDocument()
});
