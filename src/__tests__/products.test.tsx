import { render, screen } from '@testing-library/react';
import Page from '../app/Products/page';
import TestCartProvider from './TestCartProvider';
import { api } from '../lib/api/api';

jest.mock('../lib/api/api', () => ({
  api: { getProducts: jest.fn() },
}));

jest.mock('next/link', () => ({ children }: { children: React.ReactNode }) => children);
jest.mock('../app/component/formDeleteProduct/page', () => () => <div>Delete Product</div>);
jest.mock('../app/component/banner/BannerCosplayNight', () => () => <div>Banner</div>);

describe('Products Page', () => {
  beforeEach(() => jest.clearAllMocks());

  test('fetches and displays products', async () => {
    (api.getProducts as jest.Mock).mockResolvedValue([
      { id: 1, title: 'Product A', price: 100, image: '/test.png' },
    ]);

    render(
      <TestCartProvider>
        <Page />
      </TestCartProvider>
    );

    expect(await screen.findByText('Product A')).toBeInTheDocument();
    expect(await screen.findByText('$100')).toBeInTheDocument();
    expect(await screen.findByText(/add to cart/i)).toBeInTheDocument();
  });
});