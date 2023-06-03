import { render, screen } from '@testing-library/react';
import IntroTemplate from './Intro';

import mockCharacters from '../../../mocks/mocks';

describe('IntroTemplate', () => {
  it('renders the component correctly', () => {
    render(<IntroTemplate characters={mockCharacters} title="Intro Template" loading={false} onClick={() => {}} />);

    expect(screen.getByText('Name: Cop Rick')).toBeInTheDocument();
    expect(screen.getByText('Name: Cyclops Morty')).toBeInTheDocument();
  });
});
