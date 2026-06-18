import Link from "next/link"

export default function Page() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Tiled & sprite backgrounds</h1>
          <p>Four takes on the same effect, one per page:</p>
        </div>
        <div className="flex flex-col gap-2">
          <Link href="/cursor/drift" className="underline-offset-4 hover:underline">
            → /cursor/drift — Cursor SVG in pure-CSS drift
          </Link>
          <Link href="/cursor/sprites" className="underline-offset-4 hover:underline">
            → /cursor/sprites — Cursor SVG in canvas sprite field
          </Link>
          <Link href="/openai/drift" className="underline-offset-4 hover:underline">
            → /openai/drift — OpenAI SVG in pure-CSS drift
          </Link>
          <Link href="/openai/sprites" className="underline-offset-4 hover:underline">
            → /openai/sprites — OpenAI SVG in canvas sprite field
          </Link>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
    </div>
  )
}
