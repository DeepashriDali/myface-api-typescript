import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { User } from "./User";
import { Link } from "react-router-dom";

test("renders username", () => {
  const user = {
    username: "deeps",
  };

  render(<BrowserRouter><User user={user} /></BrowserRouter>);
  const userElement = screen.getByText(/deeps/i);
  expect(userElement).toBeInTheDocument();
});
test("renders name", () => {
  const user = {
    name : "Sam",  
  };

  render(<BrowserRouter><User user={user} /></BrowserRouter>);
  const nameElement = screen.getByText(/sam/i);
  expect(nameElement).toBeInTheDocument();
});
test("renders profile image", () => {
  const user = {
    profileImageUrl: "Image url",
  };

  render(<BrowserRouter><User user={user} /></BrowserRouter>);
  const imageElement = screen.getByRole('img', { name: user.name});
  expect(imageElement).toBeInTheDocument();
});




test("matches snapshot", () => {
   const user = {
    name : "Sam",  
    username: "deeps",
    profileImageUrl: "Image url",
    email: "deepa@gmail.com",

  };

  const tree = renderer
    .create(<BrowserRouter><User user={user} /></BrowserRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
