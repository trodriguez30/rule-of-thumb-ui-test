import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import Vote from "./Vote";
import { voteStyle } from "../../../settings/utils";

describe("<Vote onPress/>", () => {
    let component: any;
    let button: Node;
    const vote = {
      type: "positive",
      isVoted: true,
    };
  
    const mockHandler = jest.fn();
    beforeEach(() => {
      component = render(
        <Vote type={vote.type} isVoted={vote.isVoted} onPress={mockHandler} />
      );
      button = component.queryByRole("button");
    });
  
    test("clicking the button calls handler", () => {
      fireEvent.click(button);
      expect(mockHandler).toHaveBeenCalledTimes(1);
    });
  
  });

describe("<Vote type='positive'/>", () => {
  let component: any;
  let button: Node;
  const vote = {
    type: "positive",
    isVoted: true,
  };

  beforeEach(() => {
    component = render(
      <Vote type={vote.type} isVoted={vote.isVoted} onPress={() => {}} />
    );
    button = component.queryByRole("button");
  });

  test("Border color should be white", () => {
    expect(button).toHaveStyle(`borderColor: white`);
  });

  test("Background color should be green positive", () => {
    expect(button).toHaveStyle(
      `backgroundColor: ${voteStyle(vote.type).color}`
    );
  });
});

describe("<Vote type='negative'/>", () => {
    let component: any;
    let button: Node;
    const vote = {
      type: "negative",
      isVoted: false,
    };

    beforeEach(() => {
      component = render(
        <Vote type={vote.type} isVoted={vote.isVoted} onPress={() => {}} />
      );
      button = component.queryByRole("button");
    });
  
    test("Border color should be yellow negative when is not selected", () => {
      expect(button).toHaveStyle(`borderColor: ${voteStyle(vote.type).color}`);
    });
  
    test("Background color should be yellow negative", () => {
      expect(button).toHaveStyle(
        `backgroundColor: ${voteStyle(vote.type).color}`
      );
    });
  });
  