import { Component, Prop, Watch, State, h } from '@stencil/core'

@Component({
  tag: 'dnt-notification',
  styleUrl: './notification.css',
  shadow: true,
})

export class DNotification {
  @State() isMounted: boolean = false

  // type prop
  @Prop() type: string = 'info'
  @Watch('type')
  validateType(type: string) {
    const isValid = ['info', 'success', 'warning', 'error'].includes(type)

    if (!isValid) {
      throw new Error(`${this.type} is not a valid type`)
    }
  }

  // active prop
  @State() isActive: boolean = false
  @Watch('isActive')
  watchStateHandler(isActive: boolean) {
    if (isActive) {
      setTimeout(() => {
        this.hideNotification()
      }, 5000)
    }
  }

  componentDidLoad() {
    setTimeout(() => {
      this.showNotification()
    }, 1)
  }

  showNotification() {
    this.isActive = true
  }
  hideNotification() {
    this.isActive = false
  }

  // render
  render() {
    return (
      <div class={`
        notification
        notification--${this.type}
        ${this.isActive ? 'notification--active' : ''}
      `}>
        <slot></slot>
      </div>
    )
  }
}
