import { Component, ComponentInterface, Host, h, Prop, Watch } from '@stencil/core';

export interface IProgressbar {
  name?: string;
  value: number;
  color: string;
}

@Component({
  tag: 'progressbar-ui',
  styleUrl: 'progressbar-ui.css',
  shadow: false,
  scoped: true
})
export class ProgressbarUi implements ComponentInterface {

  @Prop() value: string | number | IProgressbar;
  @Prop() values: (string | number | IProgressbar)[];
  @Prop() stack: boolean = false;

  render() {
    console.log(this.value)
    console.log(this.values)
    return (
      <Host>
        <div class="outer">
          <div class={{'inner': true, 'stack': this.stack }}>
            { (this.values || [this.value]).map( value => {
              if(typeof value === 'number' || typeof value === 'string') {
                return <div class="progress" style={{ width: value + '%', backgroundColor: 'gray' }}></div>
              } else {
                return <div class="progress" style={{ width: value.value + '%', backgroundColor: value.color }}></div>
              }
            }) }
          </div>
        </div>
      </Host>
    );
  }

}
