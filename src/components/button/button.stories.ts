export default {
  title: 'Components/DButton',
}

const Template = (args) => `<d-button variant="${args.variant}">${args.label}</d-button>`

export const Example = Template.bind({})
Example.args = {
  variant: 'secondary',
  label: 'The',
}
