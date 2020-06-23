import {
  html, fixture, expect, oneEvent
} from '@open-wc/testing';

import '../lib/modal-manager';
import { ModalConfig } from '../lib/modal-config';

describe('Modal Manager', () => {
  it('defaults to closed', async () => {
    const el = await fixture(html`
      <modal-manager></modal-manager>
    `);

    expect(el.mode).to.equal('closed');
  });

  it('can be closed by calling closeModal', async () => {
    const el = await fixture(html`
      <modal-manager mode='modal'></modal-manager>
    `);

    el.closeModal();
    await el.elementUpdated;

    expect(el.mode).to.equal('closed');
  });

  it('can be closed by clicking on the backdrop', async () => {
    const el = await fixture(html`
      <modal-manager mode='modal'></modal-manager>
    `);

    const backdrop = el.shadowRoot.querySelector('.backdrop');
    const clickEvent = new MouseEvent('click');

    backdrop.dispatchEvent(clickEvent);
    await el.elementUpdated;

    expect(el.mode).to.equal('closed');
  });

  it('emits a modeChanged event when opening', async () => {
    const el = await fixture(html`
      <modal-manager></modal-manager>
    `);

    const config = new ModalConfig();

    setTimeout(() => { el.showModal(config); });
    const response = await oneEvent(el, 'modeChanged');
    expect(response.detail.mode).to.equal('modal');
  });

  it('emits a modeChanged event when closing', async () => {
    const el = await fixture(html`
      <modal-manager></modal-manager>
    `);

    const config = new ModalConfig();
    el.showModal(config);
    await el.elementUpdated;

    setTimeout(() => { el.closeModal() });
    const response = await oneEvent(el, 'modeChanged');
    expect(response.detail.mode).to.equal('closed');
  });

  it('can show a modal', async () => {
    const el = await fixture(html`
      <modal-manager></modal-manager>
    `);

    const config = new ModalConfig();
    el.showModal(config);
    await el.elementUpdated;
    expect(el.mode).to.equal('modal');
  });

  it('mode is set to closed when close button is pressed', async () => {
    const el = await fixture(html`
      <modal-manager></modal-manager>
    `);

    const config = new ModalConfig();
    el.showModal(config);
    await el.elementUpdated;

    expect(el.mode).to.equal('modal');

    const modal = el.shadowRoot.querySelector('modal-template');
    const closeButton = modal.shadowRoot.querySelector('.close-button');
    const clickEvent = new MouseEvent('click');
    closeButton.dispatchEvent(clickEvent);

    await el.elementUpdated;

    expect(el.mode).to.equal('closed');
  });
});
