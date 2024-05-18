import React from 'react';
import { render } from '@testing-library/react';

// Import the component to test
import ImageDetails from '../pages/ImageDetails';

// Mock axios and useParams...
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: { collection: { items: [mockImageData] } } })),
}));

// Mock useParams
jest.mock('react-router-dom', () => ({
  useParams: () => ({ id: 'some-id' }),
}));

// Mock image data
const mockImageData = {
  data: [{ nasa_id: '123', title: 'Test Title', description: 'Test Description', keywords: ['test', 'keyword'] }],
  links: [{ href: 'https://example.com/image.jpg' }],
};

describe('ImageDetails component', () => {
  test('renders with loading text', () => {
    const { getByText } = render(<ImageDetails />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });
  


});
