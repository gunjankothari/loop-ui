import { newSpecPage } from '@stencil/core/testing';
import { OptionUi } from './option-ui';

describe('option-ui', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OptionUi],
      html: `<option-ui></option-ui>`,
    });
    expect(page.root).toEqualHtml(`
      <option-ui>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </option-ui>
    `);
  });
});
