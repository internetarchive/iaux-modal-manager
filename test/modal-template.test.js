import {
  html, fixture, expect, oneEvent
} from '@open-wc/testing';

import '../lib/modal-template';
import { ModalConfig } from '../lib/modal-config';

describe('Modal Template', () => {
  it('has correct default configuration', async() => {
    const el = await fixture(html`
      <modal-template></modal-template>
    `);

    const processingLogo = el.shadowRoot.querySelector('.processing-logo');
    const headline = el.shadowRoot.querySelector('.headline');
    const message = el.shadowRoot.querySelector('.message');

    expect(headline).to.not.exist; // equal(undefined);
    expect(message).to.not.exist; // equal(undefined);
    expect('hidden' in processingLogo.classList);
  });

  it('emits closeButtonPressed event when close button is pressed', async () => {
    const el = await fixture(html`
      <modal-template></modal-template>
    `);

    const closeButton = el.shadowRoot.querySelector('.close-button');
    const clickEvent = new MouseEvent('click');

    setTimeout(() => { closeButton.dispatchEvent(clickEvent); });
    const response = await oneEvent(el, 'closeButtonPressed');
    expect(response).to.exist;
  });

  it('shows the processing indicator if configured to', async () => {
    const config = new ModalConfig();
    config.showProcessingIndicator = true;

    const el = await fixture(html`
      <modal-template .config=${config}></modal-template>
    `);

    const processingLogo = el.shadowRoot.querySelector('.processing-logo');
    expect('hidden' in processingLogo.classList).to.equal(false);
  });

  it('shows a headline and message if they exist in the config', async () => {
    const config = new ModalConfig();
    config.headline = 'Foo';
    config.message = 'Bar';

    const el = await fixture(html`
      <modal-template .config=${config}></modal-template>
    `);

    const headline = el.shadowRoot.querySelector('.headline');
    const message = el.shadowRoot.querySelector('.message');

    expect(headline).to.exist;
    expect(headline.innerText).to.equal('Foo');

    expect(message).to.exist;
    expect(message.innerText).to.equal('Bar');
  });
});
