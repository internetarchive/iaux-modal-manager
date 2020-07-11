import {
  LitElement,
  html,
  css,
  customElement,
  CSSResult,
  TemplateResult,
  query,
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
export class ModalManagerController extends LitElement {
  @query('modal-manager') private modalManager!: ModalManagerInterface;

  /** @inheritdoc */
  render(): TemplateResult {
    return html`
      <modal-manager @modeChanged=${this.modalModeChanged}></modal-manager>
    `;
  }

  // these are just convenience pass-throughs to the real modalManager
  async showModal(options: {
    config: ModalConfig;
    customModalContent?: TemplateResult;
    userClosedModalCallback?: () => void;
  }): Promise<void> {
    return this.modalManager.showModal(options);
  }

  closeModal(): void {
    return this.modalManager.closeModal();
  }

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
      modal-manager {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 250;
      }

      modal-manager[mode='closed'] {
        display: none;
      }

      modal-manager[mode='modal'] {
        display: block;
      }
    `;
  }
}
