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
  Closed = 'closed'
}

export interface ModalManagerInterface {
  /**
   * Show a modal from a given ModalConfig
   *
   * @param config ModalConfig
   * @param customModalContent TemplateResult | undefined
   */
  showModal(
    config: ModalConfig,
    customModalContent: TemplateResult | undefined
  ): Promise<void>;

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
  @property({ type: String, reflect: true }) mode: ModalManagerMode = ModalManagerMode.Closed;

  /**
   * Custom content to display in the modal's content slot
   *
   * @type {(TemplateResult | undefined)}
   * @memberof ModalManager
   */
  @property({ type: Object }) customModalContent: TemplateResult | undefined;

  @query('modal-template') private modalTemplate!: ModalTemplate;

  /** @inheritdoc */
  render(): TemplateResult {
    return html`
      <div class="container ${this.mode}">
        <div class="backdrop" @click=${this.backdropClicked}></div>
        <modal-template @closeButtonPressed=${this.closeButtonPressed}>
          ${this.customModalContent}
        </modal-template>
      </div>
    `;
  }

  /** @inheritdoc */
  closeModal(): void {
    this.mode = ModalManagerMode.Closed;
  }

  /** @inheritdoc */
  async showModal(
    config: ModalConfig,
    customModalContent?: TemplateResult | undefined
  ): Promise<void> {
    this.mode = ModalManagerMode.Modal;
    this.modalTemplate.config = config;
    this.customModalContent = customModalContent;
  }

  /** @inheritdoc */
  updated(changed: PropertyValues): void {
    if (changed.has('mode')) {
      this.handleModeChange();
    }
  }

  /**
   * Called when the backdrop is clicked
   *
   * @private
   * @memberof ModalManager
   */
  private backdropClicked(): void {
    this.mode = ModalManagerMode.Closed;
  }

  private originalBodyOverflow?: string;

  /**
   * When the mode parameter changes, update any dependencies on that mode
   *
   * @private
   * @memberof ModalManager
   */
  private handleModeChange(): void {
    switch (this.mode) {
      case ModalManagerMode.Modal:
        this.originalBodyOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
      break;

      case ModalManagerMode.Closed:
        document.body.style.overflow = this.originalBodyOverflow ?? 'auto';
      break;
    }
  }

  /**
   * Called when the modal close button is pressed. Closes the modal.
   *
   * @private
   * @memberof ModalManager
   */
  private closeButtonPressed(): void {
    this.mode = ModalManagerMode.Closed;
  }

  /** @inheritdoc */
  static get styles(): CSSResult {
    const modalBackdropColor = css`var(--modalBackdropColor, rgba(10, 10, 10, 0.9))`;

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
        width: 300px;
        max-width: 90%;
      }
    `;
  }
}
