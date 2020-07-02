import { TemplateResult, html } from 'lit-html';

import { ModalHeaderColors } from './modal-header-colors';

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
  subtitle?: TemplateResult;

  /**
   * The headline shown at the top of the content section
   *
   * @type {(TemplateResult | undefined)}
   * @memberof ModalConfig
   */
  headline?: TemplateResult;

  /**
   * The text shown below the headline in the content section
   *
   * @type {(TemplateResult | undefined)}
   * @memberof ModalConfig
   */
  message?: TemplateResult;

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
   * Allow the user to close the modal. Hides the close X and disables backdrop click.
   *
   * @memberof ModalConfig
   */
  allowUserToClose = true;

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
