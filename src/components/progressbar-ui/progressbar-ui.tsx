import { Component, ComponentInterface, Host, h, Prop, Watch } from '@stencil/core';

export interface IProgressbar {
  name?: string;
  value: number;
  color: string;
}

type barType = string | number | IProgressbar;

@Component({
  tag: 'progressbar-ui',
  styleUrl: 'progressbar-ui.css',
  shadow: false,
  scoped: true
})
export class ProgressbarUi implements ComponentInterface {

  parsedValue: barType[];

  @Prop() value: barType | barType[];
  @Prop() stack: boolean = false;

  @Watch('value')
  valueDidChangeHandler(newValue: any) {
    let parsed = newValue;
    if(typeof newValue === 'string') {
      parsed = JSON.parse(newValue);
    }
    if(Array.isArray(parsed)){
      this.parsedValue = parsed;
    } else {
      this.parsedValue = [parsed];
    }
  }

  componentWillLoad() {
    this.valueDidChangeHandler(this.value);
  }

  render() {
    return (
      <Host>
        <div class="outer">
          <div class={{'inner': true, 'stack': this.stack }}>
            { [this.parsedValue].map( bar => {
              if(typeof bar === 'number' || typeof bar === 'string') {
                return <div class="progress" style={{ width: bar + '%', backgroundColor: 'gray' }}></div>
              } else {
                return <div class="progress" style={{ width: bar.value + '%', backgroundColor: bar.color }}></div>
              }
            }) }
          </div>
        </div>
      </Host>
    );
  }

}
