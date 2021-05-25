import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import GaugeBar from "./GaugeBar";
import { getPercentage } from "../../../settings/utils";

describe("<GaugeBar />", () => {
  let component: any;

  const vote = {
    positive: 30,
    negative: 100,
  };
  const percentageExpect = getPercentage(vote);

  beforeEach(() => {
    component = render(<GaugeBar votes={vote} />);
  });

  test("renders content", () => {
    expect(component.container).toHaveTextContent(
      `${percentageExpect.positive}%`
    );
    expect(component.container).toHaveTextContent(
      `${percentageExpect.negative}%`
    );
  });

  test("width of the positive percentage div should be according to the percentage sent", () => {

    //get percentage string accordint to getPercentage function
    const positivePercentage: string = `${percentageExpect.positive}%`;

    //get elements by percentage text
    const positiveEl = component.getByText(positivePercentage);

    //test parent node of element to validate width according to percentage
    expect(positiveEl.parentNode).toHaveStyle(`width: ${positivePercentage}`);
  });

  test("width of the negative percentage div should be according to the percentage sent", () => {

    const negativePercentage: string = `${percentageExpect.negative}%`;
    const negativeEl = component.getByText(negativePercentage);

    expect(negativeEl.parentNode).toHaveStyle(`width: ${negativePercentage}`);
  });
});
