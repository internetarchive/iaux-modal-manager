/**
 * @file Close Icon
 * @requires lit
 * @exports TemplateResult
 * Path: src/assets/icons/close-icon.ts
 */
;
import { css, LitElement, svg } from 'lit';
class CloseIcon extends LitElement {
  static get styles() {
    return css`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `;
  }

  render() {
    return svg`
    <svg
      viewBox="0 0 40 40"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="closeTitleID closeDescID"
    >
    <title id="closeTitleID">Close icon</title>
    <desc id="closeDescID">A line drawing of an X</desc>
    <path d="m29.1923882 10.8076118c.5857864.5857865.5857864 1.535534 0 2.1213204l-7.0711162 7.0703398 7.0711162 7.0717958c.5857864.5857864.5857864 1.5355339 0 2.1213204-.5857865.5857864-1.535534.5857864-2.1213204 0l-7.0717958-7.0711162-7.0703398 7.0711162c-.5857864.5857864-1.5355339.5857864-2.1213204 0-.5857864-.5857865-.5857864-1.535534 0-2.1213204l7.0706602-7.0717958-7.0706602-7.0703398c-.5857864-.5857864-.5857864-1.5355339 0-2.1213204.5857865-.5857864 1.535534-.5857864 2.1213204 0l7.0703398 7.0706602 7.0717958-7.0706602c.5857864-.5857864 1.5355339-.5857864 2.1213204 0z" class="fill-color" fill-rule="evenodd"/>
    </svg>
    `;
  }
}

customElements.define('close-icon', CloseIcon);

export default CloseIcon;
