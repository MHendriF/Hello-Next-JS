import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import AboutPage from "@/app/about/page";
import AboutLayout from "@/app/about/layout";

describe("About Page", () => {
  it("renders correctly", () => {
    const page = render(
      <AboutLayout>
        <AboutPage />
      </AboutLayout>
    );
    expect(page).toMatchSnapshot();
  });
});
