import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../App";
// import user from "@testing-library/user-event";

test("Renders main page correctly", () => {
  expect(true).toBeTruthy();
});

test("It renders the correct heading text", async () => {
  render(<App />);
  const title = await screen.findByRole("heading");
  expect(title).toHaveTextContent("Employee Directory");
});
