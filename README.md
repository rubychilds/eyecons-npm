# Icon Library

A React icon library distributed as individual components, built with TypeScript.

## Installation

```bash
npm install icon-library
# or
yarn add icon-library
```

## Usage

```jsx
import { Home, Search, Settings } from 'icon-library';

function App() {
  return (
    <div>
      <Home size={24} color="blue" />
      <Search size={32} />
      <Settings size={16} color="#ff0000" />
    </div>
  );
}
```

## Available Icons

- `Home`
- `Search` 
- `Settings`

## Props

All icons accept the following props:

- `size`: number | string (default: 24) - Sets width and height
- `color`: string (default: 'currentColor') - Sets the stroke color
- All standard SVG props are also supported

## Development

```bash
# Install dependencies
yarn install

# Build the library
yarn build

# Watch for changes during development
yarn dev
```

## License

MIT © Ruby Childs
