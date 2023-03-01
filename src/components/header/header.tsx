import { Component, Prop, h, Host } from '@stencil/core'

@Component({
  tag: 'dnt-header',
  styleUrl: './header.css',
  shadow: true
})

export class DHeader {
  @Prop() name: string

  render() {
    return (
      <Host>
        <div class="header__start">
          <img src="img/logo.svg" alt={`Logo ${this.name}`} class="header__logo" />
          <span class="header__title">{this.name}</span>
        </div>
        <slot></slot>
      </Host>
    )
  }
}
