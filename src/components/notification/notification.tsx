import { Component, Prop, Watch, State, h } from '@stencil/core'

@Component({
  tag: 'd-notification',
  styleUrl: './notification.css',
  shadow: true,
})

export class DNotification {
  @State() isMounted: boolean = false

  // variant prop
  @Prop() variant: string = 'info'
  @Watch('variant')
  validateVariant(variant: string) {
    const isValid = ['info', 'success', 'warning', 'error'].includes(variant)

    if (!isValid) {
      throw new Error(`${this.variant} is not a valid variant`)
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
        notification--${this.variant}
        ${this.isActive ? 'notification--active' : ''}
      `}>
        <slot></slot>
      </div>
    )
  }
}
