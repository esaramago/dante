import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core'

@Component({
    tag: 'd-button',
    styleUrl: './button.css',
    shadow: true,
})

export class DButton {
  @Prop() variant: string

  @Event() dClick: EventEmitter

  onClickButton(event) {
    this.dClick.emit(event)
  }

  render() {
    return (
      <Host>
        <button
          type="button"
          class={'button button--' + this.variant}
          onClick={(e) => this.onClickButton(e)}
        >
          <slot></slot>
        </button>
      </Host>
    )
  }

}
