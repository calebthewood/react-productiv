import React from "react";
import { render } from "@testing-library/react";
import TopTodo from "./TopTodo";

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
  render(<TopTodo todos={initialTestTodos} />);
});

it("snapshot", function () {
  const { container } = render(<TopTodo todos={initialTestTodos} />);
  expect(container).toMatchSnapshot();
});

it("renders top todo", function () {
  const result = render(<TopTodo todos={initialTestTodos} />);
  expect(result.queryByText("Make dinner")).toBeInTheDocument();
});

it("does not render non-top todo", function () {
  const result = render(<TopTodo todos={initialTestTodos} />);
  expect(result.queryByText("Go to ved")).not.toBeInTheDocument();
});
