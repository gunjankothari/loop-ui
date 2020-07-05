import { Component, ComponentInterface, h, Host } from '@stencil/core';

@Component({
  tag: 'card-ui',
  styleUrl: 'card-ui.css',
  shadow: false,
  scoped: true
})
export class CardUi implements ComponentInterface {

  render() {
    return (
        <Host>
          <div class="outer">
            <div class="inner">
              <div class="header">
                <slot name="header"></slot>
              </div>
              <div class="content">
                <slot />
              </div>
              <div class="footer">
                <slot name="footer"></slot>
              </div>
            </div>
          </div>
        </Host>
    );
  }

}
