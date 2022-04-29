import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

const initialTestTodo = {
  id: 1,
  title: "Code!",
  description: "Write some code",
  priority: 2,
};

it("renders without crashing", function () {
  render(<Todo todo={initialTestTodo} />);
});

it("snapshot", function () {
  const { container } = render(<Todo todo={initialTestTodo} />);
  expect(container).toMatchSnapshot();
});

it("renders todo", function () {
  const result = render(<Todo todo={initialTestTodo} />);
  expect(result.queryByText("Code!")).toBeInTheDocument();
});

// it("renders todo", function () {
//   const result = render(<Todo todo={initialTestTodo} />);
//   expect(result.queryAllByText("Write some code")).toBeInTheDocument();
// });

it("does not render button", function () {
  const result = render(<Todo todo={initialTestTodo} />);
  expect(result.queryByText("Edit")).not.toBeInTheDocument();
});
