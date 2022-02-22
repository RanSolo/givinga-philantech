import { render } from '@testing-library/react';

import Campaigns from './campaigns';

describe('Campaigns', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Campaigns />);
    expect(baseElement).toBeTruthy();
  });
});
