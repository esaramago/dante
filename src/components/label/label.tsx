import { Component, Prop, Host, h } from '@stencil/core'

@Component({
  tag: 'dnt-label',
  styleUrl: './label.css'
})

export class DLabel {
  @Prop() htmlId! : string
  @Prop() required : boolean

  render() {
    return (
      <Host>
        <label htmlFor={this.htmlId} class="label">
          <slot></slot>
          {this.required && <span class="label__required"> *</span>}
        </label>
      </Host>
    )
  }
}
