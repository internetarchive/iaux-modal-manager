import type { TemplateResult } from 'lit';

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
   * @type {(TemplateResult | string | undefined)}
   * @memberof ModalConfig
   */
  title?: TemplateResult | string;

  /**
   * The subtitle shown in the header under the title
   *
   * @type {(TemplateResult | string | undefined)}
   * @memberof ModalConfig
   */
  subtitle?: TemplateResult | string;

  /**
   * The headline shown at the top of the content section
   *
   * @type {(TemplateResult | string | undefined)}
   * @memberof ModalConfig
   */
  headline?: TemplateResult | string;

  /**
   * The text shown below the headline in the content section
   *
   * @type {(TemplateResult | string | undefined)}
   * @memberof ModalConfig
   */
  message?: TemplateResult | string;

  /**
   * The background color of the header
   *
   * @memberof ModalConfig
   */
  headerColor: string;

  /**
   * The background color of the body
   *
   * @memberof ModalConfig
   */
  bodyColor: string;

  /**
   * Show or hide the processing indicator
   *
   * @memberof ModalConfig
   */
  showProcessingIndicator: boolean;

  /**
   * Set the processing image mode
   *
   * @memberof ModalConfig
   */
  processingImageMode: 'processing' | 'complete';

  /**
   * Show the close button
   *
   * @memberof ModalConfig
   */
  showCloseButton: boolean;

  /**
   * Show the left nav button
   *
   * @memberof ModalConfig
   */
  showLeftNavButton: boolean;

  /**
   * Left nav button text
   */
  leftNavButtonText: string;

  /**
   * Show the close button
   *
   * @memberof ModalConfig
   */
  showHeaderLogo: boolean;

  /**
   * Close the modal if the user taps on the background
   *
   * @memberof ModalConfig
   */
  closeOnBackdropClick: boolean;

  constructor(options?: {
    title?: TemplateResult | string;
    subtitle?: TemplateResult | string;
    headline?: TemplateResult | string;
    message?: TemplateResult | string;
    headerColor?: string;
    bodyColor?: string;
    showProcessingIndicator?: boolean;
    processingImageMode?: 'processing' | 'complete';
    showCloseButton?: boolean;
    showLeftNavButton?: boolean;
    leftNavButtonText?: string;
    showHeaderLogo?: boolean;
    closeOnBackdropClick?: boolean;
  }) {
    this.title = options?.title;
    this.subtitle = options?.subtitle;
    this.headline = options?.headline;
    this.message = options?.message;

    this.headerColor = options?.headerColor ?? '#55A183';
    this.bodyColor = options?.bodyColor ?? '#fbfbfd';
    this.showProcessingIndicator = options?.showProcessingIndicator ?? false;
    this.processingImageMode = options?.processingImageMode ?? 'complete';
    this.showCloseButton = options?.showCloseButton ?? true;
    this.showLeftNavButton = options?.showLeftNavButton ?? false;
    this.leftNavButtonText = options?.leftNavButtonText ?? '';
    this.showHeaderLogo = options?.showHeaderLogo ?? true;
    this.closeOnBackdropClick = options?.closeOnBackdropClick ?? true;
  }
}
