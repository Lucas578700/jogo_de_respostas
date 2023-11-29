import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Task from "../components/Task";

describe("Task component", () => {
  const mockTask = {
    title: "Test Task",
    deadline: "01/01/2023, 12:00:00",
    finished: false,
  };

  it("renders correctly", () => {
    const { getByTestId } = render(<Task task={mockTask} />);

    expect(getByTestId("task-title")).toBeTruthy();
    expect(getByTestId("task-deadline")).toBeTruthy();
    expect(getByTestId("edit-button")).toBeTruthy();
    expect(getByTestId("delete-button")).toBeTruthy();
    expect(getByTestId("complete-button")).toBeTruthy();
  });

  it("calls onDelete function when delete button is pressed", () => {
    const onDeleteMock = jest.fn();
    const { getByTestId } = render(
      <Task task={mockTask} onDelete={onDeleteMock} />
    );

    fireEvent.press(getByTestId("delete-button"));

    expect(onDeleteMock).toHaveBeenCalledTimes(1);
  });

  it("calls onEdit function when edit button is pressed", () => {
    const onEditMock = jest.fn();
    const { getByTestId } = render(
      <Task task={mockTask} onEdit={onEditMock} />
    );

    fireEvent.press(getByTestId("edit-button"));

    expect(onEditMock).toHaveBeenCalledTimes(1);
  });

  it("calls markComplete function when complete button is pressed", () => {
    const markCompleteMock = jest.fn();
    const { getByTestId } = render(<Task task={mockTask} markComplete={markCompleteMock} />);
    
    fireEvent.press(getByTestId("complete-button"));
    
    expect(markCompleteMock).toHaveBeenCalledTimes(1);
  });

  

});
