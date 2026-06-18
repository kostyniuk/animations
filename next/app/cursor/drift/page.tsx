import { BackgroundExamplePage } from "@/components/background-example-page"

export default function CursorDriftPage() {
  return (
    <BackgroundExamplePage
      brand="cursor"
      mode="drift"
      src="/cube-tile-spacious.svg"
      title="Cursor"
      description="A seamless tiled backdrop that drifts continuously behind the hero, giving the page a calm, endless sense of motion."
      tile={84}
      speed={16}
      steps={[2, 1]}
    />
  )
}
