import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Sapientia Score Report', () => {
  it('renders the report hero with the student name and score', () => {
    render(<App />);

    expect(screen.getByText('Eliana Mercer')).toBeInTheDocument();
    expect(screen.getAllByText('742').length).toBeGreaterThan(0);
  });

  it('changes recommendation copy when the audience mode changes', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('radio', { name: /Parent View/i }));

    expect(screen.getByText('Invite reasoning out loud')).toBeInTheDocument();
    expect(
      screen.getByText(/Which section felt most manageable this time/i)
    ).toBeInTheDocument();
  });

  it('opens the print preview after clicking the print preview button', () => {
    render(<App />);

    fireEvent.click(screen.getAllByRole('button', { name: /Print \/ PDF Preview/i })[0]);

    expect(screen.getByRole('dialog', { name: /Print \/ PDF Preview/i })).toBeInTheDocument();
    expect(screen.getByText('Print Report')).toBeInTheDocument();
  });
});
