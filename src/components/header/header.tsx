import { Component, Prop, h, Host } from '@stencil/core'

@Component({
    tag: 'd-header',
    styleUrl: './header.css',
    shadow: true
})

export class DHeader {
    @Prop() name: string

    render() {
        return (
            <Host>
                <span>{this.name}</span>
                <slot></slot>
            </Host>
        )
    }
}
