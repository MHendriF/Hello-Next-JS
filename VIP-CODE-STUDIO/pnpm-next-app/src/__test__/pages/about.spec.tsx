import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import AboutPage from "@/pages/about";

describe("About Page", () => {
  it("render about page", () => {
    const page = render(<AboutPage />);
    expect(page).toMatchSnapshot();
  });
});
