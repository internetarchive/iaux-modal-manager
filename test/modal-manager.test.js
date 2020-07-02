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

  it('calls the userClosedModalCallback when the user taps the backdrop', async () => {
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
      userClosedModalCallback: callback
    });
    await el.elementUpdated;

    const backdrop = el.shadowRoot.querySelector('.backdrop');
    const clickEvent = new MouseEvent('click');
    backdrop.dispatchEvent(clickEvent);

    await el.elementUpdated;

    expect(callbackCalled).to.equal(true);
  });

  it('does not call the userClosedModalCallback when the modal just closes', async () => {
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
      userClosedModalCallback: callback
    });
    await el.elementUpdated;
    el.closeModal();
    await el.elementUpdated;
    expect(callbackCalled).to.equal(false);
  });

  it('calls the userClosedModalCallback when the user taps the backdrop', async () => {
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
      userClosedModalCallback: callback
    });
    await el.elementUpdated;

    const modal = el.shadowRoot.querySelector('modal-template');
    const closeButton = modal.shadowRoot.querySelector('.close-button');
    const clickEvent = new MouseEvent('click');
    closeButton.dispatchEvent(clickEvent);

    await el.elementUpdated;

    expect(callbackCalled).to.equal(true);
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

  it('allows the user to close by clicking on the backdrop if configured to', async () => {
    const el = await fixture(html`
      <modal-manager></modal-manager>
    `);

    const config = new ModalConfig();
    config.allowUserToClose = true;
    el.showModal({ config });
    await el.elementUpdated;

    const backdrop = el.shadowRoot.querySelector('.backdrop');
    const clickEvent = new MouseEvent('click');
    backdrop.dispatchEvent(clickEvent);

    await el.elementUpdated;

    expect(el.mode).to.equal('closed');
  });

  it('dont\'t allow the user to close by clicking on the backdrop if configured to', async () => {
    const el = await fixture(html`
      <modal-manager></modal-manager>
    `);

    const config = new ModalConfig();
    config.allowUserToClose = false;
    el.showModal({ config });
    await el.elementUpdated;

    const backdrop = el.shadowRoot.querySelector('.backdrop');
    const clickEvent = new MouseEvent('click');
    backdrop.dispatchEvent(clickEvent);

    await el.elementUpdated;

    expect(el.mode).to.equal('modal');
  });
});
