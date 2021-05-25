import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import ButtonText from "./ButtonText";

describe("<ButtonText />", () => {
  let component: any;
  const textButton = "Vote Now";
  const mockHandler = jest.fn();
  beforeEach(() => {
    component = render(<ButtonText text={textButton} onPress={mockHandler} />);
  });

  test("renders content", () => {
    expect(component.container).toHaveTextContent(textButton);
  });

  test("When the button is clicked it should run function only once", () => {
    const button = component.getByText(textButton);
    fireEvent.click(button);

    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
