# Asset workflow and favicon generation

Project follows this structure for assets (best practice):

- `public/` — deployable static assets (favicons, static HTML pages, etc.)
- `src/assets/` — editable source assets (original logos, vectors)

To regenerate all favicons from the source logo, run:

```sh
npm run generate:favicons
```

This requires ImageMagick (`magick`) to be installed on your machine. The script will:

- trim transparent/near-transparent borders from `src/assets/Reso_Logo.png`
- output `favicon-16.png`, `favicon-32.png`, `favicon-48.png`, `favicon-96.png`, and `favicon.ico` into `public/`

Notes:
- Keep `src/assets/Reso_Logo.png` as the single editable source file.
- Keep `public/` as the place for generated/deployable files so the build and static server serve them directly.
