import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'card-ui',
  styleUrl: 'card-ui.css',
  shadow: true,
})
export class CardUi implements ComponentInterface {

  render() {
    return (
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
    );
  }

}
