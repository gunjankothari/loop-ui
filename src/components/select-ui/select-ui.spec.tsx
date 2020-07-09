import { newSpecPage } from '@stencil/core/testing';
import { SelectUi } from './select-ui';

describe('select-ui', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SelectUi],
      html: `<select-ui></select-ui>`,
    });
    expect(page.root).toEqualHtml(`
      <select-ui>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </select-ui>
    `);
  });
});
