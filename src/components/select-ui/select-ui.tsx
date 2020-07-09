import { Component, ComponentInterface, Host, h, State, Element, Prop, Listen, Method } from '@stencil/core';

@Component({
  tag: 'select-ui',
  styleUrl: 'select-ui.css',
  shadow: false,
  scoped: true
})
export class SelectUI implements ComponentInterface {

  @Prop() placeholder: string = 'Select';
  @Prop() multiselect: boolean = false;
  @State() showOptions: boolean = false;
  @Element() host: HTMLDivElement;

  options: HTMLOptionUiElement[];

  componentWillLoad() {
    this.options = Array.from(this.host.querySelectorAll('option-ui'));
  }

  @Listen('optionSelected')
  selectedHandler(evt) {
    if(!this.multiselect){
      this.options.forEach( option => option.selected = false );
      this.showOptions = false;
    }
    evt.target.selected = !evt.target.selected;
  }

  @Method()
  async getValue() {
    return this.options.filter( option => option.selected).map( option => option.value);
  }

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  generateLabel() {
    return this.options.filter( option => option.selected).map( option => option.innerText).join(',')
  }

  render() {
    return (
      <Host>
        <div class="wrapper">
          <div class="select-area" onClick={() => this.toggleOptions()}>
            <div class="placeholder">
              { this.generateLabel() || this.placeholder }
            </div>
          </div>
          <div class={`option-area ${this.showOptions ? 'show' : ''}`}>
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }

}
