import {Component, h, Prop} from '@stencil/core';

enum ButtonStyling {
  primary =  "primary",
  secondary =  "secondary",
  destructive = "destructive",
  destructiveMuted = "destructive-muted",
  constructiveMuted = "constructive-muted",
}


@Component({
  tag: 'j-button',
  styleUrl: 'button.scss'
})
export class Button {
  @Prop({reflect: true}) styling?: ButtonStyling;

  render() {
    console.log(this);
    const className = `button${this.styling ? ` button--${this.styling}` : ' button--primary'}`
    return <button class={className}><slot /></button>;
  }
}
