import {
  html, fixture, expect
} from '@open-wc/testing';

import '../lib/modal-manager';

describe('Modal Manager', () => {
  it('defaults to closed', async () => {
    const el = await fixture(html`
      <modal-manager></modal-manager>
    `);

    expect(el.mode).to.equal('closed');
  });
});
