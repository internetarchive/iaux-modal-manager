import { throttle } from 'throttle-debounce';

import { ModalManagerMode, ModalManagerInterface } from './modal-manager';

export interface ModalManagerHostBridgeInterface {
  handleModeChange(mode: ModalManagerMode): void;
}

export class ModalManagerHostBridge implements ModalManagerHostBridgeInterface {
  private modalManager: ModalManagerInterface;

  constructor(modalManager: ModalManagerInterface) {
    this.modalManager = modalManager;
  }

  /**
   * Handle the mode change
   *
   * @private
   * @memberof ModalManager
   */
  handleModeChange(mode: ModalManagerMode): void {
    switch (mode) {
      case ModalManagerMode.Open:
        this.startResizeListener();
        this.stopDocumentScroll();
        break;
      case ModalManagerMode.Closed:
        this.stopResizeListener();
        this.resumeDocumentScroll();
        break;
      default:
        break;
    }
  }

  private windowResizeThrottler: throttle<() => void> = throttle(
    100,
    false,
    this.updateModalContainerHeight
  ).bind(this);

  // This is a workaround for Safari. Safari does not update shadowRoot elements calculated
  // based on the viewport size (ie. `calc(100vh - 10px)`). It does an initial calculation correctly,
  // but resizing the window does not cause the calculation to update. Firefox and Chrome both handle
  // this correctly.
  // It doesn't matter what css variable you set, it is just forcing Safari to do an update.
  // Also note that the value has to change on each update for Safari to do the update,
  // ie. you can't just set a static value.
  private updateModalContainerHeight(): void {
    this.modalManager.style.setProperty(
      '--containerHeight',
      `${window.innerHeight}px`
    );
  }

  private stopDocumentScroll(): void {
    document.body.classList.add('modal-manager-open');
  }

  private resumeDocumentScroll(): void {
    document.body.classList.remove('modal-manager-open');
  }

  private startResizeListener(): void {
    window.addEventListener('resize', this.windowResizeThrottler);
  }

  private stopResizeListener(): void {
    window.removeEventListener('resize', this.windowResizeThrottler);
  }
}
