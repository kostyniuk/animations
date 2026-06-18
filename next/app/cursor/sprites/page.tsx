import { BackgroundExamplePage } from "@/components/background-example-page"

export default function CursorSpritesPage() {
  return (
    <BackgroundExamplePage
      brand="cursor"
      mode="sprites"
      src="/cube.svg"
      title="Cursor"
      description="A field of Cursor marks that drifts quietly and parts around your pointer, turning the hero into a subtle interactive surface."
      size={24}
      density={1}
      speed={1}
    />
  )
}
