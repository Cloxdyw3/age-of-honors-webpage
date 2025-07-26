# Age of Honor - Vite + React + TypeScript

This project is a showcase and info site for the Roblox game "Age of Honor". It is built with modern React, TypeScript, TailwindCSS, and Vite.

## Features

- Pages for clans, weapons, mechanics, controls, skins, and more
- Fully responsive and animated UI
- Visual and GIF support (in the assets folder)
- Easy navigation with a custom navbar
- Custom themes and fonts via TailwindCSS

## Installation

```sh
npm install
```

## Development Server

```sh
npm run dev
```

## Build for Production

```sh
npm run build
```

## Preview Production Build

```sh
npm run preview
```

## Directory Structure

```
src/
  assets/         # Images and fonts
  components/     # React components
  App.tsx         # Main app
  main.tsx        # Entry point
  index.css       # Global styles
```

## Notes

- All images and fonts should be placed in the `src/assets` folder.
- Always import images before using them:
  ```tsx
  import swordImg from '../assets/weapons/sword.png';
  ```
- If images do not load after build, check your import statements.

## Contributing

Feel free to open issues or pull requests.


---

TunaStudio & Age of Honor

---

By: Cloxdy
Discord: doruhk
