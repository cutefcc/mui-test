import React from "react";
import { render } from "enzyme";
import { Button } from "../src/index";

describe("test", () => {
  it("test render", () => {
    let Wrapper = render(<Button>case one</Button>);
    expect(true).toBeTruthy();
  });
});
