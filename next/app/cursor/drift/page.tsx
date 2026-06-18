import { BackgroundExamplePage } from "@/components/background-example-page"

export default function CursorDriftPage() {
  return (
    <BackgroundExamplePage
      brand="cursor"
      mode="drift"
      src="/cube-tile-spacious.svg"
      title="Cursor"
      description="A seamless tiled brand backdrop that drifts continuously behind a landing-page hero without adding client-side canvas."
      tile={84}
      speed={16}
      steps={[2, 1]}
    />
  )
}
