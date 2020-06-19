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

import { ModalConfig } from './modal-config';

import closeIcon from './assets/close-icon';

export enum ModalHeaderColors {
  Blue = '#497fbf',
  Green = '#55A183',
  Red = '#691916'
}

@customElement('modal-template')
export class ModalTemplate extends LitElement {
  @property({ type: Object }) config: ModalConfig = new ModalConfig();

  render(): TemplateResult {
    return html`
    <div class="modal-wrapper">
      <div class="head-spacer"></div>
      <div class="modal-container">
        <header style="background-color: ${this.config.headerColor}">
          <button type="button" class="close-button" @click=${this.handleCloseButton}>
            ${closeIcon}
          </button>
          <div class="logo-icon">
            <img src="https://archive.org/images/logo_arches.png">
          </div>
          <h1>${this.config.title}</h1>
          <h2>${this.config.subtitle}</h2>
        </header>
        <div class="body">
          <div class="content">
            <div class="processing-logo ${this.config.showProcessingIndicator ? '' : 'hidden'}">
              <ia-activity-indicator .mode=${this.config.processingImageMode}></ia-activity-indicator>
            </div>

            ${this.config.headline ? html`<h1 class="headline">${this.config.headline}</h1>` : ''}

            ${this.config.message ? html`<p class="message">${this.config.message}</p>` : ''}

            <div class="slot-container">
              <slot>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }

  private handleCloseButton(): void {
    const event = new Event('closeButtonPressed');
    this.dispatchEvent(event);
  }

  static get styles(): CSSResult {
    const modalCornerRadius = css`var(--modalCornerRadius, 10px)`;
    const modalBorder = css`var(--modalBorder, 2px solid black)`;

    return css`
      .hidden {
        display: none;
      }

      .modal-wrapper {
        position: absolute;
        height: 100%;
        width: 100%;
        /* outline: 2px solid blue; */
      }

      .head-spacer {
        height: 50px;
      }

      .modal-container {
        border-radius: ${modalCornerRadius};
        position: absolute;
        height: calc(100% - 50px);
        width: 100%;
      }

      header {
        position: relative;
        background-color: #36A483;
        color: white;
        border-radius: calc(${modalCornerRadius}) calc(${modalCornerRadius}) 0 0;
        border: ${modalBorder};
        border-bottom: 0;
        text-align: center;
        padding-bottom: 0.5em;
        /* box-shadow: 0 12px 30px 0 rgba(0, 0, 0, 0.5), inset 0 1px 0 0 hsla(0, 0%, 100%, .65); */
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

      .body {
        background-color: #f5f5f7;
        border-radius: 0 0 calc(${modalCornerRadius}) calc(${modalCornerRadius});
        border: ${modalBorder};
        border-top: 0;
        padding: 10px;
        color: #333;
        margin-bottom: 25px;
        overflow-y: auto;
        max-height: calc(100% - 135px);
        min-height: 100px;
      }

      .content {
        /* position: absolute; */
        /* height: 100%; */
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
        box-shadow: 0 0 0 1px rgba(0,0,0,.18), 0 2px 2px 0 rgba(0,0,0,.08);
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
        box-shadow: 0 0 0 1px rgba(0,0,0,.18), 0 4px 4px 0 rgba(0,0,0,.08);
      }

      .processing-logo {
        margin: auto;
        width: 75px;
        height: 75px;
      }
    `;
  }
}
