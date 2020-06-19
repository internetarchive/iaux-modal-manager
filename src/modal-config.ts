import { TemplateResult, html } from 'lit-html';

import { ModalHeaderColors } from './modal-template';

export class ModalConfig {
  title: TemplateResult = html`Internet Archive`;

  subtitle: TemplateResult | undefined;

  headline: TemplateResult | undefined;

  message: TemplateResult | undefined;

  headerColor = '#36A483';

  showProcessingIndicator = false;

  processingImageMode = 'processing';

  static get errorConfig(): ModalConfig {
    const config = new ModalConfig();
    config.headline = html`Error`;
    config.headerColor = ModalHeaderColors.Red;
    return config;
  }
}
