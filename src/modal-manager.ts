import {
  LitElement,
  html,
  css,
  customElement,
  CSSResult,
  TemplateResult,
  property,
  query,
  PropertyValues,
} from 'lit-element';

import './modal-template';
import { ModalTemplate } from './modal-template';
import { ModalConfig } from './modal-config';

export enum ModalManagerMode {
  Modal = 'modal',
  Closed = 'closed',
}

export interface ModalManagerInterface extends LitElement {
  /**
   * Get the current modal mode. Can be set or get.
   */
  getMode(): ModalManagerMode;

  /**
   * Show a modal from a given ModalConfig
   *
   * @param config ModalConfig
   * @param customModalContent TemplateResult | undefined
   * @param userClosedModalCallback () => void | undefined an optional callback when the modal is closed
   */
  showModal(options: {
    config: ModalConfig;
    customModalContent?: TemplateResult;
    userClosedModalCallback?: () => void;
  }): Promise<void>;

  /**
   * Close the currently open modal
   */
  closeModal(): void;
}

@customElement('modal-manager')
export class ModalManager extends LitElement implements ModalManagerInterface {
  /**
   * The current mode of the ModalManager
   *
   * Current options are `modal` or `closed`
   *
   * @type {ModalManagerMode}
   * @memberof ModalManager
   */
  @property({ type: String, reflect: true }) mode: ModalManagerMode =
    ModalManagerMode.Closed;

  /**
   * Custom content to display in the modal's content slot
   *
   * @type {(TemplateResult | undefined)}
   * @memberof ModalManager
   */
  @property({ type: Object }) customModalContent?: TemplateResult;

  @query('modal-template') private modalTemplate!: ModalTemplate;

  /** @inheritdoc */
  render(): TemplateResult {
    return html`
      <div class="container">
        <div class="backdrop" @click=${this.backdropClicked}></div>
        <modal-template @closeButtonPressed=${this.closeButtonPressed}>
          ${this.customModalContent}
        </modal-template>
      </div>
    `;
  }

  /** @inheritdoc */
  getMode(): ModalManagerMode {
    return this.mode;
  }

  /** @inheritdoc */
  closeModal(): void {
    this.mode = ModalManagerMode.Closed;
  }

  private closeOnBackdropClick = true;

  private userClosedModalCallback?: () => void;

  private callUserClosedModalCallback(): void {
    // we assign the callback to a temp var and undefine it before calling it
    // otherwise, we run into the potential for an infinite loop if the
    // callback triggers another `showModal()`, which would execute `userClosedModalCallback`
    const callback = this.userClosedModalCallback;
    this.userClosedModalCallback = undefined;
    if (callback) callback();
  }

  /** @inheritdoc */
  async showModal(options: {
    config: ModalConfig;
    customModalContent?: TemplateResult;
    userClosedModalCallback?: () => void;
  }): Promise<void> {
    this.closeOnBackdropClick = options.config.closeOnBackdropClick;
    this.userClosedModalCallback = options.userClosedModalCallback;
    this.modalTemplate.config = options.config;
    this.customModalContent = options.customModalContent;
    this.mode = ModalManagerMode.Modal;
  }

  /** @inheritdoc */
  updated(changed: PropertyValues): void {
    /* istanbul ignore else */
    if (changed.has('mode')) {
      this.emitModeChangeEvent();
    }
  }

  /**
   * Called when the backdrop is clicked
   *
   * @private
   * @memberof ModalManager
   */
  private backdropClicked(): void {
    if (this.closeOnBackdropClick) {
      this.closeModal();
      this.callUserClosedModalCallback();
    }
  }

  /**
   * Emit a modeChange event
   *
   * @private
   * @memberof ModalManager
   */
  private emitModeChangeEvent(): void {
    const event = new CustomEvent('modeChanged', {
      detail: { mode: this.mode },
    });
    this.dispatchEvent(event);
  }

  /**
   * Called when the modal close button is pressed. Closes the modal.
   *
   * @private
   * @memberof ModalManager
   */
  private closeButtonPressed(): void {
    this.closeModal();
    this.callUserClosedModalCallback();
  }

  /** @inheritdoc */
  static get styles(): CSSResult {
    const modalBackdropColor = css`var(--modalBackdropColor, rgba(10, 10, 10, 0.9))`;
    const modalWidth = css`var(--modalWidth, 320px)`;

    return css`
      .container {
        width: 100%;
        height: 100%;
      }

      .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        background-color: ${modalBackdropColor};
        width: 100%;
        height: 100%;
        z-index: 1000;
      }

      modal-template {
        position: fixed;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0);
        z-index: 2000;
        width: ${modalWidth};
        max-width: 90%;
      }
    `;
  }
}
