import { expect } from '@open-wc/testing';

import { ModalConfig } from '../src/modal-config';

describe('Modal Config', () => {
  it('has a static error config', async () => {
    const config = ModalConfig.errorConfig;
    expect(config.headerColor).to.equal('#691916');
  });
});
