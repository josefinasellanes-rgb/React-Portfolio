import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

describe('Home Component', () => {
  it('should render welcome message', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText('Welcome Home')).toBeInTheDocument();
    expect(screen.getByText('Welcome to the Home Page!')).toBeInTheDocument();
  });

  it('should render default text when no user is provided', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText(/I build elegant and accessible web experiences/i)).toBeInTheDocument();
    expect(screen.getByText(/My mission: deliver clean, maintainable front-end code/i)).toBeInTheDocument();
  });

  it('should display personalized message when user is provided', () => {
    const mockUser = {
      username: 'testuser',
      role: 'user',
    };

    render(
      <MemoryRouter>
        <Home user={mockUser} />
      </MemoryRouter>
    );

    expect(screen.getByText(/I hope you enjoy the page, testuser!/i)).toBeInTheDocument();
  });

  it('should not display personalized message when user is null', () => {
    render(
      <MemoryRouter>
        <Home user={null} />
      </MemoryRouter>
    );

    expect(screen.queryByText(/I hope you enjoy the page/i)).not.toBeInTheDocument();
  });

  it('should render with empty projects array', () => {
    render(
      <MemoryRouter>
        <Home projects={[]} />
      </MemoryRouter>
    );

    expect(screen.getByText('Welcome to the Home Page!')).toBeInTheDocument();
  });

  it('should render with empty education array', () => {
    render(
      <MemoryRouter>
        <Home education={[]} />
      </MemoryRouter>
    );

    expect(screen.getByText('Welcome to the Home Page!')).toBeInTheDocument();
  });

  it('should render with projects and education props', () => {
    const mockProjects = [
      { id: 1, name: 'Project 1' },
      { id: 2, name: 'Project 2' },
    ];
    const mockEducation = [{ id: 1, title: 'Education 1' }];

    render(
      <MemoryRouter>
        <Home
          projects={mockProjects}
          education={mockEducation}
        />
      </MemoryRouter>
    );

    expect(screen.getByText('Welcome to the Home Page!')).toBeInTheDocument();
  });

  it('should render all text elements correctly', () => {
    const mockUser = {
      username: 'john',
      role: 'user',
    };

    render(
      <MemoryRouter>
        <Home user={mockUser} />
      </MemoryRouter>
    );

    // Check all expected text elements are present
    expect(screen.getByText('Welcome Home')).toBeInTheDocument();
    expect(screen.getByText('Welcome to the Home Page!')).toBeInTheDocument();
    expect(screen.getByText(/I hope you enjoy the page, john!/i)).toBeInTheDocument();
    expect(screen.getByText(/I build elegant and accessible web experiences/i)).toBeInTheDocument();
    expect(screen.getByText(/My mission: deliver clean, maintainable front-end code/i)).toBeInTheDocument();
  });

});
