import { render } from '@givinga-philantech/test-utils';

import Landing from './landing';

describe('Landing', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Landing />);
    expect(baseElement).toBeTruthy();
  });
});
