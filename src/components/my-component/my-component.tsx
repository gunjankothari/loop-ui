import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() header: string;

  /**
   * The middle name
   */
  @Prop() description: string;

  /**
   * The last name
   */
  @Prop() last: string;

  render() {
  return <div>
      <div class="header">{ this.header }</div>
      <div class="description">{ this.description }</div>
    </div>;
  }
}
