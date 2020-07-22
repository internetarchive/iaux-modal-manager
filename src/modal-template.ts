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
            ${this.config.title
              ? html`<h1 class="title">${this.config.title}</h1>`
              : ''}
            ${this.config.subtitle
              ? html`<h2 class="subtitle">${this.config.subtitle}</h2>`
              : ''}
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
    const modalTopMarginCss = css`var(--modalTopMargin, 50px)`;
    const modalHeaderBottomPaddingCss = css`var(--modalHeaderBottomPadding, 0.5em)`;

    const modalBottomPadding = css`var(--modalBottomPadding, 20px)`;
    const scrollOffset = css`var(--modalScrollOffset, 5px)`;

    const titleFontSize = css`var(--modalTitleFontSize, 18px)`;
    const subtitleFontSize = css`var(--modalSubtitleFontSize, 12px)`;
    const headlineFontSize = css`var(--modalHeadlineFontSize, 18px)`;
    const messageFontSize = css`var(--modalMessageFontSize, 14px)`;

    const titleLineHeight = css`var(--modalTitleLineHeight, normal)`;
    const subtitleLineHeight = css`var(--modalSubtitleLineHeight, normal)`;
    const headlineLineHeight = css`var(--modalHeadlineLineHeight, normal)`;
    const messageLineHeight = css`var(--modalMessageLineHeight, normal)`;

    return css`
      .processing-logo {
        margin: auto;
        width: 75px;
        height: 75px;
      }

      .processing-logo.hidden {
        height: 10px;
      }

      .processing-logo.hidden ia-activity-indicator {
        display: none;
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
        padding: 0 10px calc(${modalBottomPadding} - ${scrollOffset}) 10px;
        color: #333;
        margin-bottom: 25px;
        min-height: 50px;
      }

      .content {
        overflow-y: auto;
        /* --containerHeight gets dynamically updated by the modal manager as the window
           gets resized so subtracting 165px gives space to the header and footer so we have
           a bit of margin around the modal for our scrollable area. This is just an estimate */
        max-height: calc(
          var(--containerHeight) - (165px + ${modalBottomMarginCss})
        );
        min-height: 50px;
        padding: 0 0 calc(${scrollOffset}) 0; /* the 5px bottom margin prevents a small scrollbar from occurring */
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
        margin: 10px 0 0 0;
        text-align: center;
        font-size: ${messageFontSize};
        line-height: ${messageLineHeight};
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
        right: 12px;
        top: 12px;
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
    `;
  }
}
