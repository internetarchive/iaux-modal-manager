import { fixture, expect, oneEvent, elementUpdated } from '@open-wc/testing';
import { TemplateResult, html } from 'lit';

import '../src/modal-manager';
import { ModalConfig } from '../src/modal-config';
import { ModalManager } from '../src/modal-manager';
import { ModalManagerMode } from '../src/modal-manager-mode';
import { ModalManagerInterface } from '../src/modal-manager-interface';

import { getTabbableElements } from '../src/shoelace/tabbable';

describe('Modal Manager', () => {
  it('defaults to closed', async () => {
    const el = (await fixture(html`
      <modal-manager></modal-manager>
    `)) as ModalManager;

    expect(el.mode).to.equal('closed');
  });

  it('can be closed by calling closeModal', async () => {
    const el = (await fixture(html`
      <modal-manager .mode=${ModalManagerMode.Open}></modal-manager>
    `)) as ModalManager;

    el.customModalContent = 'foo' as unknown as TemplateResult;
    await elementUpdated(el);

    expect(el.customModalContent).to.equal('foo');
    el.closeModal();
    await elementUpdated(el);

    expect(el.mode).to.equal('closed');
    expect(el.customModalContent).to.equal(undefined);
  });

  it('can be closed by clicking on the backdrop', async () => {
    const el = (await fixture(html`
      <modal-manager .mode=${ModalManagerMode.Open}></modal-manager>
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
    const response = await oneEvent(el, 'modeChanged', false);
    expect(response.detail.mode).to.equal(ModalManagerMode.Open);
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
    const response = await oneEvent(el, 'modeChanged', false);
    expect(response.detail.mode).to.equal(ModalManagerMode.Closed);
  });

  it('can show a modal', async () => {
    const el = (await fixture(html`
      <modal-manager></modal-manager>
    `)) as ModalManager;

    const config = new ModalConfig();
    el.showModal({ config });
    await elementUpdated(el);
    expect(el.mode).to.equal(ModalManagerMode.Open);
  });

  it('sets the --containerHeight CSS property when the window resizes', async () => {
    const el = (await fixture(html`
      <modal-manager></modal-manager>
    `)) as ModalManager;

    const config = new ModalConfig();
    el.showModal({ config });
    await elementUpdated(el);
    const event = new Event('resize');
    const propBefore = el.style.getPropertyValue('--containerHeight');
    expect(propBefore).to.equal('');
    window.dispatchEvent(event);
    await elementUpdated(el);
    const propAfter = el.style.getPropertyValue('--containerHeight');
    expect(propAfter).to.not.equal('');
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

  it('mode is set to closed when close button gets spacebar pressed', async () => {
    const el = (await fixture(html`
      <modal-manager></modal-manager>
    `)) as ModalManager;

    const config = new ModalConfig();
    el.showModal({ config });
    await elementUpdated(el);

    expect(el.mode).to.equal('open');

    const modal = el.shadowRoot?.querySelector('modal-template');
    const closeButton = modal?.shadowRoot?.querySelector('.close-button');

    // Close with keyboard
    const spacebarEvent = new KeyboardEvent('keydown', { key: ' ' });
    closeButton?.dispatchEvent(spacebarEvent);

    await elementUpdated(el);

    expect(el.mode).to.equal('closed');
  });

  it('mode remains open when close button gets non-button keypress', async () => {
    const el = (await fixture(html`
      <modal-manager></modal-manager>
    `)) as ModalManager;

    const config = new ModalConfig();
    el.showModal({ config });
    await elementUpdated(el);

    expect(el.mode).to.equal('open');

    const modal = el.shadowRoot?.querySelector('modal-template');
    const closeButton = modal?.shadowRoot?.querySelector('.close-button');

    // Close with keyboard
    const keyboardEvent = new KeyboardEvent('keydown', { key: '.' });
    closeButton?.dispatchEvent(keyboardEvent);

    await elementUpdated(el);

    expect(el.mode).to.equal('open');
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

  it("doesn't allow the user to close by clicking on the backdrop if configured to", async () => {
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

  it('ia logo should not visible on modal', async () => {
    const el = (await fixture(html`
      <modal-manager></modal-manager>
    `)) as ModalManagerInterface;

    const config = new ModalConfig();
    config.showHeaderLogo = false;
    el.showModal({ config });
    await elementUpdated(el);

    const logoIcon = el.shadowRoot?.querySelector('.logo-icon');
    expect(logoIcon).to.not.exist;
  });

  it('should trap Tab key', async () => {
    const el = (await fixture(html`
      <modal-manager></modal-manager>
    `)) as ModalManager;

    const config = new ModalConfig();
    el.showModal({ config });
    await elementUpdated(el);

    expect(el.mode).to.equal('open');

    // Tab once to focus
    const tabEvent = new KeyboardEvent('keydown', { key: 'Tab' });
    document.dispatchEvent(tabEvent);
    await elementUpdated(el);

    // Should be only one tabbable element
    const modal = el.shadowRoot?.querySelector('modal-template') as HTMLElement;
    const tabbableElements = getTabbableElements(modal);
    expect(tabbableElements?.length).to.equal(1);

    const closeButton = modal?.shadowRoot?.querySelector(
      '.close-button'
    ) as HTMLElement;
    const activeElement = modal?.shadowRoot?.activeElement as HTMLElement;

    expect(activeElement).to.equal(closeButton);

    // Tab again
    el.dispatchEvent(tabEvent);
    await elementUpdated(el);

    // Should be only one tabbable element
    expect(activeElement).to.equal(closeButton);

    // Shift + Tab
    const shiftTabEvent = new KeyboardEvent('keydown', {
      key: 'Tab',
      shiftKey: true,
    });
    document.dispatchEvent(shiftTabEvent);
    await elementUpdated(el);

    // Should be only one tabbable element
    expect(activeElement).to.equal(closeButton);
  });
});
