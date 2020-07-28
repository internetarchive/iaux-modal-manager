import {
  LitElement,
  html,
  css,
  customElement,
  CSSResult,
  TemplateResult,
  query,
  property,
} from 'lit-element';

import { throttle } from 'throttle-debounce';

import { ModalManagerInterface, ModalManagerMode } from './modal-manager';
import './modal-manager';
import { ModalConfig } from './modal-config';

/**
 * The ModalManagerController is a bridge between the host app and the ModalManager
 *
 * It is responsible for handling environmental interactions such as setting up
 * window resize listeners to account for resizing, as well as setting CSS
 * properties on the document to disable scrolling when open.
 *
 * This may not work for all environments but can be used
 * as a base class to extend for specific needs.
 *
 * @export
 * @class ModalManagerController
 * @extends {LitElement}
 * @implements {ModalManagerInterface}
 */
@customElement('modal-manager-controller')
export class ModalManagerController extends LitElement
  implements ModalManagerInterface {
  /**
   * Custom content to inject into the Modal Manager for passing through slotted content
   *
   * @type {TemplateResult}
   * @memberof ModalManagerController
   */
  @property({ type: Object }) slotContent?: TemplateResult;

  /** Reference to the ModalManager DOM element */
  @query('modal-manager') private modalManager!: ModalManagerInterface;

  /** @inheritdoc */
  render(): TemplateResult {
    return html`
      <modal-manager @modeChanged=${this.modalModeChanged}>
        ${this.slotContent}
      </modal-manager>
    `;
  }

  /** @inheritdoc */
  getMode(): ModalManagerMode {
    return this.modalManager.getMode();
  }

  /**
   * Show a modal with a given configuration.
   *
   * @param {{
   *     config: ModalConfig;
   *     customModalContent?: TemplateResult;
   *     userClosedModalCallback?: () => void;
   *   }} options
   * @returns {Promise<void>}
   * @memberof ModalManagerController
   */
  async showModal(options: {
    config: ModalConfig;
    customModalContent?: TemplateResult;
    userClosedModalCallback?: () => void;
  }): Promise<void> {
    return this.modalManager.showModal(options);
  }

  /**
   * Close the modal
   *
   * @returns {void}
   * @memberof ModalManagerController
   */
  closeModal(): void {
    return this.modalManager.closeModal();
  }

  /**
   * Callback that handles when the ModalManager changes modes.
   *
   * This is where we do things like stop the document body from scrolling.
   *
   * @private
   * @param {CustomEvent} e
   * @memberof ModalManagerController
   */
  private modalModeChanged(e: CustomEvent): void {
    const mode = e.detail.mode as ModalManagerMode;
    switch (mode) {
      case ModalManagerMode.Modal:
        this.startResizeListener();
        this.stopDocumentScroll();
        break;
      case ModalManagerMode.Closed:
        this.stopResizeListener();
        this.resumeDocumentScroll();
        break;
      default:
        break;
    }
  }

  private windowResizeThrottler: throttle<() => void> = throttle(
    100,
    false,
    this.updateModalContainerHeight
  ).bind(this);

  // This is a workaround for Safari. Safari does not update shadowRoot elements calculated
  // based on the viewport size (ie. `calc(100vh - 10px)`). It does an initial calculation correctly,
  // but resizing the window does not cause the calculation to update. Firefox and Chrome both handle
  // this correctly.
  // It doesn't matter what css variable you set, it is just forcing Safari to do an update.
  // Also note that the value has to change on each update for Safari to do the update,
  // ie. you can't just set a static value.
  private updateModalContainerHeight(): void {
    this.modalManager.style.setProperty(
      '--containerHeight',
      `${window.innerHeight}px`
    );
  }

  private stopDocumentScroll(): void {
    document.body.style.overflow = 'hidden';
  }

  private resumeDocumentScroll(): void {
    document.body.style.overflow = 'auto';
  }

  private startResizeListener(): void {
    window.addEventListener('resize', this.windowResizeThrottler);
  }

  private stopResizeListener(): void {
    window.removeEventListener('resize', this.windowResizeThrottler);
  }

  /** @inheritdoc */
  static get styles(): CSSResult {
    return css`
      modal-manager[mode='closed'] {
        display: none;
      }

      modal-manager[mode='modal'] {
        display: block;
      }
    `;
  }
}
