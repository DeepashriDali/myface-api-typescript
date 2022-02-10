import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { User } from "./User";

test("renders message", () => {
  // Arrange
  const user = {
    name : "Sam",  
    username: "deeps",
    profileImageUrl: "Image url",
    email: "deepa@gmail.com",

  };

  // Act
  render(<BrowserRouter><User user={user} /></BrowserRouter>);
  const userElement = screen.getByText(/deeps/i);

  // Assert
  expect(userElement).toBeInTheDocument();
});

test("matches snapshot", () => {
  // Arrange
  const user = {
    name : "Sam",  
    username: "deeps",
    profileImageUrl: "Image url",
    email: "deepa@gmail.com",

  };


  // Act
  const tree = renderer
    .create(<BrowserRouter><User user={user} /></BrowserRouter>)
    .toJSON();

  // Assert
  expect(tree).toMatchSnapshot();
});