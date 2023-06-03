// -- TEST FILE EXAMPLE FOR ILLUSTRATION

import { render, screen } from '@testing-library/react';
import IntroTemplate from './Intro.jsx';

import mockCharacters from 'src/__mocks__/mocks.jsx';

describe('IntroTemplate', () => {
  it('renders the component correctly', () => {
    render(<IntroTemplate characters={mockCharacters} title="Intro Template" loading={false} onClick={() => {}} />);

    expect(screen.getByText('Intro Template')).toBeInTheDocument();

    // Assert the presence of CharacterCard components for each character
    expect(screen.getByText('Rick')).toBeInTheDocument();
    expect(screen.getByText('Morty')).toBeInTheDocument();
  });
});
