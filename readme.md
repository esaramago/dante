# Dantesco
A Web Component's library for esaramago.

## Include in your project

### Include via cdn
```html
<!-- index.html -->

<link rel="stylesheet" href="https://unpkg.com/dantesco@0.1.13/dist/dantesco/dantesco.css">

<script type="module" src="https://unpkg.com/dantesco@0.1.13/dist/dantesco/dantesco.esm.js"></script>
```

### Install and import via cdn
```
npm install dantesco --save
```

```js
// main.js
import '/node_modules/dantesco/dist/dantesco/dantesco.css'
import '/node_modules/dantesco/dist/dantesco/dantesco.esm.js'
```

## Layout example
```html
<d-header name="..."></d-header>
<main class="d-container d-stack">
  ...
</main>
```

## How to publish this library
1. Run `npm run build`
2. Update library version in package.json
3. Run `npm publish --access=public`

## To Do
- [x] Create web component's library
- [x] Publish library to npm
- [ ] Create a Storybook 
- [ ] Start using the library