import { render, fireEvent, screen } from "@testing-library/react";

import Test from "./Test";

describe("Test", () => {
  const renderTest = () => render(<Test />);

  describe('"increase" 버튼을 클릭한다', () => {
    it("값이 1 증가된 값이 나타나야만 한다", () => {
      const { container } = renderTest();

      expect(container).toHaveTextContent("0");

      fireEvent.click(screen.getByText("increase"));

      expect(container).toHaveTextContent("1");
    });
  });

  describe('"decrease" 버튼을 클릭한다', () => {
    it("값이 1 감소된 값이 나타나야만 한다", () => {
      const { container } = renderTest();

      expect(container).toHaveTextContent("0");

      fireEvent.click(screen.getByText("decrease"));

      expect(container).toHaveTextContent("-1");
    });
  });
});
