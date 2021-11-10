import { LitElement, TemplateResult } from 'lit';
import { ModalConfig } from './modal-config';
import { ModalManagerMode } from './modal-manager-mode';

export interface ModalManagerInterface extends LitElement {
  /**
   * Get the current modal mode.
   */
  getMode(): ModalManagerMode;

  /**
   * Show a modal from a given ModalConfig
   *
   * @param config ModalConfig
   * @param customModalContent TemplateResult | undefined
   * @param userClosedModalCallback () => void | undefined an optional callback when the modal is closed
   */
  showModal(options: {
    config: ModalConfig;
    customModalContent?: TemplateResult;
    userClosedModalCallback?: () => void;
  }): Promise<void>;

  /**
   * Close the currently open modal
   */
  closeModal(): void;
}
