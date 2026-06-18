# Mission: How the cursor-cube grid animation works

## Why
Understand the techniques behind the kind of ambient + interactive canvas effect in `grid.html` — deeply enough to reason about how it's built and to judge when an effect should be CSS, JS/canvas, or both. The goal is understanding, not (yet) shipping an original effect.

## Success looks like
- Can explain, in their own words, why `grid.html` uses canvas + a per-frame loop rather than CSS.
- Can decompose any motion effect into "ambient" vs "interactive" parts and say which tool each needs.
- Can read the `update`/`draw`/loop structure of a canvas animation and predict its behaviour.

## Constraints
- Comfortable with JS and CSS; new to canvas and animation loops — teach canvas concepts gently, lean on JS intuition.
- Mission is "understand", so favour mental models and live demos over build-from-scratch projects.

## Out of scope
- Shipping a polished original effect (may change later).
- WebGL / shaders — stay in 2D canvas + CSS for now.
