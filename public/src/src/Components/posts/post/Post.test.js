import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Post } from "./Post";

test("renders message", () => {
  const post = {
  message: "Post message",
  };
  render(<Post post={post} />);
  const messageElement = screen.getByText(/post message/i);
  expect(messageElement).toBeInTheDocument();
});
test("renders image", () => {
  const post = {
    imageUrl: "Image url",
  };
  render(<Post post={post} />);
  const imgElement = screen.getByRole("img",{name:post.message});
  expect(imgElement).toBeInTheDocument();
});


test("matches snapshot", () => {
  // Arrange
  const post = {
    message: "Post message",
    imageUrl: "Image url",
    createdAt: "2022/04/05 11:00",
    postedBy: {
    name: "User name",
    },
  };

  // Act
  const tree = renderer
    .create(<Post post={post} />)
    .toJSON();

  // Assert
  expect(tree).toMatchSnapshot();
});