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

    setTimeout(() => { el.showModal({ config }); });
    const response = await oneEvent(el, 'modeChanged');
    expect(response.detail.mode).to.equal('modal');
  });

  it('emits a modeChanged event when closing', async () => {
    const el = await fixture(html`
      <modal-manager></modal-manager>
    `);

    const config = new ModalConfig();
    el.showModal({ config });
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
    el.showModal({ config });
    await el.elementUpdated;
    expect(el.mode).to.equal('modal');
  });

  it('calls the modalClosedCallback when the modal closes', async () => {
    const el = await fixture(html`
      <modal-manager></modal-manager>
    `);

    const config = new ModalConfig();
    let callbackCalled = false;
    const callback = () => {
      callbackCalled = true;
    }
    el.showModal({
      config,
      modalClosedCallback: callback
    });
    await el.elementUpdated;
    el.closeModal();
    await el.elementUpdated;
    expect(callbackCalled).to.equal(true);
  });

  it('calls the modalClosedCallback if a new modal pops up before uses closes old one', async () => {
    const el = await fixture(html`
      <modal-manager></modal-manager>
    `);

    const config1 = new ModalConfig();
    const config2 = new ModalConfig();
    let callback1Called = false;
    let callback2Called = false;
    const callback1 = () => {
      callback1Called = true;
    }
    const callback2 = () => {
      callback2Called = true;
    }
    el.showModal({
      config: config1,
      modalClosedCallback: callback1
    });
    await el.elementUpdated;
    el.showModal({
      config: config2,
      modalClosedCallback: callback2
    });
    await el.elementUpdated;
    expect(callback1Called).to.equal(true);
    el.closeModal();
    await el.elementUpdated;
    expect(callback2Called).to.equal(true);
  });

  it('mode is set to closed when close button is pressed', async () => {
    const el = await fixture(html`
      <modal-manager></modal-manager>
    `);

    const config = new ModalConfig();
    el.showModal({ config });
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
