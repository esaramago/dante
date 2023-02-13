# Dantesco
A Web Component's library for esaramago.

# How to use in your project
## Include in your project

### Install and import via npm
```
npm install dantesco --save
```

```js
// main.js
import '/node_modules/dantesco/dist/dantesco/core.css'
import '/node_modules/dantesco/dist/dantesco/core.esm.js'
```

### Include via cdn
```html
<!-- index.html -->

<link rel="stylesheet" href="https://unpkg.com/dantesco@1.0.1/dist/dantesco/core.css">

<script type="module" src="https://unpkg.com/dantesco@1.0.1/dist/dantesco/core.esm.js"></script>
```


## Theme
The following css custom properties are from the default theme. Add them to your project, if you want to change them
```css
:host {
  --color-main-500: #333;
  --color-secondary-500: #666;

  --gap: 1.6rem;

  --font-size: 1.5rem;
}
```

## Layout example
```html
<d-header name="..."></d-header>
<main d-container d-stack>
  ...
</main>
```

## Run storybook
```
npm run storybook
```

# How to continue developing Dantesco
## How to publish this library
1. Run `npm run build`
2. Update library version in package.json
3. Run `npm publish --access=public`

## To Do
- [x] Create web component's library
- [x] Publish library to npm
- [ ] Create a Storybook 
- [ ] Start using the library