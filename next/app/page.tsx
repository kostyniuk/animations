import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

import { DriftField } from "@/components/drift-field"
import { cn } from "@/lib/utils"

const examples = [
  {
    href: "/cursor/drift",
    brand: "Cursor",
    mode: "CSS Drift",
    title: "Cursor drift",
    description: "A seamless tiled SVG backdrop moving on a pure-CSS loop.",
    preview: "drift",
    src: "/cube-tile-spacious.svg",
    mark: "/cube.svg",
    background: "#0a0a0b",
    tile: 76,
    speed: 15,
    steps: [2, 1] as [number, number],
    className: "text-white",
    labelClassName: "border-white/12 bg-white/10 text-white/68",
    previewOverlay:
      "bg-[radial-gradient(circle_at_62%_38%,rgba(245,78,0,0.18),transparent_33%),linear-gradient(180deg,transparent,rgba(0,0,0,0.52))]",
  },
  {
    href: "/cursor/sprites",
    brand: "Cursor",
    mode: "Canvas Sprites",
    title: "Cursor sprites",
    description:
      "An interactive field of marks that drifts and reacts to the pointer.",
    preview: "sprites",
    src: "/cube.svg",
    mark: "/cube.svg",
    background: "#111113",
    className: "text-white",
    labelClassName: "border-white/12 bg-white/10 text-white/68",
    previewOverlay:
      "bg-[radial-gradient(circle_at_48%_46%,rgba(245,78,0,0.2),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.45))]",
  },
  {
    href: "/openai/drift",
    brand: "OpenAI",
    mode: "CSS Drift",
    title: "OpenAI drift",
    description:
      "A softly drifting monoblossom pattern behind the hero surface.",
    preview: "drift",
    src: "/openai-black-monoblossom-spacious.svg",
    mark: "/openai-black-monoblossom.svg",
    background: "#f6f5f1",
    tile: 100,
    speed: 13,
    steps: [2, 1] as [number, number],
    className: "text-black",
    labelClassName: "border-black/10 bg-black/5 text-black/62",
    previewOverlay:
      "bg-[radial-gradient(circle_at_66%_34%,rgba(16,163,127,0.2),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.2),rgba(246,245,241,0.76))]",
  },
  {
    href: "/openai/sprites",
    brand: "OpenAI",
    mode: "Canvas Sprites",
    title: "OpenAI sprites",
    description:
      "A springy canvas field with logo marks that part around movement.",
    preview: "sprites",
    src: "/openai-black-monoblossom.svg",
    mark: "/openai-black-monoblossom.svg",
    background: "#f2f0ea",
    className: "text-black",
    labelClassName: "border-black/10 bg-black/5 text-black/62",
    previewOverlay:
      "bg-[radial-gradient(circle_at_42%_38%,rgba(16,163,127,0.18),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.14),rgba(242,240,234,0.74))]",
  },
]

function Preview({ example }: { example: (typeof examples)[number] }) {
  return (
    <div
      className="relative aspect-[2.6] overflow-hidden rounded-md border border-black/10 bg-muted dark:border-white/10"
      style={{ backgroundColor: example.background }}
    >
      {example.preview === "drift" ? (
        <DriftField
          src={example.src}
          tile={example.tile}
          speed={example.speed}
          steps={example.steps}
          background={example.background}
        />
      ) : (
        <div className="absolute inset-0 opacity-80">
          <div className="absolute inset-[-18%] grid rotate-[-12deg] grid-cols-5 place-items-center gap-5">
            {Array.from({ length: 30 }).map((_, index) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={index}
                src={example.src}
                alt=""
                aria-hidden
                className={cn(
                  "size-6 opacity-70",
                  index % 3 === 0 && "translate-y-4 rotate-12",
                  index % 4 === 0 && "scale-125 opacity-40"
                )}
              />
            ))}
          </div>
        </div>
      )}
      <div
        aria-hidden
        className={cn("absolute inset-0", example.previewOverlay)}
      />
      <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4">
        <div>
          <div
            className={cn(
              "text-xs tracking-[0.16em] uppercase",
              example.labelClassName
            )}
          >
            <span className="inline-flex rounded-full border border-current/20 px-2.5 py-1">
              {example.mode}
            </span>
          </div>
        </div>
        <span className="grid size-10 place-items-center rounded-full border border-current/15 bg-background/70 backdrop-blur">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={example.mark} alt="" aria-hidden className="size-5" />
        </span>
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <main className="min-h-svh bg-background px-5 py-5 text-foreground sm:px-8 sm:py-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5">
        <header className="grid gap-4 border-b border-border pb-5 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-4xl">
            <h1 className="max-w-4xl text-3xl leading-tight font-semibold tracking-normal sm:text-4xl">
              Tiled and sprite backgrounds
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
              Four compact experiments in brand-mark motion, split between
              seamless CSS tiling and pointer-reactive canvas fields.
            </p>
          </div>
        </header>

        <section className="grid gap-4 sm:grid-cols-2">
          {examples.map((example) => (
            <Link
              key={example.href}
              href={example.href}
              className={cn(
                "group rounded-lg border border-border bg-card p-3 text-card-foreground transition duration-200",
                "hover:-translate-y-0.5 hover:border-foreground/25 hover:shadow-xl hover:shadow-black/5",
                "focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:outline-none",
                example.className
              )}
            >
              <Preview example={example} />
              <div className="flex items-start justify-between gap-4 px-1 pt-3 pb-0.5">
                <div className="min-w-0">
                  <div className="text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
                    {example.brand}
                  </div>
                  <h2 className="mt-0.5 text-lg font-semibold tracking-normal text-foreground">
                    {example.title}
                  </h2>
                  <p className="mt-1 max-w-md text-sm leading-5 text-muted-foreground">
                    {example.description}
                  </p>
                </div>
                <span className="mt-1 grid size-9 shrink-0 place-items-center rounded-md border border-border bg-background text-foreground transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="size-4" aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  )
}
