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

    expect(headline).to.not.exist;
    expect(message).to.not.exist;
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

  it('shows the close button if configured to', async () => {
    const config = new ModalConfig();
    config.allowUserToClose = true;
    const el = await fixture(html`
      <modal-template .config=${config}></modal-template>
    `);

    const closeButton = el.shadowRoot.querySelector('.close-button');
    expect(closeButton).to.exist;
  });

  it('hides the close button if configured to', async () => {
    const config = new ModalConfig();
    config.allowUserToClose = false;
    const el = await fixture(html`
      <modal-template .config=${config}></modal-template>
    `);

    const closeButton = el.shadowRoot.querySelector('.close-button');
    expect(closeButton).to.not.exist;
  });

  it('shows the properties from the config', async () => {
    const config = new ModalConfig();
    config.title = 'Boop';
    config.subtitle = 'Bop';
    config.headline = 'Foo';
    config.message = 'Bar';

    const el = await fixture(html`
      <modal-template .config=${config}></modal-template>
    `);

    const title = el.shadowRoot.querySelector('h1');
    const subtitle = el.shadowRoot.querySelector('h2');

    const headline = el.shadowRoot.querySelector('.headline');
    const message = el.shadowRoot.querySelector('.message');

    expect(title).to.exist;
    expect(title.innerText).to.equal('Boop');

    expect(subtitle).to.exist;
    expect(subtitle.innerText).to.equal('Bop');

    expect(headline).to.exist;
    expect(headline.innerText).to.equal('Foo');

    expect(message).to.exist;
    expect(message.innerText).to.equal('Bar');
  });
});
