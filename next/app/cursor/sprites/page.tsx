import { BackgroundExamplePage } from "@/components/background-example-page"

export default function CursorSpritesPage() {
  return (
    <BackgroundExamplePage
      brand="cursor"
      mode="sprites"
      src="/cube.svg"
      title="Cursor"
      description="A responsive field of Cursor marks that drifts quietly, then gives way to the pointer for a subtle interactive hero surface."
      size={24}
      density={1}
      speed={1}
    />
  )
}
