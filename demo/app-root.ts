import { html, css, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import '../src/modal-manager';
import { ModalConfig } from '../src/modal-config';
import { ModalManager } from '../src/modal-manager';

@customElement('app-root')
export class AppRoot extends LitElement {
  @query('modal-manager')
  modalManager!: ModalManager;

  render() {
    return html`
      <h1>Modal Manager Demo</h1>

      <div class="actions">
        <button @click=${this.showModal}>Modal</button>
        <button @click=${this.showAllFeaturesModal}>All Features</button>
        <button @click=${this.showErrorModal}>Error Modal</button>
        <button @click=${this.showCustomContentModal}>
          Custom Content Modal
        </button>
        <button @click=${this.showSlottedContentModal}>
          Slotted Content Modal
        </button>
        <button @click=${this.showProcessingModal}>Processing Modal</button>
        <button @click=${this.showCompleteModal}>
          Processing Complete Modal
        </button>
        <button @click=${this.showUserClosedModalCallbackModal}>
          Modal Closed Callback
        </button>
        <button @click=${this.showModalUserCannotClose}>
          Unclosable Modal
        </button>
        <button @click=${this.showModalUserCannotClickBackdrop}>
          Unclickable Backdrop
        </button>
        <button @click=${this.showOverflowModal}>Text-heavy Modal</button>
        <button @click=${this.showModalWithoutLogo}>Modal Without Logo</button>
      </div>

      <p>This is a simple demo of the modal manager component.</p>
      <modal-manager></modal-manager>
    `;
  }

  showModal() {
    const config = new ModalConfig();
    config.headline = html`Success`;
    config.message = html`Thank you for your support!`;

    this.modalManager.showModal({
      config,
    });
  }

  showErrorModal() {
    const config = new ModalConfig();
    config.headline = html`Error`;
    config.message = html`An error occurred while processing your donation.`;
    config.headerColor = '#691916';
    config.bodyColor = '#fff';

    this.modalManager.showModal({
      config,
    });
  }

  showBillAlert() {
    alert('Bill <3 You');
  }

  buttonPress() {
    alert('You pressed a button.');
  }

  showAllFeaturesModal() {
    const config = new ModalConfig();
    config.title = html`Donation Received`;
    config.subtitle = html`Thanks a bunch!`;
    config.headline = html`A Headline that catches attention and might spill
    over to multiple lines!`;
    config.message = html`A long informative message for your users that let
    them know about something`;
    config.headerColor = 'purple';
    config.showProcessingIndicator = true;
    config.processingImageMode = 'complete';

    const someContent = html`
      <div style="text-align: center; margin-top: 10px;">
        <button @click=${this.buttonPress}>I'm A Button To Press</button>
      </div>
    `;

    this.modalManager.showModal({
      config,
      customModalContent: someContent,
    });
  }

  showCustomContentModal() {
    const config = new ModalConfig();
    config.title = html`Custom Content`;
    config.headline = html`<span class="sr-only"
      >Also support screen-reader only</span
    >`;

    const someContent = html`
      <style>
        a:focus {
          outline: 2px solid blue;
        }
      </style>
      Can contain any markup, including web components. Event listeners also
      work. Try clicking on the picture.
      <span class="sr-only">Also support screen-reader only</span>
      <div style="text-align: center">
        <a href="https://www.billmurraystory.com/" style="display: block;"
          >Bill Murray Stories</a
        >
        <img src="./assets/images/100x100.jpg" @click=${this.showBillAlert} />
      </div>
    `;

    this.modalManager.showModal({
      config,
      customModalContent: someContent,
    });
  }

  showSlottedContentModal() {
    const config = new ModalConfig();
    config.title = html`Slotted Content`;

    const someContent = html`
      Can slot content from the top-level:
      <slot name="slot-content-demo"></slot>
    `;

    this.modalManager.showModal({
      config,
      customModalContent: someContent,
    });
  }

  showOverflowModal() {
    const config = new ModalConfig();

    config.title = html`Lorem Ipsum`;
    config.subtitle = html`Subtitle`;
    config.headline = html`Everything Important`;
    config.message = html`
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere
        sollicitudin aliquam. Aenean vel felis arcu. Maecenas convallis dolor ac
        tortor tristique, congue scelerisque turpis congue. Vestibulum porttitor
        scelerisque quam, sit amet porta tortor consectetur non. Cras
        sollicitudin sit amet lacus ac egestas. Nam sollicitudin sem at sagittis
        laoreet. Donec nec nisl erat. Curabitur interdum in enim vehicula
        aliquam. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Fusce tempus sit amet tortor laoreet
        volutpat. Vivamus non vehicula felis, aliquet hendrerit odio.
      </p>

      <p>
        In laoreet scelerisque tortor, at convallis nisl efficitur vehicula.
        Donec eu erat a turpis fermentum blandit vitae ut erat. Mauris tincidunt
        erat sit amet ante suscipit porta. Fusce mollis metus sit amet erat
        condimentum, eu maximus lacus aliquam. Sed cursus lacus eget sem commodo
        feugiat. Praesent semper lorem eu sollicitudin blandit. Sed id risus in
        lacus fermentum tristique. In porttitor malesuada sapien non posuere.
        Phasellus mollis mauris ultrices est consectetur, id pulvinar magna
        suscipit. Integer sodales sapien in augue tincidunt, ac tempor ligula
        cursus. Mauris id justo et dui blandit luctus. Morbi mattis id metus id
        maximus. Suspendisse quis lobortis erat, sed dignissim neque. Etiam
        cursus posuere ultricies.
      </p>
    `;

    config.headerColor = '#36A483';

    this.modalManager.showModal({
      config,
    });
  }

  showModalWithoutLogo() {
    const config = new ModalConfig();
    config.headline = html`Success`;
    config.title = html`Donation Received`;
    config.message = html`Thank you for your support!`;
    config.headerColor = '#194880';
    config.showHeaderLogo = false;
    this.modalManager.showModal({
      config,
    });
  }

  showCompleteModal() {
    const config = new ModalConfig();
    config.showProcessingIndicator = true;
    config.processingImageMode = 'complete';
    this.modalManager.showModal({
      config,
    });
  }

  showProcessingModal() {
    const config = new ModalConfig();
    config.headerColor = '#497fbf';
    config.showProcessingIndicator = true;
    config.processingImageMode = 'processing';
    config.showCloseButton = false;
    config.closeOnBackdropClick = false;
    this.modalManager.showModal({
      config,
    });

    setTimeout(this.showCompleteModal, 1500);
  }

  showUserClosedModalCallbackModal() {
    const config = new ModalConfig();
    config.message = html`When you close this modal another will open.`;

    this.modalManager.showModal({
      config,
      userClosedModalCallback: () => {
        const config = new ModalConfig();
        config.message = html`I'm another modal`;
        config.headerColor = '#497fbf';
        this.modalManager.showModal({ config });
      },
    });
  }

  showModalUserCannotClose() {
    const config = new ModalConfig();
    config.message = html`User cannot close this. Will close automatically in 2 seconds.`;
    config.showCloseButton = false;
    config.closeOnBackdropClick = false;
    this.modalManager.showModal({
      config,
    });

    setTimeout(this.modalManager.closeModal.bind(this.modalManager), 2000);
  }

  showModalUserCannotClickBackdrop() {
    const config = new ModalConfig();
    config.message = html`Clicking on the backdrop will not close this.`;
    config.showCloseButton = true;
    config.closeOnBackdropClick = false;
    this.modalManager.showModal({
      config,
    });
  }

  static styles = css`
    modal-manager {
      display: none;
      --modalTitleLineHeight: 4.5rem;
    }

    modal-manager[mode='open'] {
      display: block;
    }
  `;
}
