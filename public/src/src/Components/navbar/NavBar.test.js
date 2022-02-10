import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './Navbar';
import renderer from 'react-test-renderer';

test("Renders logo", () => {
    render(<BrowserRouter> <Navbar /> </BrowserRouter>);
    const logo = screen.getByText(/myface/i);
    expect(logo).toBeInTheDocument();
});

test("should match snapshot", async () => {
    const tree = renderer.create(<BrowserRouter> <Navbar /> </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
});