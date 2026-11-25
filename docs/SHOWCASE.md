# Project showcase

Case-study pages and the home-page spotlight card. Everything here is inert until a study is published: the home page is unchanged, and `/projects/<slug>/` is not built.

## Files

| File                                             | Role                                                                                               |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| `src/data/showcase.ts`                           | All case-study content. Unknowns are marked `TODO`                                                 |
| `src/pages/projects/[slug].astro`                | Case-study page; built only for `published` studies                                                |
| `src/pages/preview/[slug].astro`                 | Home-page card preview; built only with `SHOWCASE_PREVIEW=1`                                       |
| `src/components/showcase/ProjectSpotlight.astro` | Full-width featured card for the home page                                                         |
| `src/components/showcase/FlowSpine.astro`        | Numbered vertical diagram (pipeline, architecture)                                                 |
| `src/components/showcase/RunReplay.astro`        | Replays a recorded run in the browser; no backend calls                                            |
| `src/components/showcase/TerminalReplay.astro`   | Animated terminal output for backend projects (Polymath RPC); full size or `compact` inside a card |
| `src/pages/preview/terminal/[slug].astro`        | Terminal preview, full size and inside a card; built only with `SHOWCASE_PREVIEW=1`                |

## Preview locally

```bash
SHOWCASE_PREVIEW=1 npm run dev
```

- Case study: http://127.0.0.1:4321/projects/digital-scribe/
- Home card: http://127.0.0.1:4321/preview/digital-scribe/
- Polymath terminal: http://127.0.0.1:4321/preview/terminal/polymath-rpc/

## Polymath RPC terminal

The lines in `polymathReplay` follow the clients' test cases and the servers' responses in the Polymath-RPC repo, condensed to one line per call. Before go-live, run `docker compose up` there, check the lines against the real output, and set `sample: false`.

To use it as Polymath's card preview, render `<TerminalReplay data={polymathReplay} compact />` inside the card's `.shot` instead of the image.

## Go-live checklist

1. In `src/data/showcase.ts`, replace every `TODO`: metrics, demo URL, results, decisions.
2. Replace the sample replay with a recorded real run and set `replay.sample` to `false`.
3. Add a preview image or short muted loop for the card's `media` slot.
4. Set `published: true`.
5. In `src/components/Projects.astro`, render the spotlight above the featured grid and drop Digital Scribe from `projects`:

   ```astro
   ---
   import ProjectSpotlight from "./showcase/ProjectSpotlight.astro";
   import {digitalScribe} from "../data/showcase";
   ---

   <ProjectSpotlight study={digitalScribe} />
   ```

6. `npm run build`, then check `/` and `/projects/digital-scribe/`.
