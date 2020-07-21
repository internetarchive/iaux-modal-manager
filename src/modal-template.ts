import {
  LitElement,
  html,
  css,
  customElement,
  CSSResult,
  property,
  TemplateResult,
} from 'lit-element';

import '@internetarchive/ia-activity-indicator/ia-activity-indicator';
import closeIcon from '@internetarchive/icon-close';

import { ModalConfig } from './modal-config';

@customElement('modal-template')
export class ModalTemplate extends LitElement {
  @property({ type: Object }) config: ModalConfig = new ModalConfig();

  render(): TemplateResult {
    return html`
      <div class="modal-wrapper">
        <div class="modal-container">
          <header style="background-color: ${this.config.headerColor}">
            ${this.config.showCloseButton ? this.closeButtonTemplate : ''}
            <div class="logo-icon">
              <img src="https://archive.org/images/logo_arches.png" />
            </div>
            <h1>${this.config.title}</h1>
            <h2>${this.config.subtitle}</h2>
          </header>
          <section class="modal-body">
            <div class="content">
              <div
                class="processing-logo ${this.config.showProcessingIndicator
                  ? ''
                  : 'hidden'}"
              >
                <ia-activity-indicator
                  .mode=${this.config.processingImageMode}
                ></ia-activity-indicator>
              </div>

              ${this.config.headline
                ? html` <h1 class="headline">${this.config.headline}</h1> `
                : ''}
              ${this.config.message
                ? html` <p class="message">${this.config.message}</p> `
                : ''}

              <div class="slot-container">
                <slot> </slot>
              </div>
            </div>
          </section>
        </div>
      </div>
    `;
  }

  /**
   * Dispatch the `closeButtonPressed` event to the consumer
   *
   * @private
   * @memberof ModalTemplate
   */
  private handleCloseButton(): void {
    const event = new Event('closeButtonPressed');
    this.dispatchEvent(event);
  }

  private get closeButtonTemplate(): TemplateResult {
    return html`
      <button
        type="button"
        class="close-button"
        @click=${this.handleCloseButton}
      >
        ${closeIcon}
      </button>
    `;
  }

  static get styles(): CSSResult {
    const modalCornerRadius = css`var(--modalCornerRadius, 10px)`;
    const modalBorder = css`var(--modalBorder, 2px solid black)`;
    // if the content of the modal is too big to fit on screen, this sets the bottom margin
    // it's not exact, but a close estimation
    const modalBottomMarginCss = css`var(--modalBottomMargin, 25px)`;

    return css`
      .hidden {
        display: none;
      }

      .modal-container {
        border-radius: ${modalCornerRadius};
        width: 100%;
        margin-top: 50px;
      }

      header {
        position: relative;
        background-color: #36a483;
        color: white;
        border-radius: calc(${modalCornerRadius}) calc(${modalCornerRadius}) 0 0;
        border: ${modalBorder};
        border-bottom: 0;
        text-align: center;
        padding-bottom: 0.5em;
      }

      header h1 {
        margin: 0;
        padding: 0;
        padding-top: 0.25em;
        font-size: 18px;
        font-weight: bold;
      }

      header h2 {
        margin: 0;
        padding: 0;
        font-weight: normal;
        padding-top: 0;
        font-size: 12px;
      }

      .modal-body {
        background-color: #f5f5f7;
        border-radius: 0 0 calc(${modalCornerRadius}) calc(${modalCornerRadius});
        border: ${modalBorder};
        border-top: 0;
        padding: 10px;
        color: #333;
        margin-bottom: 25px;
        min-height: 50px;
      }

      .content {
        overflow-y: auto;
        /* --containerHeight gets dynamically updated by the modal manager as the window
           gets resized so subtracting 225px gives space to the header and footer so we have
           a bit of margin around the modal for our scrollable area */
        max-height: calc(
          var(--containerHeight) - (200px + ${modalBottomMarginCss})
        );
        min-height: 50px;
        padding: 5px;
      }

      .headline {
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        line-height: 1.2em;
        margin: 0;
        padding: 0.5rem 0 0 0;
      }

      .message {
        margin: 0.5rem 0 0 0;
        text-align: center;
        font-size: 14px;
        line-height: 1.4em;
      }

      .logo-icon img {
        border-radius: 100%;
        border: 3px solid #fff;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.18),
          0 2px 2px 0 rgba(0, 0, 0, 0.08);
        margin-top: -29px;
        width: 65px;
      }

      .close-button {
        position: absolute;
        right: 16px;
        top: 16px;
        width: 20px;
        height: 20px;
        border-radius: 100%;
        border: 0;
        padding: 0;
        cursor: pointer;
        background-color: white;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.18),
          0 4px 4px 0 rgba(0, 0, 0, 0.08);
      }

      .processing-logo {
        margin: auto;
        width: 75px;
        height: 75px;
      }
    `;
  }
}
