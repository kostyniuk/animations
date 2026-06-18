import Link from "next/link"

import { DriftField } from "@/components/drift-field"
import { SpriteField } from "@/components/sprite-field"
// import { GlassScrimCard } from "@/components/ui/glasscn/glass-scrim-card"
import { GlassCard } from "@/components/ui/glasscn/glass-card"
import { HighlightText } from "@/components/ui/highlight-text"
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
    button:
      "border-white/10 bg-white/10 text-white/75 hover:bg-white/15 hover:text-white",
    mark: "/cube.svg",
    markChip: "border-white/30 bg-black/80",
    card: "text-white",
    cardEyebrow: "text-white/62",
    cardDescription: "text-black/72",
    cardButton:
      "border-white/15 bg-white/10 text-white/78 hover:bg-white/16 hover:text-white",
    driftOverlay:
      "bg-[radial-gradient(120%_90%_at_50%_0%,rgba(255,255,255,0.05),transparent_55%)]",
    spriteOverlay: "[box-shadow:inset_0_0_220px_50px_rgba(0,0,0,0.6)]",
  },
  openai: {
    background: "#f6f5f1",
    text: "text-black",
    font: "[font-family:var(--font-openai-brand)]",
    eyebrow: "font-medium tracking-[0.28em] text-black/45",
    title: "font-semibold tracking-[-0.055em]",
    description: "text-black/55",
    button:
      "border-black/10 bg-black/10 text-black/70 hover:bg-black/15 hover:text-black",
    mark: "/openai-black-monoblossom.svg",
    markChip: "border-black/30 bg-white/80",
    card: "text-black",
    cardEyebrow: "text-black/66",
    cardDescription: "text-black/74",
    cardButton:
      "border-black/15 bg-black text-white hover:bg-black/16 hover:text-black",
    driftOverlay:
      "bg-[radial-gradient(120%_90%_at_50%_0%,rgba(255,255,255,0.7),transparent_58%)]",
    spriteOverlay: "[box-shadow:inset_0_0_220px_50px_rgba(255,255,255,0.65)]",
  },
} satisfies Record<Brand, Record<string, string>>

export function BackgroundExamplePage(props: BackgroundExamplePageProps) {
  const styles = brandStyles[props.brand]
  const background = props.background ?? styles.background
  const isSprites = props.mode === "sprites"

  return (
    <main
      className="relative min-h-svh overflow-hidden"
      style={{
        backgroundColor: background,
        ...(isSprites ? { cursor: "crosshair" } : {}),
      }}
    >
      {props.mode === "drift" ? (
        <DriftField
          src={props.src}
          tile={props.tile}
          speed={props.speed}
          steps={props.steps}
          background={background}
        />
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

      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0",
          props.mode === "drift" ? styles.driftOverlay : styles.spriteOverlay
        )}
      />

      <div
        className={cn(
          "absolute inset-x-0 top-[22svh] z-10 flex flex-col items-center px-6 text-center",
          isSprites && "pointer-events-none",
          styles.text,
          styles.font
        )}
      >
        {/* <GlassScrimCard
          className={cn(
            "items-center px-6 py-8 text-center sm:px-10 sm:py-10 md:px-14",
            "max-w-[min(72rem,calc(100vw-2rem))]",
            styles.card
          )}
          surfaceClassName="rounded-[2rem] sm:rounded-[2.5rem]"
          scrim={props.brand === "cursor" ? 'top' : 'bottom'}
          scrimOpacity={props.brand === "cursor" ? 0.72 : 0.68}
          scrimCoverage={0.86}
          liquidProps={{ blur: 0.5, refraction: 10, saturation: 1.18 }}
        > */}
        <GlassCard
          className={cn(
            "items-center px-5 py-6 text-center sm:px-6 sm:py-7 md:px-8",
            "max-w-[min(36rem,calc(100vw-2rem))]",
            styles.card
          )}
          surfaceClassName="rounded-[2rem] sm:rounded-[2.5rem]"
          liquidProps={{ blur: 2, refraction: 15, saturation: 2 }}
        >
          <span
            className={cn(
              "flex size-16 items-center justify-center rounded-2xl border backdrop-blur-md sm:size-20",
              styles.markChip
            )}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={styles.mark}
              alt=""
              aria-hidden
              className="size-8 sm:size-10"
            />
          </span>
          <h1
            className={cn(
              "mt-5 text-[clamp(2.25rem,7vw,5rem)] leading-[0.9]",
              styles.title
            )}
          >
            {props.title}
          </h1>
          <p
            className={cn(
              "mt-6 max-w-xl text-base leading-7 font-normal md:text-lg",
              styles.cardDescription
            )}
          >
            <HighlightText
              className={
                props.brand === "openai" ? "!bg-[#10A37F]" : "!bg-[#f54e00]"
              }
              textClassName={props.brand === "cursor" ? "text-white/95" : undefined}
            >
              {props.description}
            </HighlightText>
          </p>
          <Link
            href="/"
            className={cn(
              "pointer-events-auto mt-7 rounded-full border px-6 py-3 text-xs uppercase backdrop-blur-sm transition",
              props.brand === "cursor"
                ? "font-normal tracking-[0.14em]"
                : "font-medium tracking-[0.16em]",
              styles.cardButton
            )}
          >
            ← back
          </Link>
        </GlassCard>
        {/* </GlassScrimCard> */}
      </div>
    </main>
  )
}
