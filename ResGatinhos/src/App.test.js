import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main app content', () => {
  render(<App />);
  // Replace 'Main App Content' with actual text from your App component
  const mainContent = screen.getByText(/Main App Content/i);
  expect(mainContent).toBeInTheDocument();
});
