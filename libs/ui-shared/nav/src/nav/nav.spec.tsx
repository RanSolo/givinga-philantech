import { render } from '@testing-library/react';

import UiSharedNav from './nav';

describe('UiSharedNav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiSharedNav />);
    expect(baseElement).toBeTruthy();
  });
});
