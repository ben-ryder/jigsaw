import { Component, h } from '@stencil/core';


@Component({
  tag: 'j-content-section',
  styleUrl: 'content-section.scss'
})
export class ContentSection {
  render() {
    return <slot />;
  }
}
