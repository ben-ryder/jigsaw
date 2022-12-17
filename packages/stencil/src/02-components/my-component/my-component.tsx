import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
})
export class MyComponent {
  /**
   * The name
   */
  @Prop() name: string;

  render() {
    return <div>Hello, World! I'm {this.name}</div>;
  }
}
