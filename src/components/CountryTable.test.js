import React from 'react';
import { render, screen } from '@testing-library/react';
import { CountryTable } from './CountryTable';

describe('<CountryTable />', () => {
  const mockData = [
    {
      cca2: 'US',
      name: { common: 'USA', official: 'United States of America' },
      flags: { png: 'path-to-us-flag.png', alt: 'US Flag' },
      population: 331002651,
      capital: 'Washington, D.C.',
      region: 'Americas'
    },
  ];

  it('renders without crashing', () => {
    render(<CountryTable data={mockData} />);
  });

  it('renders the correct number of rows based on the input data', () => {
    render(<CountryTable data={mockData} />);
    const rows = screen.getAllByRole('row');
    // +1 for the header row
    expect(rows.length).toBe(mockData.length + 1);
  });

  it('renders the correct content for a given input', () => {
    render(<CountryTable data={mockData} />);
    
    // Check the presence of country details in the rendered component
    expect(screen.getByText('USA')).toBeInTheDocument();
    expect(screen.getByText('United States of America')).toBeInTheDocument();
    expect(screen.getByAltText('US Flag')).toBeInTheDocument();
    expect(screen.getByText('331002651')).toBeInTheDocument();
    expect(screen.getByText('Washington, D.C.')).toBeInTheDocument();
    expect(screen.getByText('Americas')).toBeInTheDocument();
  });
});