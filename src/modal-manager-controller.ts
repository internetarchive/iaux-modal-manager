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

  /** @inheritdoc */
  firstUpdated(): void {
    window.addEventListener('resize', () => {
      this.modalManager.style.setProperty(
        '--containerHeight',
        `${window.innerHeight}px`
      );
    });

    this.modalManager.style.setProperty(
      '--containerHeight',
      `${window.innerHeight}px`
    );
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
        document.body.style.overflow = 'hidden';
        break;
      case ModalManagerMode.Closed:
        document.body.style.overflow = 'auto';
        break;
      default:
        break;
    }
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
