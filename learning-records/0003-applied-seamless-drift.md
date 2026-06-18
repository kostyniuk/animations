# Can apply the seamless-drift rule unaided

The learner built `grid-basic.html` from scratch — a pure-CSS tiled `cube-tile.svg` drifting via `background-position` `0 0 → 150px 150px` over a `50px` square tile. Correctly chose whole-tile multiples (150 = 3×50) in both axes, so the loop is genuinely seamless.

Evidence: working implementation, not just recall. Confirms Lesson 01's core skill is internalised hands-on.

Implications:
- Seamless infinite drift (function-of-time / CSS half) is now a demonstrated skill, not just understood. Don't re-teach it.
- Ready for the interactive/state half: the animation loop (Lesson 02) and the force field (planned Lesson 03). Next natural challenge is anything CSS *can't* do — arbitrary drift angles, momentum, pointer proximity.
- Watch for the non-square-tile pitfall if they reuse `cube.svg`; they haven't hit it yet.
