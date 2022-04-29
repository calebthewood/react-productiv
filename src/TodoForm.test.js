import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoForm from "./TodoForm";

it("renders without crashing", function () {
  render(<TodoForm />);
});

it("snapshot", function () {
  const { container } = render(<TodoForm />);
  expect(container).toMatchSnapshot();
});

it("updates input", function () {
  const { container } = render(<TodoForm />);
  fireEvent.change(container.querySelector("#newTodo-title"), {
    target: { value: "new input" },
  });
  const title = container.querySelector("#newTodo-title");
  expect(title.value).toBe("new input");
});
