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
  showModal(
    config: ModalConfig,
    customModalContent: TemplateResult | undefined
  ): Promise<void>;
  closeModal(): void;
}

@customElement('modal-manager')
export class ModalManager extends LitElement implements ModalManagerInterface {
  @property({ type: String, reflect: true }) mode: ModalManagerMode = ModalManagerMode.Closed;

  @property({ type: Object }) customModalContent: TemplateResult | undefined;

  @query('modal-template') modalTemplate!: ModalTemplate;

  /** @inheritdoc */
  render(): TemplateResult {
    return html`
      <div class="container ${this.mode}">
        <div class="backdrop" @click=${this.backgroundClicked}></div>
        <modal-template @closeButtonPressed=${this.closeButtonPressed}>
          ${this.customModalContent}
        </modal-template>
      </div>
    `;
  }

  closeModal(): void {
    this.mode = ModalManagerMode.Closed;
  }

  backgroundClicked(): void {
    console.debug('backgroundClicked');
    this.mode = ModalManagerMode.Closed;
  }

  async showModal(
    config: ModalConfig,
    customModalContent?: TemplateResult | undefined
  ): Promise<void> {
    this.mode = ModalManagerMode.Modal;
    console.debug('config', config, this.modalTemplate);
    this.modalTemplate.config = config;
    this.customModalContent = customModalContent;
  }

  updated(changed: PropertyValues): void {
    if (changed.has('mode')) {
      this.handleModeChange();
    }
  }

  private originalBodyOverflow?: string;

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
