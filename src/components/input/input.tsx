import { Component, Prop, h, Watch, Event, EventEmitter } from '@stencil/core'

@Component({
  tag: 'dnt-input',
  styleUrl: './input.css',
  shadow: true,
})

export class DInput {
  @Prop() label! : string

  @Prop() value : string = ''
  @Prop() placeholder : string = ''
  @Prop() required : boolean = false
  @Prop() error : string = ''

  @Prop() type : string = 'text'
  @Watch('type')
  validateType(type : string) {
    const isValid = ['text', 'email', 'date'].includes(type)

    if (!isValid) {
      throw new Error(`${this.type} is not a valid input type`)
    }
  }

  @Event() dInput: EventEmitter
  onInput(event) {
    this.dInput.emit({
      value: event.target.value
    })
  }

  @Event() dChange: EventEmitter
  onChange(event) {
    this.dChange.emit({
      value: event.target.value
    })
  }

  render() {
    const uniqueId = `dnt-input-${Math.random().toString(36)}`
    return (
      <div>
        <dnt-label
          htmlId={uniqueId}
          required={this.required}
        >{this.label}</dnt-label>
        <input
          class={`input input--${this.type}`}
          id={uniqueId}
          type={this.type}
          value={this.value}
          onKeyUp={(e) => this.onInput(e)}
          onPaste={(e) => this.onInput(e)}
          onChange={(e) => this.onChange(e)}
        />
        {this.error &&
          <div class="input__error">{this.error}</div>
        }
      </div>
    )
  }
}
