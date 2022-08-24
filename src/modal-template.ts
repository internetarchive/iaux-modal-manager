import { LitElement, html, css, CSSResult, TemplateResult, nothing } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import '@internetarchive/ia-activity-indicator/ia-activity-indicator';
import closeIcon from '@internetarchive/icon-close';
import iaLogo from '@internetarchive/icon-ia-logo';

import { ModalConfig } from './modal-config';

@customElement('modal-template')
export class ModalTemplate extends LitElement {
  /**
   * The ModalConfig that displayed the template
   *
   * @type {ModalConfig}
   * @memberof ModalTemplate
   */
  @property({ type: Object }) config: ModalConfig = new ModalConfig();

  /** @inheritdoc */
  render(): TemplateResult {
    return html`
      <div class="modal-wrapper">
        <div class="modal-container">
          <header style="background-color: ${this.config.headerColor}">
            ${this.config.showCloseButton ? this.closeButtonTemplate : ''}
            ${this.config.showHeaderLogo
              ? html`<div class="logo-icon">${iaLogo}</div>`
              : nothing}
            ${this.config.title
              ? html`<h1 class="title">${this.config.title}</h1>`
              : ''}
            ${this.config.subtitle
              ? html`<h2 class="subtitle">${this.config.subtitle}</h2>`
              : ''}
          </header>
          <section
            class="modal-body"
            style="background-color: ${this.config.bodyColor}"
          >
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

  /**
   * The close button template
   *
   * @readonly
   * @private
   * @type {TemplateResult}
   * @memberof ModalTemplate
   */
  private get closeButtonTemplate(): TemplateResult {
    return html`
      <button
        type="button"
        class="close-button"
        tabindex="0"
        @click=${this.handleCloseButton}
      >
        ${closeIcon}
      </button>
    `;
  }

  /** @inheritdoc */
  static get styles(): CSSResult {
    const modalLogoSize = css`var(--modalLogoSize, 6.5rem)`;

    const processingImageSize = css`var(--processingImageSize, 7.5rem)`;

    const modalCornerRadius = css`var(--modalCornerRadius, 1rem)`;
    const modalBorder = css`var(--modalBorder, 2px solid black)`;
    // if the content of the modal is too big to fit on screen, this sets the bottom margin
    // it's not exact, but a close estimation
    const modalBottomMarginCss = css`var(--modalBottomMargin, 2.5rem)`;
    const modalTopMarginCss = css`var(--modalTopMargin, 5rem)`;
    const modalHeaderBottomPaddingCss = css`var(--modalHeaderBottomPadding, 0.5em)`;

    const modalBottomPadding = css`var(--modalBottomPadding, 2rem)`;
    const scrollOffset = css`var(--modalScrollOffset, 5px)`;

    const titleFontSize = css`var(--modalTitleFontSize, 1.8rem)`;
    const subtitleFontSize = css`var(--modalSubtitleFontSize, 1.4rem)`;
    const headlineFontSize = css`var(--modalHeadlineFontSize, 1.6rem)`;
    const messageFontSize = css`var(--modalMessageFontSize, 1.4rem)`;

    const titleLineHeight = css`var(--modalTitleLineHeight, normal)`;
    const subtitleLineHeight = css`var(--modalSubtitleLineHeight, normal)`;
    const headlineLineHeight = css`var(--modalHeadlineLineHeight, normal)`;
    const messageLineHeight = css`var(--modalMessageLineHeight, normal)`;

    return css`
      .processing-logo {
        margin: auto;
        width: ${processingImageSize};
        height: ${processingImageSize};
      }

      .processing-logo.hidden {
        height: 1rem;
      }

      .processing-logo.hidden ia-activity-indicator {
        display: none;
      }

      .modal-wrapper {
        outline: none;
      }

      .modal-container {
        border-radius: ${modalCornerRadius};
        width: 100%;
        margin-top: ${modalTopMarginCss};
      }

      header {
        position: relative;
        background-color: #36a483;
        color: white;
        border-radius: calc(${modalCornerRadius}) calc(${modalCornerRadius}) 0 0;
        border: ${modalBorder};
        border-bottom: 0;
        text-align: center;
        padding-bottom: ${modalHeaderBottomPaddingCss};
      }

      .title {
        margin: 0;
        padding: 0;
        font-size: ${titleFontSize};
        font-weight: bold;
        line-height: ${titleLineHeight};
      }

      .subtitle {
        margin: 0;
        padding: 0;
        font-weight: normal;
        padding-top: 0;
        font-size: ${subtitleFontSize};
        line-height: ${subtitleLineHeight};
      }

      .modal-body {
        background-color: #f5f5f7;
        border-radius: 0 0 calc(${modalCornerRadius}) calc(${modalCornerRadius});
        border: ${modalBorder};
        border-top: 0;
        padding: 0 1rem calc(${modalBottomPadding} - ${scrollOffset}) 1rem;
        color: #333;
        margin-bottom: 2.5rem;
        min-height: 5rem;
      }

      .content {
        overflow-y: auto;
        max-height: calc(100vh - (16.5rem + ${modalBottomMarginCss}));
        min-height: 5rem;
        padding: 0 0 calc(${scrollOffset}) 0;
      }

      .headline {
        font-size: ${headlineFontSize};
        font-weight: bold;
        text-align: center;
        line-height: ${headlineLineHeight};
        margin: 0;
        padding: 0;
      }

      .message {
        margin: 1rem 0 0 0;
        text-align: center;
        font-size: ${messageFontSize};
        line-height: ${messageLineHeight};
      }

      .logo-icon {
        border-radius: 100%;
        border: 3px solid #fff;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.18),
          0 2px 2px 0 rgba(0, 0, 0, 0.08);
        width: ${modalLogoSize};
        height: ${modalLogoSize};
        margin: -2.9rem auto 0.5rem auto;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .logo-icon svg {
        width: calc(${modalLogoSize} * 0.65);
        height: calc(${modalLogoSize} * 0.65);
      }

      .logo-icon svg .fill-color {
        fill: white;
      }

      .logo-icon svg .stroke-color {
        stroke: red;
      }

      .close-button {
        position: absolute;
        right: 1.2rem;
        top: 1.2rem;
        width: 2rem;
        height: 2rem;
        border-radius: 100%;
        border: 0;
        padding: 0;
        cursor: pointer;
        background-color: white;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.18),
          0 4px 4px 0 rgba(0, 0, 0, 0.08);
      }

      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
      }

      slot::slotted(.sr-only) {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
      }
    `;
  }
}
