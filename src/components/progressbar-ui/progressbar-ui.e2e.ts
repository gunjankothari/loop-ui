import { newE2EPage } from '@stencil/core/testing';

describe('progressbar-ui', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<progressbar-ui></progressbar-ui>');

    const element = await page.find('progressbar-ui');
    expect(element).toHaveClass('hydrated');
  });
});
