import { ModalManagerMode } from './modal-manager-mode';

/**
 * The ModalManagerHostBridgeInterface is a delegate interface for
 * the host to implement environment-specific changes when the modal
 * is open or closed.
 *
 * A default implementation is provided, but can be overridden if
 * it does not work for the environment.
 */
export interface ModalManagerHostBridgeInterface {
  handleModeChange(mode: ModalManagerMode): void;
}
