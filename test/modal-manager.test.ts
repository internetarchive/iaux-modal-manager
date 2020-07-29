import {
  html,
  fixture,
  expect,
  oneEvent,
  elementUpdated,
} from '@open-wc/testing';

import '../src/modal-manager';
import { ModalConfig } from '../src/modal-config';
import { ModalManager, ModalManagerInterface } from '../src/modal-manager';

describe('Modal Manager', () => {
  it('defaults to closed', async () => {
    const el = (await fixture(html`
      <modal-manager></modal-manager>
    `)) as ModalManager;

    expect(el.mode).to.equal('closed');
  });

  it('can be closed by calling closeModal', async () => {
    const el = (await fixture(html`
      <modal-manager mode="modal"></modal-manager>
    `)) as ModalManager;

    el.closeModal();
    await elementUpdated(el);

    expect(el.mode).to.equal('closed');
  });

  it('can be closed by clicking on the backdrop', async () => {
    const el = (await fixture(html`
      <modal-manager mode="modal"></modal-manager>
    `)) as ModalManager;

    const backdrop = el.shadowRoot?.querySelector('.backdrop');
    const clickEvent = new MouseEvent('click');

    backdrop?.dispatchEvent(clickEvent);
    await elementUpdated(el);

    expect(el.mode).to.equal('closed');
  });

  it('emits a modeChanged event when opening', async () => {
    const el = (await fixture(html`
      <modal-manager></modal-manager>
    `)) as ModalManager;

    const config = new ModalConfig();

    setTimeout(() => {
      el.showModal({ config });
    });
    const response = await oneEvent(el, 'modeChanged');
    expect(response.detail.mode).to.equal('open');
  });

  it('emits a modeChanged event when closing', async () => {
    const el = (await fixture(html`
      <modal-manager></modal-manager>
    `)) as ModalManager;

    const config = new ModalConfig();
    el.showModal({ config });
    await elementUpdated(el);

    setTimeout(() => {
      el.closeModal();
    });
    const response = await oneEvent(el, 'modeChanged');
    expect(response.detail.mode).to.equal('closed');
  });

  it('can show a modal', async () => {
    const el = (await fixture(html`
      <modal-manager></modal-manager>
    `)) as ModalManager;

    const config = new ModalConfig();
    el.showModal({ config });
    await elementUpdated(el);
    expect(el.mode).to.equal('open');
  });

  it('calls the userClosedModalCallback when the user taps the backdrop', async () => {
    const el = (await fixture(html`
      <modal-manager></modal-manager>
    `)) as ModalManager;

    const config = new ModalConfig();
    let callbackCalled = false;
    const callback = () => {
      callbackCalled = true;
    };
    el.showModal({
      config,
      userClosedModalCallback: callback,
    });
    await elementUpdated(el);

    const backdrop = el.shadowRoot?.querySelector('.backdrop');
    const clickEvent = new MouseEvent('click');
    backdrop?.dispatchEvent(clickEvent);

    await elementUpdated(el);

    expect(callbackCalled).to.equal(true);
  });

  it('does not call the userClosedModalCallback when the modal just closes', async () => {
    const el = (await fixture(html`
      <modal-manager></modal-manager>
    `)) as ModalManager;

    const config = new ModalConfig();
    let callbackCalled = false;
    const callback = (): void => {
      callbackCalled = true;
    };
    el.showModal({
      config,
      userClosedModalCallback: callback,
    });
    await elementUpdated(el);
    el.closeModal();
    await elementUpdated(el);
    expect(callbackCalled).to.equal(false);
  });

  it('calls the userClosedModalCallback when the user taps the backdrop', async () => {
    const el = (await fixture(html`
      <modal-manager></modal-manager>
    `)) as ModalManager;

    const config = new ModalConfig();
    let callbackCalled = false;
    const callback = (): void => {
      callbackCalled = true;
    };
    el.showModal({
      config,
      userClosedModalCallback: callback,
    });
    await elementUpdated(el);

    const modal = el.shadowRoot?.querySelector('modal-template');
    const closeButton = modal?.shadowRoot?.querySelector('.close-button');
    const clickEvent = new MouseEvent('click');
    closeButton?.dispatchEvent(clickEvent);

    await elementUpdated(el);

    expect(callbackCalled).to.equal(true);
  });

  it('mode is set to closed when close button is pressed', async () => {
    const el = (await fixture(html`
      <modal-manager></modal-manager>
    `)) as ModalManager;

    const config = new ModalConfig();
    el.showModal({ config });
    await elementUpdated(el);

    expect(el.mode).to.equal('open');

    const modal = el.shadowRoot?.querySelector('modal-template');
    const closeButton = modal?.shadowRoot?.querySelector('.close-button');
    const clickEvent = new MouseEvent('click');
    closeButton?.dispatchEvent(clickEvent);

    await elementUpdated(el);

    expect(el.mode).to.equal('closed');
  });

  it('allows the user to close by clicking on the backdrop if configured to', async () => {
    const el = (await fixture(html`
      <modal-manager></modal-manager>
    `)) as ModalManager;

    const config = new ModalConfig();
    config.closeOnBackdropClick = true;
    el.showModal({ config });
    await elementUpdated(el);

    const backdrop = el.shadowRoot?.querySelector('.backdrop');
    const clickEvent = new MouseEvent('click');
    backdrop?.dispatchEvent(clickEvent);

    await elementUpdated(el);

    expect(el.mode).to.equal('closed');
  });

  it("dont't allow the user to close by clicking on the backdrop if configured to", async () => {
    const el = (await fixture(html`
      <modal-manager></modal-manager>
    `)) as ModalManagerInterface;

    const config = new ModalConfig();
    config.closeOnBackdropClick = false;
    el.showModal({ config });
    await elementUpdated(el);

    const backdrop = el.shadowRoot?.querySelector('.backdrop');
    const clickEvent = new MouseEvent('click');
    backdrop?.dispatchEvent(clickEvent);

    await elementUpdated(el);

    expect(el.getMode()).to.equal('open');
  });
});
