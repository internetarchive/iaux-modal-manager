import { TemplateResult, html } from 'lit-html';

import { ModalHeaderColors } from './modal-template';

export class ModalConfig {
  /**
   * The title that shows in the header
   *
   * @type {TemplateResult}
   * @memberof ModalConfig
   */
  title: TemplateResult = html`Internet Archive`;

  /**
   * The subtitle shown in the header under the title
   *
   * @type {(TemplateResult | undefined)}
   * @memberof ModalConfig
   */
  subtitle: TemplateResult | undefined;

  /**
   * The headline shown at the top of the content section
   *
   * @type {(TemplateResult | undefined)}
   * @memberof ModalConfig
   */
  headline: TemplateResult | undefined;

  /**
   * The text shown below the headline in the content section
   *
   * @type {(TemplateResult | undefined)}
   * @memberof ModalConfig
   */
  message: TemplateResult | undefined;

  /**
   * The color of the header
   *
   * @memberof ModalConfig
   */
  headerColor = '#36A483';

  /**
   * Show or hide the processing indicator
   *
   * @memberof ModalConfig
   */
  showProcessingIndicator = false;

  /**
   * Set the processing image mode, currently `processing` or `complete`
   *
   * @memberof ModalConfig
   */
  processingImageMode = 'processing';

  /**
   * A default error state configuration
   *
   * @readonly
   * @static
   * @type {ModalConfig}
   * @memberof ModalConfig
   */
  static get errorConfig(): ModalConfig {
    const config = new ModalConfig();
    config.headline = html`Error`;
    config.headerColor = ModalHeaderColors.Red;
    return config;
  }
}
