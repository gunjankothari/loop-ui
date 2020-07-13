import { newSpecPage } from '@stencil/core/testing';
import { ProgressbarUi } from './progressbar-ui';

describe('progressbar-ui', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ProgressbarUi],
      html: `<progressbar-ui></progressbar-ui>`,
    });
    expect(page.root).toEqualHtml(`
      <progressbar-ui>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </progressbar-ui>
    `);
  });
});
