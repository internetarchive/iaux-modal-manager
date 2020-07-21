import { expect } from '@open-wc/testing';

import { ModalConfig } from '../src/modal-config';
import { html } from 'lit-html';

describe('Modal Config', () => {
  it('can be instantiated properly', async () => {
    const config = new ModalConfig();
    const title = html`Foo`;
    config.title = title;
    config.headerColor = 'green';

    expect(config.title).to.equal(title);
    expect(config.headerColor).to.equal('green');
  });
});
