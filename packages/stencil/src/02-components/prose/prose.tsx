import { Component, h } from '@stencil/core';


@Component({
  tag: 'j-prose',
  styleUrl: 'prose.scss'
})
export class Prose {
  render() {
    return (
      <slot />
    )
  }
}
