import {it, describe, expect} from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders Hello World with tailwind styles applied', () => {
    render(<App />);
    const heading = screen.getByText(/Hello, World!/i);
    
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('text-blue-600'); 
  });
});