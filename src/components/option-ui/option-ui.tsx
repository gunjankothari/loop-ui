import { Component, ComponentInterface, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'option-ui',
  styleUrl: 'option-ui.css',
  shadow: false,
  scoped: true
})
export class OptionUI implements ComponentInterface {

  @Prop() value: any;
  @Prop() disabled: boolean = false;
  @Prop() selected: boolean = false;

  @Event({
    eventName: 'optionSelected',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  optionSelected: EventEmitter<any>;

  optionSelectedHandler(evt) {
    this.optionSelected.emit(evt);
  }

  render() {
    return (
      <Host class={ this.selected && 'selected'} onClick={(evt: Event) => this.optionSelectedHandler(evt)}>
        <slot></slot>
      </Host>
    );
  }

}
