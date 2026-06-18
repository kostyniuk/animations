import Link from "next/link"

import { DriftField } from "@/components/drift-field"
import { SpriteField } from "@/components/sprite-field"
import { cn } from "@/lib/utils"

type Brand = "cursor" | "openai"

type BaseProps = {
  brand: Brand
  mode: "drift" | "sprites"
  src: string
  title: string
  description: string
  eyebrow?: string
  background?: string
}

type DriftProps = BaseProps & {
  mode: "drift"
  tile?: number
  speed?: number
  steps?: [number, number]
}

type SpritesProps = BaseProps & {
  mode: "sprites"
  size?: number
  density?: number
  speed?: number
  pushRadius?: number
  pushForce?: number
}

export type BackgroundExamplePageProps = DriftProps | SpritesProps

const brandStyles = {
  cursor: {
    background: "#0a0a0b",
    text: "text-white",
    font: "[font-family:var(--font-cursor-brand)]",
    eyebrow: "font-normal tracking-[0.22em] text-white/45",
    title: "font-normal tracking-[-0.06em]",
    description: "text-white/55",
    button: "border-white/10 bg-white/10 text-white/75 hover:bg-white/15 hover:text-white",
    driftOverlay: "bg-[radial-gradient(120%_90%_at_50%_0%,rgba(255,255,255,0.05),transparent_55%)]",
    spriteOverlay: "[box-shadow:inset_0_0_220px_50px_rgba(0,0,0,0.6)]",
  },
  openai: {
    background: "#f6f5f1",
    text: "text-black",
    font: "[font-family:var(--font-openai-brand)]",
    eyebrow: "font-medium tracking-[0.28em] text-black/45",
    title: "font-semibold tracking-[-0.055em]",
    description: "text-black/55",
    button: "border-black/10 bg-black/10 text-black/70 hover:bg-black/15 hover:text-black",
    driftOverlay: "bg-[radial-gradient(120%_90%_at_50%_0%,rgba(255,255,255,0.7),transparent_58%)]",
    spriteOverlay: "[box-shadow:inset_0_0_220px_50px_rgba(255,255,255,0.65)]",
  },
} satisfies Record<Brand, Record<string, string>>

export function BackgroundExamplePage(props: BackgroundExamplePageProps) {
  const styles = brandStyles[props.brand]
  const background = props.background ?? styles.background
  const isSprites = props.mode === "sprites"

  return (
    <main className="relative min-h-svh overflow-hidden" style={{ backgroundColor: background, ...(isSprites ? { cursor: "crosshair" } : {}) }}>
      {props.mode === "drift" ? (
        <DriftField src={props.src} tile={props.tile} speed={props.speed} steps={props.steps} background={background} />
      ) : (
        <SpriteField
          src={props.src}
          size={props.size}
          density={props.density}
          speed={props.speed}
          background={background}
          pushRadius={props.pushRadius}
          pushForce={props.pushForce}
        />
      )}

      <div aria-hidden className={cn("pointer-events-none absolute inset-0", props.mode === "drift" ? styles.driftOverlay : styles.spriteOverlay)} />

      <div
        className={cn(
          "absolute inset-x-0 top-[22svh] z-10 flex flex-col items-center px-6 text-center",
          isSprites && "pointer-events-none",
          styles.text,
          styles.font,
        )}
      >
        <p className={cn("text-xs uppercase", styles.eyebrow)}>{props.eyebrow ?? "Landing background"}</p>
        <h1 className={cn("mt-8 text-[clamp(5.5rem,20vw,20rem)] leading-[0.82]", styles.title)}>{props.title}</h1>
        <p className={cn("mt-7 max-w-xl text-base leading-7 font-normal md:text-lg", styles.description)}>{props.description}</p>
        <Link
          href="/"
          className={cn(
            "pointer-events-auto mt-8 rounded-full border px-6 py-3 text-xs uppercase backdrop-blur-sm transition",
            props.brand === "cursor" ? "font-normal tracking-[0.14em]" : "font-medium tracking-[0.16em]",
            styles.button,
          )}
        >
          ← back
        </Link>
      </div>
    </main>
  )
}
