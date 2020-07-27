import { TemplateResult, html } from 'lit-html';

/**
 * Configuration to show a modal
 *
 * @export
 * @class ModalConfig
 */
export class ModalConfig {
  /**
   * The title that shows in the header
   *
   * @type {(TemplateResult | undefined)}
   * @memberof ModalConfig
   */
  title?: TemplateResult = html`Internet Archive`;

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
  headerColor = '#55A183';

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
   * Show the close button
   *
   * @memberof ModalConfig
   */
  showCloseButton = true;

  /**
   * Close the modal if the user taps on the background
   *
   * @memberof ModalConfig
   */
  closeOnBackdropClick = true;
}
