import React from 'react';
import { render, cleanup } from 'react-testing-library';
import ImgSuspense from '../src/index.js';
afterEach(cleanup);

test('Fallback should be render', () => {
  const { container } = render(<ImgSuspense src="" fallback={<div />} />);
  expect(container.tagName.toLowerCase()).toEqual('div');
});
