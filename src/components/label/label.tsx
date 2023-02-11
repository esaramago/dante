import { Component, Prop, h } from '@stencil/core'

@Component({
  tag: 'd-label',
  styleUrl: './label.css'
})

export class DLabel {
  @Prop() htmlId! : string
  @Prop() required : boolean

  render() {
    return (
      <label htmlFor={this.htmlId} class="label">
        <slot></slot>
        {this.required && <span class="label__required"> *</span>}
      </label>
    )
  }
}
