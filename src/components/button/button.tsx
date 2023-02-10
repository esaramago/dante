import { Component, Prop, h, Host } from '@stencil/core'

@Component({
    tag: 'd-button',
    styleUrl: './button.css',
    shadow: true,
})

export class DButton {
    @Prop() variant: string

    render() {
        return (
            <Host>
                <button
                    type="button"
                    class={'button button--' + this.variant}
                    >
                    <slot></slot>
                </button>
            </Host>
        )
    }
    
}